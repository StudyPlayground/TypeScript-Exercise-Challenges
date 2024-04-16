// solve with solution

export type FlattenDepth<
  T extends any[],
  S extends number = 1,
  U extends any[] = []
> = U['length'] extends S
  ? T
  : T extends [infer F, ...infer R]
    ? F extends any[]
      ? [...FlattenDepth<F, S, [...U, 1]>, ...FlattenDepth<R, S, U>]
      : [F, ...FlattenDepth<R, S, U>]
    : T;