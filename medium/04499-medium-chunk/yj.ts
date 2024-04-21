export type Chunk<T extends readonly any[], I = 1, Prev extends any[] = []> = 
   Prev["length"] extends I ?
   [Prev, ...Chunk<T,I>]
   : T extends [infer F , ...infer Rest] 
    ? Chunk<Rest,I,[...Prev,F]>
    : Prev extends [] ? Prev : [Prev] // 이 부분을 놓쳐서 헤맸다! 이런식으로 인위적으로 완성됐을때 [] 을 씌우면 length 판별이 편함

