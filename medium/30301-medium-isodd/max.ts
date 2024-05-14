export type IsOdd<T extends number> = `${T}` extends `${infer A extends number}${'.'}${any}`
  ? IsOdd<A>
  : `${T}` extends `${any}${'e'}${any}`
    ? false
    : `${T}` extends `${any}${1 | 3 | 5 | 7 | 9}`
      ? true
      : false