export type ParseUrlParams<T extends string> = T extends `${string}:${infer R}` 
    ? R extends `${infer F}/${infer K}` 
        ? F | ParseUrlParams<K> 
        : R
    : never;