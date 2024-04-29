export type CheckRepeatedChars<T extends string> = T extends `${infer A}${infer B}`
  ? B extends `${string}${A}${string}`
    ? true
    : CheckRepeatedChars<B>
  : false;