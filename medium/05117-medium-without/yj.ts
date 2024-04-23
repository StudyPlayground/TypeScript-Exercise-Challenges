export type ToUnion<T> = T extends any[] ? T[number] : T
export type Without<T, U > = T extends [infer F, ...infer R]? 
  F extends ToUnion<U>?
    Without<R,U>
    :[F , ...Without<R,U>]
    :T
