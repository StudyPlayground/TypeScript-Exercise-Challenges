export type Zip<T, U> = [T, U] extends [[infer L, ...infer Test],[infer R, ...infer Uest]]
? [[L,R], ...Zip<Test, Uest>]
: []