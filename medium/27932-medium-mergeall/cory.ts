export type Merge<T extends object, U extends object> = {
    [K in (keyof T | keyof U)]: K extends keyof T 
        ? K extends keyof U ? T[K] | U[K] : T[K]
        : K extends keyof U ? U[K] : never
}

export type MergeAll<XS extends unknown[]> = XS extends [infer F, ...infer U] 
    ? F extends any[] 
        ? MergeAll<F> & MergeAll<U> 
        : Merge<{ [K in keyof F]: F[K] }, MergeAll<U>>
    : {}; 