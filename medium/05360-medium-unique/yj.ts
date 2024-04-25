export type Includes<T,U> = U extends [infer F , ...infer Rest]
  ? Equal<F,T> extends true
    ? true
    :Includes<T,Rest>
  :false

export type Unique<T, U extends any[] = []> = T extends [infer F , ...infer Rest]
  ? Includes<F,U> extends true
    ? Unique<Rest,[...U]>
    : Unique<Rest,[...U , F]> //배열에 없으면 넣어준다
  : U