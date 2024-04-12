export type OmitByType<T, U> = {
    [key in keyof T as U extends T[key] ? never : key]: T[key]
}