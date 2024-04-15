export type Shift<T extends {}> = T extends [infer first , ...infer rest] ? rest: [];
