export type LastIndexOf<T extends any[], U> = T extends [...infer F, infer R]
    ? IsEqual<R, U> extends true
        ? F['length']
        : LastIndexOf<F, U> 
    : -1;