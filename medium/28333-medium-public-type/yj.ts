export type PublicType<T extends object> = 
  {[key in keyof T as key extends `_${infer K}` ? never: key]:T[key] }