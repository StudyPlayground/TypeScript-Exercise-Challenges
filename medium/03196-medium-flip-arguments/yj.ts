export type Reverse<T = any[]> = T extends [...infer rest, infer last] ? [last , ...Reverse<rest>]:T

export type FlipArguments<T extends (...args:any[]) => any> = T extends (...args:infer P)=> infer U ?
(...args : Reverse<P>) =>U
:never
