import * as parse from 'csv-parse';
import { createReadStream } from 'fs';
import { join } from 'path';
import { DBStream } from './dbstream';
import { getStreams } from './file';

const pipeline = (
  ...streams: Array<
    NodeJS.ReadStream | NodeJS.ReadWriteStream | NodeJS.WriteStream
  >
) =>
  new Promise((res, rej) => {
    const s = streams.reduce((accum, curr) => accum.pipe(curr));
    s.once('finish', e => (e ? rej(e) : res()));
  });

async function run() {
  const fileConfig = getStreams();

  for (const path of fileConfig) {
    try {
      const parser = parse({
        cast: true,
        columns: true,
        skip_lines_with_error: false,
      });
      const rs = createReadStream(join(path.path, path.filename));
      const dbStream = new DBStream({
        objectMode: true,
        className: path.tablename,
      });
      await pipeline(rs as any, parser, dbStream as any);
    } catch (e) {
      console.log(`Error encountered: ${e}`);
      throw e;
    }
  }
}

run().then(
  () => process.exit(0), // Was Greate Success!
  e => {
    // Was full of Errors...
    console.log(e);
    process.exit(1);
  },
);
