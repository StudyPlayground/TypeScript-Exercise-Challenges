export type Trunc<T extends number | string> = `${T}` extends `${infer F}.${string}`
    ? F extends '' ? '0' : F
    : `${T}`