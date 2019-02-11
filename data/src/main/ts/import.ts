import { exec } from 'child_process';
import * as _ from 'lodash';
import * as logUpdate from 'log-update';
import * as mysql from 'mysql2';
import { join } from 'path';
import { Writable } from 'stream';
import * as through2 from 'through2';
import { FileConfig, getStreams } from './file';

const BATCH_SIZE = 10000;

const head = (file: string) =>
  new Promise<[string, string]>((res, rej) =>
    exec(`head -n 1 ${file}`, (err, stdout, stderr) =>
      err ? rej(err) : res([stdout, stderr]),
    ),
  );

const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'mlb',
  password: 'password',
  database: 'mlb',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const getConnection = () =>
  new Promise<mysql.PoolConnection>((res, rej) =>
    pool.getConnection((err, connection) => (err ? rej(err) : res(connection))),
  );

const query = (connection: mysql.Connection) => (q: string, values?: Array<any>) =>
  new Promise<[any, any]>((res, rej) =>
    values
      ? connection.query(q, values, (err, rez, fields) =>
          err ? rej(err) : res([rez, fields]),
        )
      : connection.query(q, (err, rez, fields) =>
          err ? rej(err) : res([rez, fields]),
        ),
  );

const convertObjToInsert = (row: {
  [props: string]: string | number | boolean;
}) => {
  const keys = Object.keys(row);
  const columns = keys.map(k => `\`${k}\``).join(', ');
  const valuesMapper = (r: { [props: string]: string | number | boolean }) =>
    keys.map(c => String(r[c]).slice(0, 63));
  return { columns, valuesMapper };
};

const BatchStream = <T>(size: number = BATCH_SIZE) => {
  let batch: Array<T> = [];
  return through2(
    { objectMode: true },
    (chunk: T, enc, next) => {
      if (batch.length >= size) {
        next(null, batch);
        batch = [];
      } else {
        batch.push(chunk);
        next();
      }
    },
    function flush(next) {
      this.push(batch);
      batch = [];
      next();
    },
  );
};

class DBStream extends Writable {
  className: string;
  x = 0;
  log: (text: string) => void;

  constructor(options: any) {
    super(options);
    this.className = options.className;
    this.x = 0;
    this.log = logUpdate;
  }

  handleError = (next: (e: Error, ret?: any) => void) => (e: Error) => {
    console.log(e);
    next(e);
  };

  async process(
    recsToWrite: Array<{ [prop: string]: string | number | boolean }>,
  ): Promise<void> {
    const connection = await getConnection();
    const q = query(connection);

    if (recsToWrite.length === 0) {
      return Promise.resolve();
    }

    const { columns, valuesMapper } = convertObjToInsert(recsToWrite[0]);
    const insert = `INSERT INTO \`${this.className}\` (${columns}) VALUES ?`;

    await q(insert, [recsToWrite.map(x => valuesMapper(x))]);

    connection.release();
    return;
  }

  _write(
    recsToWrite: Array<{ [prop: string]: string | number | boolean }>,
    enc: string,
    next: (e?: Error) => any,
  ) {
    this.process(recsToWrite).then(() => {
      this.log(`Wrote ${(this.x += recsToWrite.length)} rows...`);
      return next();
    }, this.handleError(next));
  }
}

function processFile(fileConfig: FileConfig): Array<Writable> {
  console.log(`*** Uploading Data for Table ${fileConfig.filename}`);
  return [
    BatchStream(),
    new DBStream({ objectMode: true, className: fileConfig.tablename }),
  ];
}

async function run() {
  const [files, fileReaders] = getStreams();
  const fileProcessorTasks = fileReaders.map(x => async () => x(processFile));
  const deleteTableTasks = files.map((fileConfig: FileConfig) => async () => {
    console.log(`*** Deleting Table ${fileConfig.tablename}`);
    const connection = await getConnection();
    const q = query(connection);
    await q(`DROP TABLE IF EXISTS \`${fileConfig.tablename}\``);

    connection.release();
    return;
  });

  const createTableTasks = files.map((fileConfig: FileConfig) => async () => {
    console.log(`*** Creating Table ${fileConfig.tablename}`);
    const headersRaw = await head(join(fileConfig.path, fileConfig.filename));
    const headers = headersRaw[0].trim().split(',');
    const connection = await getConnection();
    const create = `CREATE TABLE IF NOT EXISTS \`${
      fileConfig.tablename
    }\` (${headers.map(h => `\`${h}\` VARCHAR(64)`).join(',\n')})`;
    connection.release();
    const q = query(connection);
    await q(create);
    connection.release();
    return;
  });

  const zippedTasks = _.zip(
    deleteTableTasks,
    createTableTasks,
    fileProcessorTasks,
  );

  for (const task of zippedTasks) {
    try {
      await task[0]();
      await task[1]();
      await task[2]();
    } catch (e) {
      console.log(`Error encountered: ${e}`);
      throw e;
    }
  }

  return;
}

run().then(
  () => process.exit(0), // Was Greate Success!
  e => {
    // Was full of Errors...
    console.log(e);
    process.exit(1);
  },
);
