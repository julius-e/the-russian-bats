import * as _ from "lodash";
import * as mysql from "mysql2";
import { Batting, Pitching, Scoring } from '../types/inputTypes';
import { Person } from "../prisma-client";

const pool = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "prisma",
  port: 3307,
});

const getConnection = () =>
  new Promise<mysql.Connection>((res, rej) =>
    pool.getConnection((e, conn) => (e ? rej(e) : res(conn))),
  );

const queryBuilder = (battingOrPitching: 'Batting' | 'Pitching', scoring: Batting | Pitching, year: number): [string, Array<string|number>] => {
  const keys = _.keys(scoring);
  const colPairs = keys
    .map(k => {
      return [`SUM(\`${k}\`) \`${k}\``, `SUM(\`${k}\` * ?) ${k}_score`];
    })
  const cols = colPairs.reduce((accum, curr) => {
      return accum.concat(curr);
    }, []);
  const values = keys.map(k => scoring[k]);
  const binds = values.concat(values).concat([year]).concat(values);

  const query = `
    SELECT b.playerID, ${cols.join(', ')}, (${keys.map(k => `SUM(\`${k}\` * ?)`).join(' + ')}) scoring
    FROM \`default@default\`.${battingOrPitching} b 
    WHERE b.yearID = ?
    GROUP BY b.playerID
    ORDER BY ${keys.map(k => `SUM(\`${k}\` * ?)`).join(' + ')} DESC
  `;

  return [query, binds];
}

export async function scoring(
  scoring: Scoring,
  skip: number = 0,
  take: number = 25,
  orderBy: string = 'scoring',
) {
  const conn: mysql.Connection & {
    release: () => Promise<void>;
  } = (await getConnection()) as any;
  const battingQuery = queryBuilder('Batting', scoring.batting, 2017);
  const pitchingQuery = queryBuilder('Pitching', scoring.pitching, 2017);

  const query = `
    SELECT p.*, s.scoring scoring FROM
    ((${battingQuery[0]})
    UNION ALL
    (${pitchingQuery[0]})) s
    JOIN \`default@default\`.Person p on p.playerID = s.playerID
    ORDER BY scoring DESC
    LIMIT ?
  `;

  const results = await new Promise<Array<Person>>((res, rej) => 
    conn.query(query, battingQuery[1].concat(pitchingQuery[1]).concat([skip + take]) , (e, result) => 
      e ? rej(e) : res(result as any),
    ),
  );

  conn.release();

  return results.slice(skip, skip + take);
}
