export type CheckRepeatedTuple<T extends unknown[]> = T extends [infer F, ...infer Rest]
  ? F extends Rest[number] 
    ? true
    : CheckRepeatedTuple<Rest>
  :false 
  