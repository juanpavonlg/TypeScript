export function convertVolume(line: string): [string, number] {
  const factor: { [key: number]: string[] } = {
    4.928922: ["teaspoon", "teaspoons", "t", "tsp"],
    14.78677: ["tablespoon", "tablespoons", "T", "Tbsp", "tbsp"],
    29.57353: ["ounce", "ounces", "oz"],
    236.5882: ["cup", "cups", "c"],
    473.1765: ["pint", "pints", "p", "pt"],
  };
  const abbrev = ["t", "tsp", "T", "Tbsp", "tbsp", "oz", "c", "p", "pt"];
  const t = line.match(/\d+(\.\d+)? (\d\/\d )?\w+/)![0];
  const i = line.replace(t, "").replace(".", "").trim();
  const n = t.match(/\d+(\.\d+)? (\d\/\d )?/)![0];
  const u = t.replace(n, "");
  let d = 0;
  if (/\//.test(n)) {
    const f = t.match(/\d\/\d/)![0];
    const a = f.match(/(\d)\//)![1];
    const b = f.match(/\/(\d)/)![1];
    d = +a / +b;
  }
  let q = +n.match(/\d+(\.\d+)?/)![0] + d;
  for (const e in factor) {
    if (abbrev.includes(u)) {
      if (factor[e].includes(u)) {
        q *= +e;
        break;
      }
    } else {
      if (factor[e].includes(u.toLowerCase())) {
        q *= +e;
        break;
      }
    }
  }
  return [i, q];
} // convertVolume()

console.log(convertVolume("Sugar 1 t"));
console.log(convertVolume("Olive oil 3 Tbsp"));
console.log(convertVolume("1 1/4 cup milk"));
console.log(convertVolume("2.5 ounces vanilla extract"));
