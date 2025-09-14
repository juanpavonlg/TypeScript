export type IsOdd<N extends number> = `${N}` extends `${infer _}${
  | "1"
  | "3"
  | "5"
  | "7"
  | "9"}`
  ? true
  : false;

type A = IsOdd<13>;
type B = IsOdd<12>;
type C = IsOdd<0>;
type D = IsOdd<1>;
type E = IsOdd<103456>;
type F = IsOdd<-25>;
