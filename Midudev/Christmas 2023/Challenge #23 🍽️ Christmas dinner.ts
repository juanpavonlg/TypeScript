function organizeChristmasDinner(dishes: string[][]) {
  const ings: { [key: string]: string[] } = {};
  for (const dish of dishes) {
    for (const ing of dish.slice(1)) {
      ings[ing] ? ings[ing].push(dish[0]) : (ings[ing] = [dish[0]]);
    }
  }
  const ans = Object.entries(ings).filter((e) => e[1].length > 1);
  return ans.map((e) => [e[0]].concat(e[1].sort())).sort();
} // organizeChristmasDinner()

const dishes = [
  ["christmas turkey", "turkey", "sauce", "herbs"],
  ["cake", "flour", "sugar", "egg"],
  ["hot chocolate", "chocolate", "milk", "sugar"],
  ["pizza", "sauce", "tomato", "cheese", "ham"],
];
console.log(organizeChristmasDinner(dishes));
