export type Flip<T extends {
    [x: string]: any
  }> =  {
    [P in keyof T as `${T[P]}`] : P
  }