export type IsEqual<X, Y> = (<T>() => T extends X ? 1 : 0) extends (<T>() => T extends Y ? 1 : 0) ? true : false; 
export type All<T extends any[], P> = T extends [infer F, ...infer R] ? IsEqual<F, P> extends true ? All<R, P> : false : true
