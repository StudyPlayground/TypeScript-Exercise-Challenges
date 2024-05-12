
export type DeepOmit<O, P extends string> = P extends `${infer K}.${infer Rest}` ?{
    [key in keyof O]: key extends K? DeepOmit<O[key],Rest> : O[key]
  } : Omit<O,P>
  