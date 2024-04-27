type Join<T extends string[], U extends string> = T extends [infer A extends string, ...infer Rest extends string[]]
  ? T extends [infer B extends string]
    ? `${B}`
    : `${A}${U}${Join<Rest, U>}`
  : '';