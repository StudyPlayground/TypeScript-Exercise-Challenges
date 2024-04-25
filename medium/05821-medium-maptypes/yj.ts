export type MapTypes<T, R extends {mapFrom : any; mapTo:any}> = {
    [K in keyof T] : T[K] extends R["mapFrom"]      //from이 현재의 형식과 일치하면
    ? R extends { mapFrom: T[K] }                   //마지막 케이스가 | 연산이기 때문에 mapFrom 은 boolean|string 가 된다. 
      ? R["mapTo"]                                  //여기서 타입을 한번 더 좁혀서 R["mapTo"]인 R객체만 구분한다. 
      : never
    :T[K]                                           //일치하지 않으면 same
  }