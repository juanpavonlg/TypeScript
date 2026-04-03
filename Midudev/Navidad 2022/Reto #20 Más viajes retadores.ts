type ReindeerType = {
  type: string;
  weightCapacity: number;
};

type Gift = {
  country: string;
  weight: number;
};

type Reindeer = {
  type: string;
  num: number;
};

type Solution = {
  country: string;
  reindeers: Reindeer[];
};

function howManyReindeers(reindeerTypes: ReindeerType[], gifts: Gift[]) {
  reindeerTypes.sort((a, b) => b.weightCapacity - a.weightCapacity);
  const ans: Solution[] = [];
  for (const gift of gifts) {
    let index = 0;
    while (reindeerTypes[index].weightCapacity >= gift.weight) {
      index++;
    }
    const nums: number[] = new Array(reindeerTypes.length - index).fill(0);
    let weight = gift.weight;
    let j = 0;
    while (weight) {
      const capacity = reindeerTypes
        .slice(index + j)
        .reduce((a, e) => a + e.weightCapacity, 0);
      const num = (weight / capacity) | 0;
      for (let i = j; i < nums.length; i++) {
        nums[i] += num;
      }
      weight %= capacity;
      j++;
    }
    const reindeers: Reindeer[] = [];
    for (let i = 0; i < nums.length; i++) {
      reindeers.push({
        type: reindeerTypes[index + i].type,
        num: nums[i],
      });
    }
    ans.push({
      country: gift.country,
      reindeers,
    });
  }
  return ans;
} // howManyReindeers()

const reindeerTypes = [
  { type: "Nuclear", weightCapacity: 50 },
  { type: "Electric", weightCapacity: 10 },
  { type: "Gasoline", weightCapacity: 5 },
  { type: "Diesel", weightCapacity: 1 },
];
const gifts = [
  { country: "Spain", weight: 30 },
  { country: "France", weight: 17 },
  { country: "Italy", weight: 50 },
];
console.log(howManyReindeers(reindeerTypes, gifts));
