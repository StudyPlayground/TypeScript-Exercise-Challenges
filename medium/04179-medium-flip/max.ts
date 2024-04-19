export type Flip<T extends Record<any, any>> = {
    [key in keyof T as T[key] | `${T[key]}`]: key;
}