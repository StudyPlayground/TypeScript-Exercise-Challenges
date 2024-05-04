export type Flatten<T, R extends any[] = []> = T extends [infer F,...infer L]
  ? [F] extends [never]
    ? Flatten<L, R>
    : F extends any[]
      ? Flatten<L, [...R, ...Flatten<F>]>
      : Flatten<L, [...R, F]>
  : R;

export type Count<T, R extends Record<string | number, any[]> = {}> = T extends [infer A extends string | number, ...infer Rest]
  ? A extends keyof R
    ? Count<Rest, Omit<R, A> & Record<A, [...R[A], 0]>>
    : Count<Rest, R & Record<A, [0]>>
  : {
    [K in keyof R]: R[K]['length']
  };

type CountElementNumberToObject<T> = Count<Flatten<T>>;