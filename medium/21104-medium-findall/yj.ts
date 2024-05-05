export type NormalizeFindAll<T extends string, S extends string, P extends any[] = [], R extends number[] = []> =
  T extends `${string}${infer L}` 
    ? T extends `${S}${string}`
      ? NormalizeFindAll<L, S,[...P,0],[...R,P["length"]]>
      :NormalizeFindAll<L,S,[...P,0],R>
    :R


export type FindAll<T extends string, P extends string> = 
  P extends ""
    ? [] : NormalizeFindAll<T,P>
