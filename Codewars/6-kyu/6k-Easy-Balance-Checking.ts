export function balance(book: string) {
  const lines = book.trim().replace(/[^\w\s\.]/g, "").replace(/\n{2,}/g, "\n").split("\n");  
  let balance = +lines[0];
  const ans = [`Original Balance: ${balance.toFixed(2)}`];
  let expense = 0;
  let count = 0;
  for (let i = 1; i < lines.length; i++) {
    const amount = +lines[i].match(/\d+\.\d+/g)!;
    expense += amount;
    count++;
    lines[i] = lines[i].replace(/\d+\.\d+/g, amount.toFixed(2));
    ans.push(`${lines[i]} Balance ${(balance - expense).toFixed(2)}`);
  }
  ans.push(`Total expense  ${(expense.toFixed(2))}`);
  ans.push(`Average expense  ${((expense / count).toFixed(2))}`);
  return ans.join("\r\n");
} // balance()

const b1 = `1000.00!=

125 Market !=:125.45
126 Hardware =34.95
127 Video! 7.45
128 Book :14.32
129 Gasoline ::16.10
`;
const b2 = `1233.00
125 Hardware;! 24.8?;
123 Flowers 93.5
127 Meat 120.90
120 Picture 34.00
124 Gasoline 11.00
123 Photos;! 71.4?;
122 Picture 93.5
132 Tyres;! 19.00,?;
129 Stamps 13.6
129 Fruits{} 17.6
129 Market;! 128.00?;
121 Gasoline;! 13.6?;`;
console.log(balance(b1));
console.log(balance(b2));
