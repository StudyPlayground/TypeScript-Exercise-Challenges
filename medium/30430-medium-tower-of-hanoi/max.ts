export type Hanoi<
  N extends number,
  From = "A",
  To = "B",
  Intermediate = "C",
  CurrentIndex extends 0[] = []
> = CurrentIndex["length"] extends N
  ? []
  : [
      ...Hanoi<N, From, Intermediate, To, [...CurrentIndex, 0]>,
      [From, To],
      ...Hanoi<N, Intermediate, To, From, [...CurrentIndex, 0]>
    ];