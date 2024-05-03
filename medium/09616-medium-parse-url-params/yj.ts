export type ParseUrlParams<T> = T extends `${string}:${infer params}`
  ? params extends `${infer P}/${infer L}`
    ? P | ParseUrlParams<L>
    : params
  :never
