export type ReplaceFirst<T extends readonly unknown[], S, R, SaveArr extends any[] =[],Trigger extends boolean = false> = Equal<Trigger,true> extends true 
  ? [...SaveArr,...T]
  :T extends [infer first, ...infer rest]
    ?  first extends S 
      ? ReplaceFirst<rest,S,R,[...SaveArr,R],true>
      : ReplaceFirst<rest,S,R,[...SaveArr,first],false>
    :SaveArr
