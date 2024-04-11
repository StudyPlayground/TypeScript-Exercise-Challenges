type IntersectionToObj<T> = {
    [K in keyof T]: T[K]
  }
  
  type Exclude<A, B> = A extends B ? never : A;
  
  type PartialByKeys<T, K = any> = IntersectionToObj<{
    [key in keyof T as key extends K ? key : never]?: T[key];
  } & {
    [key in Exclude<keyof T, K>]: T[key];
  }>