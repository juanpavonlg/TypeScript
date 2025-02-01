export function nbMonths(startPriceOld: number, startPriceNew: number, savingperMonth: number, percentLossByMonth: number): number[] {
  let n = 0;
  let savings = 0;
  while (startPriceNew > startPriceOld + savings) {
    n++;
    percentLossByMonth = n % 2 ? percentLossByMonth : percentLossByMonth + 0.5;    
    startPriceOld -= percentLossByMonth * startPriceOld / 100;
    startPriceNew -= percentLossByMonth * startPriceNew / 100;
    savings += savingperMonth;
    console.log(percentLossByMonth, startPriceOld, savingperMonth, startPriceNew);
  }
  return [n, Math.round(startPriceOld + savings - startPriceNew)];
} // nbMonths()

console.log(nbMonths(2000, 8000, 1000, 1.5));
