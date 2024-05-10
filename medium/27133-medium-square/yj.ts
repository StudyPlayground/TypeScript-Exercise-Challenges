
export type Abs<T extends number> = `${T}` extends `-${infer U extends number}`
  ? U 
  : T;

export type SplitZeros<
  N extends number,
  Z extends string=""
> = `${N}` extends `${infer N extends number}0` ? SplitZeros<N, `${Z}00`> : [N,Z];

export type SquareTuple<
  N extends number,
  A extends any[] =[],
  Acc extends any[] =[]
> = A["length"] extends N ? [...A, ...Acc] : SquareTuple<N, [1, ...A], [...A,...A,...Acc]>;

export type Square<
  _N extends number,
  Zeros extends [number, string] = SplitZeros<_N>,
  Front extends any[] = SquareTuple<Abs<Zeros[0]>>
  > = `${Front["length"]}${Zeros[1]}` extends `${infer N extends number}` ? N : never;