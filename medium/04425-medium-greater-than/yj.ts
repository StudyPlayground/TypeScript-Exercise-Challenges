//숫자인지 검사
export type ParseInt<T> = T extends `${infer X extends number}` ? X :  never
//맨앞에 0이오면 제거
export type RemoveLeadingZeros<T extends string> = T extends '0' ? T : (
    T extends `${0}${infer Rest}` ? RemoveLeadingZeros<Rest> : T
  )
  
  //마이너스원 로직
  export type InnerMinusOne<T extends string> = T extends `${infer X extends number}${infer Y}` ? (
    X extends 0 ? `9${InnerMinusOne<Y>}` : `${[-1, 0, 1, 2, 3, 4, 5, 6, 7, 8][X]}${Y}`
  ) : ''
  
  export type Reverse<T extends string> = T extends `${infer X}${infer Y}` ? `${Reverse<Y>}${X}` : ''
  
  export type MinusOne<T extends number> = ParseInt<RemoveLeadingZeros<Reverse<InnerMinusOne<Reverse<`${T}`>>>>>
  
  //그다음 대소 판가름시 true인 이유는 재귀를 도니까.
  export type InnerGreaterThan<T extends number, U extends number> = T extends U ? true : (
    T extends 0 ? false : InnerGreaterThan<MinusOne<T>, U>
  )

  //최초 대소 판가름시 False
  export type GreaterThan<T extends number, U extends number> = T extends U ? false : (
    U extends 0 ? true : InnerGreaterThan<T, U>
  )