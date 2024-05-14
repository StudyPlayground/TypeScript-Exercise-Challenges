export type Odd = 1|3|5|7|9

export type LastString<T extends number> = `${T}` extends `${infer F}${Odd}` ? true :false
export type IsOdd<T extends number> = `${T}` extends `${number}.${number}` 
  ? false
  :`${T}` extends `${number}e${number}` 
    ? false
    : LastString<T> extends true 
      ? true      
      :false
  