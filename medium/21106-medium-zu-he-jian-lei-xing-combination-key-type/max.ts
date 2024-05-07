export type Combs<T extends any[]> = T extends [infer A extends string, ...infer Rest extends string[]]
  ? `${A} ${Rest[number]}`| Combs<Rest>
  : never;