export type String2Union<S>= S extends `${infer A}${infer Rest}` 
?A | String2Union<Rest>
:never;

type AllCombinations<STR,S extends string = String2Union<STR>> = [S] extends [never]
?""
:"" | {[K in S]:`${K}${AllCombinations<never,Exclude<S,K>>}`}[S]; 
