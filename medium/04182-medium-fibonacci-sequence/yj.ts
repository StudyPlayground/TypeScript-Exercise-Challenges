
export type Fibonacci<T extends number,CurrentIndex extends any[] = [1], Prev extends any[]=[], Current extends any[] = [1]> = 
CurrentIndex["length"] extends T ?
Current['length']
:Fibonacci<T,[...CurrentIndex,1],Current,[...Prev, ...Current]>