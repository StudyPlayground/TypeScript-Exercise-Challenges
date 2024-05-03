export type ParseUrlParams<T extends string> = T extends `${string}:${infer Rest}`
  ? Rest extends `${infer A}/${infer B}`
    ? A | ParseUrlParams<B>
    : Rest
  : never;