export type Triangular<N extends number, SaveArr extends any[] = [], A extends number[] = []> = 
  SaveArr["length"] extends N 
  ? A["length"]
  : Triangular<N, [0,...SaveArr], [...A,...SaveArr,0]>