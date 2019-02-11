import * as _ from 'lodash';
import { scoring } from '../custom-queries/scoring';
import { Prisma } from '../prisma-client';
import { defaults, Scoring } from '../types/inputTypes';

export const Query = {
  person(
    parent: any,
    args: { query: any; variables: any },
    ctx: { prisma: Prisma },
    info: any,
  ) {
    console.log(JSON.stringify(args, null, 2));
    const myArgs: any = _.values(args);
    return ctx.prisma.$graphql(myArgs);
  },
  persons(parent: any, args: any, ctx: any, info: any) {
    console.log(JSON.stringify(args, null, 2));
    return ctx.prisma.persons();
  },
  async scoring(
    parent: any,
    args: { scoring: Scoring; skip: number; take: number },
    ctx: { prisma: Prisma },
  ) {
    const scoringVals = {
      batting: {
        ...defaults.batting,
        ...args.scoring.batting,
      },
      pitching: {
        ...defaults.pitching,
        ...args.scoring.pitching,
      },
    };

    const results = await scoring(scoringVals, args.skip, args.take);

    return results;
  },
};
