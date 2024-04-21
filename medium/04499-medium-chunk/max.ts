export type Chunk<T extends any[], N extends number, Temp extends any[] = []> = Temp['length'] extends N
  ? [Temp, ...Chunk<T, N>]
  : T extends [infer A, ...infer Rest]
    ? Chunk<Rest, N, [...Temp, A]>
    : Temp extends []
      ? Temp
      : [Temp]