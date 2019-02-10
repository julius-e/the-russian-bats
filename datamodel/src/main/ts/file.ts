export interface FileConfig {
  filename: string;
  tablename: string;
  path: string;
}

export function getStreams() {
  const dbFilesPath =
    "/home/juliusecker/projects/mlb/baseballdatabank-master/core";
  const files = ["People.csv", "Batting.csv", "Pitching.csv"]; // readdirSync(dbFilesPath);
  const dbFiles = files
    .filter(f => f.endsWith(".csv"))
    .map(f => ({ filename: f, tablename: f.split(".")[0], path: dbFilesPath }));

  return dbFiles;
}
