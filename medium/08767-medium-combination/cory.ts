export type CombUnion<T extends string, R extends string= T> = T extends infer U extends string
    ? U | `${U} ${CombUnion<Exclude<R, U>>}`
    : never;

export type Combination<T extends string[]> = CombUnion<T[number]>;