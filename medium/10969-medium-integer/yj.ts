export type Integer<T extends number | string> = `${T}` extends `${bigint}`
  ? T
  :never  
