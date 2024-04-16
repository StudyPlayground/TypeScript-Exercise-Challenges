
export type IsUnion<T> = IsNever<T> extends true ? "" : T
export type IsNever<T> = [T] extends [never] ? true : false
export type BEM<B extends string, E extends string[], M extends string[]> = `${B}${IsUnion<`__${E[number]}`>}${IsUnion<`--${M[number]}`>}` 