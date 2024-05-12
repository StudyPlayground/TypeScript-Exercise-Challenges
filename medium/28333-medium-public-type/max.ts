export type PublicType<T extends object> = {
    [key in keyof T as Exclude<keyof T, `_${string}`>]: T[key]
  }