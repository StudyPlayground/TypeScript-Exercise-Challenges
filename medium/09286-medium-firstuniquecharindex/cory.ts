export type Include<T extends string, U extends string> = T extends `${string}${U}${string}` ? true : false;
export type LengthOfString<S extends string, A extends string[] = []> = S extends `${infer U}${infer Rest}`
    ? LengthOfString<Rest, [U, ...A]>
    : A['length'];
    
export type FirstUniqueCharIndex<T extends string, Prefix extends string = ''> = T extends `${infer F}${infer R}` 
    ? Include<`${Prefix}${R}`, F> extends true 
        ? FirstUniqueCharIndex<R, `${Prefix}${F}`>
        : LengthOfString<Prefix>
    : -1;