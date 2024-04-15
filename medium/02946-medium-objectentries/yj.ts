export type ObjectEntries<T, U= Required<T>> = {
    [key in keyof U]:[key, U[key] extends never? undefined:U[key]]
  }[keyof U]
  //test