export type DeepOmit<T, S extends string> = S extends `${infer A}.${infer Rest}`
  ? {
    [key in keyof T]: key extends A
      ? DeepOmit<T[key], Rest>
      : T[key]
  }
  : Omit<T, S>