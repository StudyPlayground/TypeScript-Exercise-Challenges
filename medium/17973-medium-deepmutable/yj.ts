
export type DeepMutable<T extends Record<keyof any,any>> = 
  T extends (...args:any[]) => any 
  ? T
  : {
   -readonly [key in keyof T] : DeepMutable<T[key]>
  }