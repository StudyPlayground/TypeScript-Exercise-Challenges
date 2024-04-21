export type Chuck<T extends any[], N extends number, Temp extends any[] = []> = Temp['length'] extends N
  ? [Temp, ...Chuck<T, N>]
  : T extends [infer A, ...infer Rest]
    ? Chuck<Rest, N, [...Temp, A]>
    : Temp extends []
      ? Temp
      : [Temp]