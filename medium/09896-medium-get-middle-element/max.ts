export type GetMiddleElement<T extends any[]> = T['length'] extends 0 | 1 | 2
  ? T
  : T extends [any, ...infer Middle, any]
    ? GetMiddleElement<Middle>
    : never;