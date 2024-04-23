export type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T['length'],
  Count extends any[] = [],
  Flag extends boolean = Count['length'] extends Start ? true : false
> = Count['length'] extends End
  ? T
  : T extends [infer R, ...infer U]
    ? Flag extends false
      ? [R, ...Fill<U, N, Start, End, [...Count, 0]>]
      : [N, ...Fill<U, N, Start, End, [...Count, 0], Flag>]
    : T;