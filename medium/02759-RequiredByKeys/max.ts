type IntersectionToObj<T> = {
    [K in keyof T]: T[K]
}
  
type RequiredByKeys<T, K extends keyof T = keyof T> = IntersectionToObj<{
    [key in keyof T as key extends K ? key : never]-?: T[key]
} & {
    [key in keyof T as key extends K ? never : key]?: T[key]
}>