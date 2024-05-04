type Integer<T extends number> = number extends T ? never 
    : `${T}` extends `${string}.${string}` ? never : T