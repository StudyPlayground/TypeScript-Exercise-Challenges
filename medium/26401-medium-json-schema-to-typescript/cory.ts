export type IsEqual<X, Y> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false
export type Includes<T extends readonly unknown[], U> = T extends [infer F, ...infer Rest] ? IsEqual<F, U> extends true ? true : Includes<Rest, U> : false;
export type Intersection<T> = { [P in keyof T]: T[P] }

export type StringFormat =  { type: 'string', enum?: string[] }
export type StringJson<T extends StringFormat> = T['enum'] extends string[] ? T['enum'][number] : string;

export type NumberFormat = { type: 'number', enum?: number[] }
export type NumberJson<T extends NumberFormat> = T['enum'] extends number[] ? T['enum'][number] : number;

export type BooleanFormat = { type: 'boolean' }

export type ArrayFormat = { type: 'array', items?: {} }
export type ArrayJson<T extends ArrayFormat> = T['items'] extends object ? (JSONSchema2TS<T['items']>)[] : unknown[]

export type ObjectFormat = { type: 'object', properties?: {}, required?: string[] }
export type ObjectJson<T extends ObjectFormat> = T['properties'] extends object
    ? Intersection<{ 
        [K in keyof T['properties']]?: JSONSchema2TS<T['properties'][K]> 
    } & { 
        [K in keyof T['properties'] as T['required'] extends any[] ? Includes<T['required'], K> extends true ? K : never : never]: JSONSchema2TS<T['properties'][K]> 
    }>
    : Record<string, unknown>


export type JSONSchema2TS<T> = T extends StringFormat ? StringJson<T>
    : T extends NumberFormat ? NumberJson<T>
    : T extends BooleanFormat ? boolean
    : T extends ObjectFormat ? ObjectJson<T>
    : T extends ArrayFormat ? ArrayJson<T>
    : never