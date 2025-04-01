export function shoppingCalculation(input: string[]): [string, string, string][] {
  const customers: [string, string, string][] = [];
  const has: string[] = [];
  const buys: string[] = [];
  const is: string[] = [];
  input.forEach((str) => {
    if (/ has /.test(str)) {
      has.push(str);
    } else if (/ buys /.test(str)) {
      buys.push(str);
    } else {
      is.push(str);
    }
  });
  has.forEach((h) => {
    const name = h.match(/\w+/)![0];
    let money = +h.match(/\d+/)![0];
    const products: string[] = [];
    buys.forEach((b) => {
      if (new RegExp(name).test(b)) {
        const quantity = +b.match(/\d+/)![0];
        const product = b.match(/(\w+).$/)![1];
        is.forEach((i) => {
          const prod = product.at(-1) === "s" ? product.slice(0, -1) : product;
          if (new RegExp(prod, "i").test(i)) {
            const price = +i.match(/\d+/)![0];
            money -= quantity * price;
          }
        });
        products.push(`${quantity} ${product}`);
      }
    });
    customers.push([name, `$${money}`, products.join(", ")]);
  });
  return customers;
} // shoppingCalculation()

console.log(
  shoppingCalculation([
    "Apple is $5.",
    "Banana is $7.",
    "Orange is $2.",
    "Alice has $26.",
    "John has $41.",
    "Alice buys 2 apples.",
    "John buys 1 banana.",
    "Alice buys 5 oranges.",
  ])
);
console.log(
  shoppingCalculation([
    "John has $41.",
    "Apple is $5.",
    "Alice buys 2 apples.",
    "Alice has $26.",
    "John buys 1 banana.",
    "Alice buys 5 oranges.",
    "Banana is $7.",
    "Orange is $2.",
  ])
);
console.log(
  shoppingCalculation([
    "Apple is $5.",
    "Banana is $7.",
    "Orange is $2.",
    "Lisa has $26.",
    "Arthas has $41.",
    "Lisa buys 2 apples.",
    "Arthas buys 1 banana.",
    "Lisa buys 5 oranges.",
  ])
);
