type Sleigh = {
  name: string;
  consumption: number;
};

function selectSleigh(distance: number, sleighs: Sleigh[]) {
  const best = sleighs.filter((e) => e.consumption * distance <= 20).at(-1);
  return best ? best.name : null;
} // selectSleigh()

const distance = 30;
const sleighs = [
  { name: "Dasher", consumption: 0.3 },
  { name: "Dancer", consumption: 0.5 },
  { name: "Rudolph", consumption: 0.7 },
  { name: "Midu", consumption: 1 },
];
console.log(selectSleigh(distance, sleighs));
