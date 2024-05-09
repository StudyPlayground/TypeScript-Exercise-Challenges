export type Combs<T extends any[]> = T extends [infer R extends string , ...infer Rest extends string[]] 
    ? `${R} ${Rest[number]}`| Combs<Rest> 
    : never
    