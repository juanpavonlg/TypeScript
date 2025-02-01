export const stockList = (listOfArt: string[], listOfCat: string[]): string => {
  if (!listOfArt.length || !listOfCat.length) {
    return "";
  }
  const categories: {[index: string]: number} = {};
  for (const cat of listOfCat) {
    categories[cat] = 0;
  }
  for (const art of listOfArt) {
    if (art[0] in categories) {
      categories[art[0]] += +art.match(/\d+$/g)![0];
    }  
  }
  const ans: string[] = [];
  for (const key in categories) {
    ans.push(`(${key} : ${categories[key]})`);
  }
  return ans.join(" - ");
} // stockList()

console.log(stockList(["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"], ["A", "B", "C", "D"]));
