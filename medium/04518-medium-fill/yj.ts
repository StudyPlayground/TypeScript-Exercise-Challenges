export type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T['length'],
  Count extends any[] =[],
  Flag extends boolean = Count["length"] extends Start? true :false
> = Count["length"] extends End ?                               //끝까지 도달했으면 값을 변경시키지 않고 그대로 반환
    T : 
    T extends [infer R, ...infer U ]
      ? Flag extends false
        ? [R, ...Fill<U, N, Start, End,[...Count,0]>]           //트리거를 줘서 Flag가 있을땐 N으로 채움
        : [N, ...Fill<U, N, Start, End,[...Count,0], Flag>]
      :T