export type MergeAll<
XS extends object[], 
U = XS[number] , //키가 PropertyKey형태로 U가 스스로의 U일때 키를 뽑고 아니면 안함
keys extends PropertyKey = U extends U ? keyof U : never> = 
{
  [K in keys] : U extends U ? U [K & keyof U] : never
}