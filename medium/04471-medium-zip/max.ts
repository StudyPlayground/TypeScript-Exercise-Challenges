export type Zip<T, U, R extends any[] = []> = T extends [infer R1, ...infer R2]
  ? U extends [infer R3, ...infer R4]
    ? Zip<R2, R4, [...R, [R1, R3]]>
    : R
  : R;