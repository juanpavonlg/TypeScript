export type StrLen<Str extends string, Cache extends string[] = []> 
  = Str extends `${string}${string}${string}${string}${string}${string}${string}${string}${string}${string}${infer Rest}`
  ? StrLen<Rest, [...Cache, string, string, string, string, string, string, string, string, string, string]>
  : Str extends `${string}${infer Rest}`
  ? StrLen<Rest, [...Cache, string]>
  : Cache["length"];

type A = StrLen<"">;
type B = StrLen<"abc">;
type C = StrLen<"this is a string">;
type S10 = "1234567890";
type S100 = `${S10}${S10}${S10}${S10}${S10}${S10}${S10}${S10}${S10}${S10}`;
type S1000 = `${S100}${S100}${S100}${S100}${S100}${S100}${S100}${S100}${S100}${S100}`;
type D = StrLen<S1000>;
