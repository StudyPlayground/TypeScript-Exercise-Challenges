export type Includes<Target, TargetArray = []> = TargetArray extends [infer A, ...infer Rest]
  ? Equal<Target, A> extends true
    ? true
    : Includes<Target, Rest>
  : false;

export type Unique<T, U extends any[] = []> = T extends [infer A, ...infer Rest]
  ? Includes<A, U> extends true
    ? Unique<Rest, U>
    : Unique<Rest, [...U, A]>
  : U;