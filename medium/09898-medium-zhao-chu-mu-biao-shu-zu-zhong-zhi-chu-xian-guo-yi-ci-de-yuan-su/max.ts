export type FindEles<T extends any[], Duplicates = never> = T extends [infer A, ...infer R]
  ? A extends Duplicates
    ? FindEles<R, Duplicates>
    : A extends R[number]
      ? FindEles<R, Duplicates | A>
      : [A, ...FindEles<R, Duplicates>]
  : [];