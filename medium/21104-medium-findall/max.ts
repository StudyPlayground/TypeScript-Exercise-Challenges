export type NormalizeFindAll<
  T extends string,
  P extends string,
  A extends any[] = [],
> = T extends `${string}${infer Last}`
  ? T extends `${P}${string}`
    ? [A['length'], ...NormalizeFindAll<Last, P, [...A, 0]>]
    : [...NormalizeFindAll<Last, P, [...A, 0]>]
  : []