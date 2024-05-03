export type FirstUniqueCharIndex<T extends string, Acc extends string[] = []> = 
  T extends '' 
  ? -1
  : T extends `${infer Head}${infer Rest}`
  ? Head extends Acc[number]
    ? FirstUniqueCharIndex<Rest, [...Acc, Head]>
    : Rest extends `${string}${Head}${string}`
      ?FirstUniqueCharIndex<Rest, [...Acc, Head]> 
      : Acc["length"]
    :never