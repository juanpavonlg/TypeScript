function cyberReindeer(road: string, time: number) {
  const ans = [road];
  let prev = ".";
  let i = 1;
  for (let t = 1; t < time; t++) {
    if (t === 5) {
      road = road.replace(/\|/g, "*");
    }
    if (".*".includes(road[i])) {
      [road, prev] = [road.replace(/S[.*]/, `${prev}S`), road[i]];
      i++;
    }
    ans.push(road);
  }
  return ans;
} // cyberReindeer()

const road = "S..|...|..";
const time = 10;
const result = cyberReindeer(road, time);
console.log(result);
