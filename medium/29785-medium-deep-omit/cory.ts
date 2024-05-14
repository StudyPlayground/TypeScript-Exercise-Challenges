export type Intersection<T> = { [K in keyof T]: T[K] };
export type DeepOmit<T extends object, U extends string> = U extends `${infer Prefix}.${infer Suffix}`
    ? Prefix extends keyof T
        ? Intersection<
            Omit<T, Prefix> & { [K in Prefix]: T[K] extends object ? DeepOmit<T[K], Suffix> : T[K] }
        >
        : T
    : Omit<T, U>
