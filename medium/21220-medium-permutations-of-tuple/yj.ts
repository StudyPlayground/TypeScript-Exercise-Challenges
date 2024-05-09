export type PermutationsOfTuple<T extends unknown[], SaveArr extends any[]=[]> = T extends [infer A, infer B, ...infer C] 
    ?PermutationsOfTuple<[B,...C],[...SaveArr,A]> | PermutationsOfTuple<[A,...C],[B,...SaveArr]>
    :[...T,...SaveArr] |[...SaveArr,...T]
  //#A넣고
  //B넣고
  //C넣고
  //a넣고
  //C넣고
  //B넣고
