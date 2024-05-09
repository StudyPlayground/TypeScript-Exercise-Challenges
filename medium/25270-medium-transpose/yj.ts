
export type Transpose<M extends any[][], R = M ["length"] extends 0? []:M[0]> = {
    [x in keyof R]:{
      [y in keyof M] : x extends keyof M[y]? M[y][x]:never
  
    }
  }