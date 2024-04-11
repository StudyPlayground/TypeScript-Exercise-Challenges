
export type InterSectionType<T> = {[key in keyof T] : T[key]}

export type PartialByKeys<T, K extends keyof T = keyof T> = InterSectionType<
    {[key in keyof T as key extends K ? key : never]? :T[key]}
    &
    {
        [key in keyof T as key extends K ? never : key]:T[key]
    }>