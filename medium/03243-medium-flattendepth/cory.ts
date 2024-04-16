/* 아래처럼 하면 infinity 에러남 ㅜㅜ
export type Flatten<T extends any[]> = T extends [[...infer F], ...infer R] ? [...F, ...Flatten<R>]
    : T extends [infer F, ...infer R] ? [F, ...Flatten<R>]
    : T

export type FlattenDepth<T extends any[], R extends number = 1, U extends any[] = []> = U['length'] extends R ? T
    : FlattenDepth<Flatten<T>, R, [...U, 1]>
 */

    export type FlattenDepth<
    T extends any[],
    S extends number = 1,
    U extends any[] = []
> = U['length'] extends S ? T
    : T extends [[...infer F], ...infer R] ? [...FlattenDepth<F, S, [...U, 1]>, ...FlattenDepth<R, S, U>]
        : T extends [infer F, ...infer R] ? [F, ...FlattenDepth<R, S, U>]
            : T