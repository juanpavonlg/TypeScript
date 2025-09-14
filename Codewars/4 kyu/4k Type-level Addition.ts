type ReverseStr<T extends string> = T extends `${infer F}${infer S}` ? `${ReverseStr<S>}${F}` : "";
type StrToNum<T extends string> = T extends `${infer N extends number}` ? N : never;

type SliceFirst<T extends string> = T extends `${string}${infer S}` ? S : "";
type FirstChar<T extends string> = T extends `${infer F}${string}` ? F : "";

type AreBothEmpty<A extends string, B extends string> = IsEmpty<A> extends true ? IsEmpty<B> extends true ? true : false : false;
type IsEmpty<T extends string> = T extends `${infer F}${string}` ? false : true;
type NLengthArray<N extends number, R extends number[] = []> = R["length"] extends N ? R : NLengthArray<N, [...R, 0]>;

type Mod10<N extends number, R extends number[] = [], C extends number[] = []> = C["length"] extends N ? R["length"] : Mod10<N, R["length"] extends 9 ? [] : [...R, 0], [...C, 0]>;
type SimpleSum<A extends number, B extends number, C extends number = 0> = [...NLengthArray<A>, ...NLengthArray<B>, ...NLengthArray<C>]["length"];
type ActualSum<A extends string, B extends string, R extends string = "", M extends boolean = false>
  = AreBothEmpty<A, B> extends true
    ? `${R}${M extends true ? "1" : ""}`
    : SimpleSum<IsEmpty<A> extends true ? 0 : StrToNum<FirstChar<A>>, IsEmpty<B> extends true ? 0 : StrToNum<FirstChar<B>>, M extends true ? 1 : 0> extends infer N extends number
      ? ActualSum<SliceFirst<A>, SliceFirst<B>, `${R}${Mod10<N>}`, Mod10<N> extends N ? false : true>
      : never;

export type Add<M extends number, N extends number> = StrToNum<ReverseStr<ActualSum<ReverseStr<`${M}`>, ReverseStr<`${N}`>>>>;

const x: Add<3, 4> = 7;
const y: Add<176458299990, 614461515880> = 790919815870;
const z: Add<5, 7> = 11;
