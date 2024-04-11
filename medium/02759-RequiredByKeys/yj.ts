type Intersection<T> = {[key in keyof T] : T[key]} 
type RequiredByKeys<T, K extends keyof T = keyof T> = Intersection<{
  [key in keyof T as key extends K ? key : never]-?:T[key]
  }&{
    [key in keyof T as key extends K ? never : key]?:T[key]  
  }>