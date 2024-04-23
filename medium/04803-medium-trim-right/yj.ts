export type NullType =  '\n'|"\t"|' '
export type TrimRight<S extends string> = S extends `${infer F}${NullType}` ? TrimRight<`${F}`> : S 