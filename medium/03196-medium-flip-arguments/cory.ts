export type Reverse<T extends any[]> = T extends [infer F, ...infer R] ? [...Reverse<R>, F] : [];

export type FlipArguments<T extends (...args: any[]) => any> = T extends (...args: infer Args) => infer Return
    ? (...args: Reverse<Args>) => Return
    : never;