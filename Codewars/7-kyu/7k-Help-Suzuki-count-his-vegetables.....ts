export function countVegetables(s: string): [number, string][] {
  const allowed = ["cabbage", "carrot", "celery", "cucumber", "mushroom", "onion", "pepper", "potato", "tofu", "turnip"];
  const count: {[i: string]: number} = {};
  const vegs: [number, string][] = [];
  for (const veg of s.split(" ")) {
    if (count[veg]) {
      count[veg]++;
    } else {
      count[veg] = 1;
    }
  }
  for (const key in count) {
    if (allowed.includes(key)) {
      vegs.push([count[key], key]);
    }
  }  
  return vegs.sort((a, b) => {
    if (a[0] === b[0] && a[1] > b[1]) return -1;
    return b[0] - a[0];
  });
} // countVegetables()

let s1 = "potato tofu cucumber cabbage turnip pepper onion carrot celery mushroom potato tofu cucumber cabbage";
console.log(countVegetables(s1));
