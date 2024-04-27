export type LastIndexOf<T extends any[], U extends  string|number, B extends any[] =[],N = -1> = T extends [infer F , ...infer Rest] 
  ? Rest["length"] extends 0 
    ?`${F & number | string}` extends `${U}`                //Rest가 없을때
      ? B["length"]
      :N 
    :F extends U 
      ? LastIndexOf<Rest, U ,[...B,1], B["length"]> //만약 값이 일치하면 
      : LastIndexOf<Rest, U ,[...B,1], N> //값이 일치하지 않으면
  : never