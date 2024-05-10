export type CartesianProduct<T, U> = T extends infer TF
    ? U extends infer UF ? [TF, UF] : [TF]
    : U extends infer UF ? [UF] : []
;