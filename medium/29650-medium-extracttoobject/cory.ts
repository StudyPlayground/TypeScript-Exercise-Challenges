export type Intersection<T> = {
    [K in keyof T]: T[K]
}

export type ExtractToObject<T extends object, U extends keyof T> = Intersection<
    { [K in keyof T as K extends U ? never : K]: T[K] } & T[U]
>
