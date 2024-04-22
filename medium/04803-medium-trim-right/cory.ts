export type Space = ' ' | '\n' | '\t'
export type TrimRight<S extends string> = S extends `${infer U}${Space}` ? TrimRight<U> : S;