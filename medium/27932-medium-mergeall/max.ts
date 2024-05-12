export type MergeAll<
  XS extends object[],
  U = XS[number],
  Keys extends PropertyKey = U extends U ? keyof U : never
> = {
  [K in Keys]: U extends U ? U[K & keyof U] : never
}