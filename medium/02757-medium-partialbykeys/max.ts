export type IntersectionToObj<T> = {
    [K in keyof T]: T[K]
}

export type Exclude<A, B> = A extends B ? never : A;

export type PartialByKeys<T, K extends keyof T = any> = IntersectionToObj<{
    [key in keyof T as key extends K ? key : never]?: T[key];
} & {
    [key in Exclude<keyof T, K>]: T[key];
}>