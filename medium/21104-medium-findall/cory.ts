export type StringArr<T extends string, Result extends string[] = []> = T extends `${infer F}${infer R}` ? StringArr<R,  [...Result, F]> : Result;

export type FindAll<T extends string, P extends string, AddedChar extends string[] = []> = T extends '' ? [] : P extends '' ? []
    : T extends `${infer F}${P}${infer R}`
        ? [
            [...AddedChar, ...StringArr<F>]['length'],
            ...P extends `${infer PF}${infer PR}`
                ? FindAll<`${PR}${R}`, P, [...AddedChar, ...StringArr<F>, PF]>
                : []
        ]
        : [];