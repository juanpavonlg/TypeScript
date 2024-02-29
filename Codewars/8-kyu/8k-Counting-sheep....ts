export function countSheeps(arrayOfSheep: (boolean | undefined | null)[]) {
  return arrayOfSheep.filter((e) => e).length;
} // countSheeps()

const array1 = [true,  true,  true,  false,
                true,  true,  true,  true ,
                true,  false, true,  false,
                true,  false, false, true ,
                true,  true,  true,  true ,
                false, false, true,  true];
console.log(countSheeps(array1));
  