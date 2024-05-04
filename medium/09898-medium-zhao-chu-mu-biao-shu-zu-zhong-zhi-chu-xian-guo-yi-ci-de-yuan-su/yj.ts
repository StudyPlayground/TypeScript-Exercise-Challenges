export type FindEles<T extends any[], Arr extends any[] = [], Res extends any[]= []> = T extends [infer R , ...infer Rest] 
  ? R extends Rest[number] 
    ? FindEles<Rest,[...Arr, R], [...Res]>
    : R extends Arr[number]
      ? FindEles<Rest,[...Arr], [...Res]> 
      : FindEles<Rest,[...Arr], [...Res,R]>
  : Res
    