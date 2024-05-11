export type IsEqual<X, Y> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false;
export type Includes<T extends any[], U> = T extends [infer F, ...infer R]
    ? IsEqual<F, U> extends true ? true : Includes<R, U> 
    : false

export type CheckRepeatedTuple<T extends unknown[], Check extends any[] = []> = T extends [infer F, ...infer R] 
    ? Includes<Check, F> extends true ? true : CheckRepeatedTuple<R,  [...Check, F]> 
    : false;