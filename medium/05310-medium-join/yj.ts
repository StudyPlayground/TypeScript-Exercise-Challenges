export type Join<T extends any[], U extends string|number> = T extends [infer R,...infer Rest] ? 
  Rest['length'] extends 0 
    ?`${R&string}`
    :`${R&string}${U}${Join<Rest,U>}` 
  :""

  //타입을 좁혀주기위해 & 사용