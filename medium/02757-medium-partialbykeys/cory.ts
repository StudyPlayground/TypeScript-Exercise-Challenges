export type Intersection<T> = {
    [P in keyof T]: T[P]
}

export type PartialByKeys<T, K extends keyof T = keyof T> = Intersection<{
    [P in keyof T as P extends K ? never : P]: T[P]
} & {
    [P in keyof T as P extends K ? P : never]?: T[P]
}>