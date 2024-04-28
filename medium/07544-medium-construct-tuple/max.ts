export type ConstructTuple<L extends number, A extends unknown[] = []> = L extends A['length']
  ? A
  : ConstructTuple<L, [...A, unknown]>