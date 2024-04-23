export type TrimRight<S extends string> = S extends `${infer A} ` | `${infer A}\n` | `${infer A}\t`
  ? TrimRight<A>
  : S;