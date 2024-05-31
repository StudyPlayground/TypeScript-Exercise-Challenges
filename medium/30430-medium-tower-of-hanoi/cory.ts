export type Hanoi<N extends number, From = 'A', To = 'B', Intermediate = 'C'> = Helper<N, [], From, To, Intermediate>
export type Helper<
    N extends number,
    C extends any[],
    From extends unknown, 
    To extends unknown, 
    Intermediate extends unknown
> = C['length'] extends N ? []
    : [
        ...Helper<N, [...C, 1], From, Intermediate, To>,
        [From, To], 
        ...Helper<N, [...C, 1], Intermediate, To, From>
    ]