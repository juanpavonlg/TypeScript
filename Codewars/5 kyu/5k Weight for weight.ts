export function orderWeight(strng: string): string {
  const weights = strng.trim().replace(/ +/g, " ").split(" ");
  weights.sort((a, b) => {
    const weightA = calculateWeight(a);
    const weightB = calculateWeight(b);
    if (weightA !== weightB) {
      return weightA - weightB;
    }
    return a.localeCompare(b);
  });
  return weights.join(" ");
} // orderWeight()

function calculateWeight(n: string) {
  return n.toString().split("").reduce((a, e) => a + +e, 0);
} // calculateWeight()

console.log(orderWeight("56 65 74 100 99 68 86 180 90"));
