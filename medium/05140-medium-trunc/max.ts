export type Trunc<T extends number | string> = `${T}` extends `${infer Integer}.${infer Unused}`
  ? Integer extends ''
    ? '0'
    : Integer
  : `${T}`;