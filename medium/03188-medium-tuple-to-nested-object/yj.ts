export type TupleToNestedObject<T , U> = T extends [infer First, ...infer Rest]? 
{
  [key in First & string]:TupleToNestedObject<Rest,U>
}
: U
type test = TupleToNestedObject<['a'], string>
