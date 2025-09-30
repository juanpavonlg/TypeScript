export type inputMan = {
  name: string;
  points: number;
};

export type outputMan = {
  name: string;
  points: number;
  position: number;
};

export function ranking(people: inputMan[]): outputMan[] {
  people.sort((a, b) => b.points - a.points || a.name.localeCompare(b.name)); 
  let ans: outputMan[] = [];
  let pos = 0;
  for (let i = 0; i < people.length; i++) {
    if (people[i].points !== people[i - 1]?.points) {
      pos = i + 1;
    }
    ans.push({
      name: people[i].name,
      points: people[i].points,
      position: pos,
    });
  }
  return ans;
} // ranking()

console.log(
  ranking([
    {
      name: "John",
      points: 100,
    },
    {
      name: "Bob",
      points: 130,
    },
    {
      name: "Mary",
      points: 120,
    },
    {
      name: "Kate",
      points: 120,
    },
  ])
);
