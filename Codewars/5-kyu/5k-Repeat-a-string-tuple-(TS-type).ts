export type Repeat<T, R extends number> = T extends string
  ? RepeatString<T, R>
  : T extends unknown[]
  ? RepeatTuple<T, R>
  : never;

type RepeatString<
  T extends string,
  R extends number,
  STR extends string = "",
  ARR extends unknown[] = []
> = ARR["length"] extends R
  ? STR
  : RepeatString<T, R, `${STR}${T}`, [...ARR, unknown]>;

type RepeatTuple<
  T extends unknown[],
  R extends number,
  TUP extends unknown[] = [],
  ARR extends unknown[] = []
> = ARR["length"] extends R
  ? TUP
  : RepeatTuple<T, R, [...TUP, ...T], [...ARR, unknown]>;

type A = Repeat<"a", 7>;
type B = Repeat<"abc", 5>;
type C = Repeat<["this", "is", "a", "tuple"], 3>;
type D = Repeat<"", 123>;
type E = Repeat<[], 123>;
type F = Repeat<["mixed", 1, "type", 2], 2>;
