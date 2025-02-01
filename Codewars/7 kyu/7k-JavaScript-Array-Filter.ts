export const getEvenNumbers = (numbersArray : number[]) : number[] => {
  return numbersArray.filter(n => n % 2 === 0);
} // getEvenNumbers()

console.log(getEvenNumbers([1,2,3,6,8,10]));
