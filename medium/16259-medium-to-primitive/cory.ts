export type toPrimitiveUnit<T> = T extends { valueOf: () => infer P } ? P : T;
export type ToPrimitive<T> = T extends (...args: any[]) => any ? Function 
    : T extends object 
        ? { [K in keyof T]: ToPrimitive<T[K]> } 
        : toPrimitiveUnit<T>