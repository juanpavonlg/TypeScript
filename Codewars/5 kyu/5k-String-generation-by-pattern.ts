export function* stringGenerator(pattern: string): Generator<string> {
  const original = pattern;
  const tokens = new Set(pattern.match(/(\[.+?\])/g) ?? []);
  const inc_int: { [key: string]: { start: number; step: number } } = {};
  const inc_float: { [key: string]: { start: number; step: number; prec: number } } = {};
  const interval: { [key: string]: { first: number; last: number; curr: number } } = {};
  const periodic: { [key: string]: { start: number; n: number; curr: number } } = {};
  for (const token of tokens) {
    if (token.includes("INC_INT")) {
      const start = (token.match(/\d+/) ?? ["1"])[0];
      const step = (token.match(/, *(\d+)/) ?? [, "1"])[1];
      inc_int[token] = { start: +start, step: +step };
    } else if (token.includes("INC_FLOAT")) {
      const start = (token.match(/\d+\.?\d*/) ?? ["0.1"])[0];
      const step = (token.match(/, *(\d+\.?\d*)/) ?? [, "0.1"])[1];
      inc_float[token] = { start: +start, step: +step, prec: Math.max(start.slice(start.indexOf(".") + 1).length, step.slice(step.indexOf(".") + 1).length) };
    } else if (token.includes("INTERVAL")) {
      const first = (token.match(/\d+\.?\d*/) ?? ["1"])[0];
      const last = (token.match(/, *(\d+\.?\d*)/) ?? [, first])[1];
      interval[token] = { first: +first, last: +last, curr: +first };
    } else if (token.includes("PERIODIC")) {
      const start = (token.match(/\d+\.?\d*/) ?? ["1"])[0];
      const n = (token.match(/, *(\d+\.?\d*)/) ?? [, "1"])[1];
      periodic[token] = { start: +start, n: +n, curr: 1 };
    }
  }
  while (true) {
    pattern = original;
    for (const token of tokens) {
      if (token.includes("INC_INT")) {
        pattern = pattern.replaceAll(token, `${inc_int[token].start}`);
      } else if (token.includes("INC_FLOAT")) {
        pattern = pattern.replaceAll(token, inc_float[token].start.toFixed(inc_float[token].prec));
      } else if (token.includes("INTERVAL")) {
        pattern = pattern.replaceAll(token, `${interval[token].curr}`);
      } else if (token.includes("PERIODIC")) {
        pattern = pattern.replaceAll(token, `${periodic[token].start}`);
      }
    }
    yield pattern;
    for (const token of tokens) {
      if (token.includes("INC_INT")) {
        inc_int[token].start += inc_int[token].step;
      } else if (token.includes("INC_FLOAT")) {
        inc_float[token].start += inc_float[token].step;
      } else if (token.includes("INTERVAL")) {
        interval[token].curr = interval[token].curr < interval[token].last ? ++interval[token].curr : interval[token].first;
      } else if (token.includes("PERIODIC")) {
        periodic[token].curr++;
        if (periodic[token].curr > periodic[token].n) {
          periodic[token].start++;
          periodic[token].curr = 1;
        }
      }
    }
  }
} // stringGenerator()

let gen = stringGenerator("Testing [INC_INT], [INC_INT=2], [INC_INT=3,2]");
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
gen = stringGenerator("x=[INC_FLOAT], y=[INC_FLOAT=0.33], z=[INC_FLOAT=0.2,0.004]");
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
gen = stringGenerator("Season [PERIODIC=1,5], Episode [INTERVAL=1,5]");
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
gen = stringGenerator("[INC_INT][INC_INT][INC_INT][INC_INT][INC_INT][INC_INT]");
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
