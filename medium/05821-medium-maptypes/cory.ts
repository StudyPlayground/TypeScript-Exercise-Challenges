export type MapFromTo<From extends any, To extends  any> = { mapFrom: From, mapTo: To };

export type Transform<T, R extends MapFromTo<any, any>> = T extends R['mapFrom']
    ? R extends infer U extends MapFromTo<any, any> 
        ? U['mapFrom'] extends T ? U['mapTo'] : never 
        : never
    : T

export type MapTypes<T extends object, R extends MapFromTo<any, any>> = {
    [P in keyof T]: Transform<T[P], R>;
}