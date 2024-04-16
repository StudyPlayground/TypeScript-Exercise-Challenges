type Format<T extends string[], Dash extends string> = T extends [] ? '' : `${Dash}${T[number]}`;
type BEM<B extends string, E extends string[], M extends string[]> = `${B}${Format<E, '__'>}${Format<M, '--'>}`;