const fs = require('fs');
const parse = require('csv-parse/lib/sync');
const scoring = require('./scoring.json');

const FILTER_CUTOFF = 150;

const f1 = ['./2018-pitchers.csv', 'pitching'];
const f2 = ['./2018-batters.csv', 'hitting'];

const calcScoring = (conf) => {
  const f = fs.readFileSync(conf[0], 'utf8');
  const r = parse(f, {columns: true, headers: true, relax: true});

  const scoringMap = scoring[conf[1]];
  const stats = Object.keys(scoringMap);
  const scorePlayer = (p) => stats.reduce((accum, curr) => accum + (p[curr] * scoringMap[curr]), 0)

  const pts = r.map(z => ({
    ...z, 
    pts: scorePlayer(z)
  }));

  return pts.filter(p => p.pts > FILTER_CUTOFF);
}

const calcStats = (filteredPts) => {
  filteredPts.sort((a,b) => a.pts < b.pts ? 1 : -1);

  console.log(`There are ${filteredPts.length} records with point totals greater than ${FILTER_CUTOFF}`)

  const avg = filteredPts.reduce((accum, curr) => accum + curr.pts, 0) / filteredPts.length;
  console.log(`The Average is ${avg}`);

  const stdDev = Math.sqrt(filteredPts.reduce((accum, curr) => accum + (curr.pts - avg)**2, 0) / filteredPts.length);
  console.log(`The standard deviation is ${stdDev}`);

  console.log(JSON.stringify(filteredPts.slice(0, 5).map(p => ({name: p.Name || p.name || p['name'], pts: p.pts, keys: Object.keys(p)})), null, 2));
}

const pitchers = calcScoring(f1);
const hitters = calcScoring(f2);

calcStats(pitchers);
calcStats(hitters);
calcStats(pitchers.concat(hitters));