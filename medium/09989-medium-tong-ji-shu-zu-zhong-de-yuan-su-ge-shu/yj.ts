export type Flatten<T extends any[], FlatArr extends any[] = []> = T extends [infer R, ...infer Rest] 
  ?[R] extends [never]?
    Flatten<Rest,FlatArr>
    : R extends any[]
      ? Flatten<[...R,...Rest],[...FlatArr,]>
      : Flatten<Rest,[ ...FlatArr,R]>
  : FlatArr

export type Count<T, R extends Record<string|number,any[]> = {}> =
  T extends [infer F extends string | number, ... infer Rest]
  ? F extends keyof R ? /// 포함되어있으면
    Count<Rest, Omit<R,F>& Record<F,[...R[F],0]>>
    :Count<Rest, R&Record<F,[0]>>
  :
  {
    [K in keyof R] : R[K]["length"]
  }