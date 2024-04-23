export type IsEqual<X, Y> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false;
export type IndexOf<T extends any[], U, Result extends any[] = []> = T extends [infer F, ...infer R]
    ? IsEqual<F, U> extends true
        ? Result['length']
        : IndexOf<R, U, [...Result, 0]>
    : -1;
