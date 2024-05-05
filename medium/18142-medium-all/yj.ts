export type All<T extends any[],U> = T extends [infer F, ...infer Rest] 
  ? Equal<F, U> extends true 
    ? All<Rest,U>
    : false
  : true