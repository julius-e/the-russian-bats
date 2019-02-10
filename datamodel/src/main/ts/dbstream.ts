import * as _ from "lodash";
import * as logUpdate from "log-update";
import { Writable, WritableOptions } from "stream";
import {
  BattingCreateInput,
  PersonCreateInput,
  PitchingCreateInput,
  prisma
} from "./prisma-client";

const BUFFER_MAX = 1000;

type input = BattingCreateInput | PersonCreateInput | PitchingCreateInput;

export class DBStream extends Writable {
  className: string;
  x = 0;
  log: (text: string) => void;
  buffer: Array<input>;

  constructor(options: WritableOptions & { className: string }) {
    super(options);
    this.className = options.className;
    this.x = 0;
    this.log = logUpdate;
    this.buffer = [];
  }

  handleError = (next: (e?: Error, ret?: any) => void) => (e: Error) => {
    console.log(
      `((((((((((((((((((((((( HANDLED ERROR )))))))))))))))))))))))`
    );
    console.log(e);
    console.log(
      `((((((((((((((((((((((((( END ERROR )))))))))))))))))))))))))`
    );
    this.buffer = [];
    return next();
  };

  sanitize(r: input): input {
    return _.mapValues(r, v => (v === "" ? null : v)) as any;
  }

  async process(recToWrite: input): Promise<any> {
    const r = this.sanitize(recToWrite);

    switch (this.className) {
      case "People": {
        return prisma.upsertPerson({
          where: { playerID: r.playerID },
          create: r,
          update: r
        });
      }
      case "Batting": {
        return prisma.createBatting({
          ...r,
          person: {
            connect: {
              playerID: r.playerID
            }
          }
        });
      }
      case "Pitching": {
        return prisma.createPitching({
          ...r,
          person: {
            connect: {
              playerID: r.playerID
            }
          }
        });
      }
      default: {
        throw new Error(`ClassName ${this.className} not recognized!`);
      }
    }
  }

  _write(
    recToWrite: BattingCreateInput,
    enc: string,
    next: (e?: Error) => any
  ) {
    this.buffer.push(recToWrite);

    if (this.buffer.length < BUFFER_MAX) {
      return next();
    }

    const size = this.buffer.length;
    return Promise.all(
      this.buffer.map(rec =>
        this.process(rec).then(
          () => this.x++, 
          this.handleError(next)
        )
      )
    ).then(() => {
      this.log(`Wrote ${size} recs to the database, ${this.x} total.`);
      this.buffer = [];
      next();
    }, this.handleError(next));
  }

  _final(next: (e?: Error) => any) {
    const size = this.buffer.length;
    return Promise.all(
      this.buffer.map(rec =>
        this.process(rec).catch(this.handleError(next))
      )
    ).then(() => {
      this.log(`Wrote ${size} recs to the database, ${this.x} total.`);
      this.buffer = [];
      return next();
    }, this.handleError(next));
  }
}
