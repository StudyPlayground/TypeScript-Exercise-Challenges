type isFalsy<T > = T extends Falsy | 0  ? true : false
type Filter<T extends any[], P, Arr extends any[] = []> = 
    T extends [infer F, ...infer Rest] 
    ? isFalsy<P> extends true
      ? isFalsy<F> extends true 
        ? Filter<Rest, P , [...Arr,F]>
        : Filter<Rest, P, Arr>
      : F extends P 
      ? Filter<Rest, P, [...Arr,F]>
      : Filter<Rest, P, Arr>  
    : Arr