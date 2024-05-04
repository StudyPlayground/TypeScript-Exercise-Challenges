export type Integer<T extends string | number> = number extends T
  ? never
  : `${T}` extends `${string}.${string}`
    ? never
    : T