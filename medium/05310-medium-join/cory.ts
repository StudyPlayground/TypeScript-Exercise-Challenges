export type Join<T extends any[], U extends string | number> = T extends [infer F extends string, ...infer R]
    ? R extends []
        ? `${F}`
        : `${F}${U}${Join<R, U>}`
    : ''