type Reverse<T extends any[]> = T extends [infer A, ...infer Rest] ? [...Reverse<Rest>, A] : [];