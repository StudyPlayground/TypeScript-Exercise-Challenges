export type Without<T extends any[], U> = T extends [infer A, ...infer Rest]
  ? A extends (U extends any[] ? U[number] : U)
    ? Without<Rest, U>
    : [A, ...Without<Rest, U>]
  : T;