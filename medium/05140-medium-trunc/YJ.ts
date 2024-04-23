export type Trunc<S extends string|number> =  `${S}` extends `${infer F}.${infer Rest}` 
? `${F}` extends "" 
    ? '0' 
    : `${F}`
:`${S}`