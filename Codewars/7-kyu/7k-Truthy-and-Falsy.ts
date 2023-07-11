export const truthy = [[], {}, "false", new Date(), Infinity];
export const falsy = ["", null, undefined, NaN, 0n];

for (const t of truthy) {
  console.log(!!t);
}
for (const f of falsy) {
  console.log(!!f);
}
