/**
 * 가장 맨 앞자리 기준으로 배열이라면 풀어서 다시 실행하도록 한다.
 * 만약 key 가 이미 결과에 있다면 배열에 하나를 추가한다.
 * 만약 key 가 결과에 없다면 새로 key:value 쌍을 만든다.
 * T 에 결과가 없다면 Obj 를 리턴하면서 value 의 length 를 리턴한다.
 */
export type CountElementNumberToObject<T extends any[], Obj extends Record<string | number, any[]> = {}> = T extends [never] ? {}
    : T extends [infer F, ...infer R] ? F extends any[] 
            ? CountElementNumberToObject<[...F, ...R], Obj>
            : F extends keyof Obj
                ? CountElementNumberToObject<R, { [K in keyof Obj]: F extends K ? [...Obj[K], 0] : Obj[K] }>
                : CountElementNumberToObject<R, { [K in keyof Obj]: Obj[K] } & { [K in F extends string | number ? F : never]: [0] }>
    : { [K in keyof Obj]: Obj[K]['length'] }
;