export type ObjectEntries<T, K = keyof T> = K extends keyof T
    ? [K, Required<T>[K] extends never ? undefined : Required<T>[K]]
    : never;