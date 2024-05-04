export type DeepMutableArr<T extends readonly any[], K = T extends readonly [...infer U] ? U : T> = K extends [infer F, ...infer R] 
    ? [F extends object ? DeepMutable<F> : F, ...DeepMutableArr<R>] 
    : K

export type DeepMutable<T extends object> = T extends (...args: any) => any ? T : {
    -readonly [K in keyof T]: T[K] extends any[] ? DeepMutableArr<T[K]> 
        : T[K] extends Record<any, any> 
            ? DeepMutable<T[K]> 
            : T[K]
}
