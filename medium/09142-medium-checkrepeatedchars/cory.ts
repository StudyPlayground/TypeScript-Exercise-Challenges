export type StringToUnion<T extends string> = T extends `${infer F}${infer R}`
    ? F | StringToUnion<R>
    : never;

export type CheckRepeatedChars<T extends string> = T extends `${infer U}${infer R}` 
    ? U extends StringToUnion<R> ? true : CheckRepeatedChars<R>
    : false