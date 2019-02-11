export interface Scoring {
  batting: Batting;
  pitching: Pitching;
}

export interface Batting {
  H: number;
  Double: number;
  Triple: number;
  HR: number;
  SB: number;
  CS: number;
  SO: number;
  BB: number;
}

export interface Pitching {
  IPouts: number;
  SO: number;
  BB: number;
  W: number;
  L: number;
  H: number;
  SV: number;
}

export const defaults: Scoring = {
  batting: {
    H: 0,
    Double: 0,
    Triple: 0,
    HR: 0,
    SB: 0,
    CS: 0,
    SO: 0,
    BB: 0
  },
  pitching: {
    IPouts: 0,
    SO: 0,
    BB: 0,
    W: 0,
    L: 0,
    H: 0,
    SV: 0
  }
};
