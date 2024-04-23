export type IndexOf<T extends any[], U, Temp extends any[] = []> = 
   T extends [infer F , ...infer Rest] 
   ? Equal<F,U> extends true
      ? Temp["length"]
      : IndexOf<Rest,U,[...Temp,F]>
   : -1

