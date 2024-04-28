export type Utils<Length, Arr extends any[] = [], R = Length> = Arr['length'] extends Length
  ? R
  : Utils<Length, [...Arr, 0], Arr['length'] | R>

export type NumberRange<Start, End> = Start | Exclude<Utils<End>, Utils<Start>>