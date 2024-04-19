export type Combination<T extends string> = [T] extends [never]
  ? ''
  : '' | {
    [K in T]: `${K}${Combination<Exclude<T, K>>}`
  }[T];

export type SplitToUnion<S extends string> = S extends `${infer A}${infer B}`
    ? A | SplitToUnion<B>
    : S;

export type AllCombinations<S extends string> = Combination<SplitToUnion<S>>