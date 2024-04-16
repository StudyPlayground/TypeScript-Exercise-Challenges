export type SplitElement<T extends readonly any[]> = T['length'] extends 0 ? '' : `__${T[number]}`;
export type SplitModifier<T extends readonly any[]> = T['length'] extends 0 ? '' : `--${T[number]}`;
export type BEM<B extends string, E extends string[], M extends string[]> = `${B}${SplitElement<E>}${SplitModifier<M>}`;