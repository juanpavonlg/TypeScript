export function Mormons(startingNumber: number, reach: number, target: number): number {
  const missions = 0;
  return mormonsRecursive(startingNumber, reach, target, missions);
} // Mormons()

function mormonsRecursive(startingNumber: number, reach: number, target: number, missions: number): number {  
  if (startingNumber >= target) {
    return missions;
  }
  startingNumber += startingNumber * reach;
  return mormonsRecursive(startingNumber, reach, target, ++missions);
} // mormonsRecursive()

console.log(Mormons(10, 3, 9));
console.log(Mormons(40, 2, 120));
console.log(Mormons(40, 2, 121));
console.log(Mormons(20000, 2, 7000000000));
