export type ArrToUnion<T extends string[]> = T extends [infer F extends string, ...infer R extends string[]] 
    ? F | ArrToUnion<R> 
    : never 

export type Combs<T extends any[]> = T extends [infer F extends string, ...infer R extends string[]] 
    ? `${F} ${ArrToUnion<R>}` | Combs<R>   
    : never; 
