import * as parse from "csv-parse";
import { createReadStream, readdirSync } from "fs";
import { join } from "path";
import { Writable } from "stream";

export interface FileConfig {
  filename: string;
  tablename: string;
  path: string;
}

const pipeline = (
  ...streams: Array<
    NodeJS.ReadStream | NodeJS.ReadWriteStream | NodeJS.WriteStream
  >
) =>
  new Promise((res, rej) => {
    const s = streams.reduce((accum, curr) => accum.pipe(curr));
    s.once("finish", e => (e ? rej(e) : res()));
  });
// pipelineCb(streams, (e: Error) => e ? rej(e) : res()));

export function getStreams() {
  const dbFilesPath =
    "/home/juliusecker/projects/mlb/baseballdatabank-master/core";
  const files = ['Person.csv', 'Batting.csv', 'Pitching.csv'] // readdirSync(dbFilesPath);
  const dbFiles = files
    .filter(f => f.endsWith(".csv"))
    .map(f => ({ filename: f, tablename: f.split(".")[0], path: dbFilesPath }));

  const dbFileReaders = dbFiles.map(
    f => (dbWriteStream: (fc: FileConfig) => Array<Writable>) => {
      // Create the parser
      const parser = parse({
        cast: false,
        columns: true
      });
      const rs = createReadStream(join(dbFilesPath, f.filename));
      return pipeline(rs as any, parser, ...(dbWriteStream(f) as any)).catch(
        e => console.log(e)
      );
    }
  );

  return [dbFiles, dbFileReaders] as [typeof dbFiles, typeof dbFileReaders];
}
