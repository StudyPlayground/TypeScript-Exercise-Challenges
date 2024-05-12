export type SmallCheck<S> = S extends ""
  ? true
  : S extends `${infer C}${infer T}`
    ? '0' | '1' extends C
      ?false
      :SmallCheck<T>
    :false

export type IsFixedStringLiteralType<S extends string, T = S > = [S] extends [never]
  ?false
  : S extends unknown
    ?[T] extends [S] //뭐하는 문장?
      ? SmallCheck<S>
      :false
    :false