type Gift = {
  name: string;
  quantity: number;
};

function printTable(gifts: Gift[]) {
  const table: string[] = [];
  const wGift = Math.max("Gift".length, ...gifts.map((e) => e.name.length));
  const wQtty = Math.max(
    "Quantity".length,
    ...gifts.map((e) => `${e.quantity}`.length),
  );
  table.push("+".repeat(wGift + wQtty + 7));
  table.push(
    `| ${"Gift".padEnd(wGift, " ")} | ${"Quantity".padEnd(wQtty, " ")} |`,
  );
  table.push(`| ${"-".repeat(wGift)} | ${"-".repeat(wQtty)} |`);
  gifts.forEach((gift) => {
    table.push(
      `| ${gift.name.padEnd(wGift, " ")} | ${`${gift.quantity}`.padEnd(wQtty, " ")} |`,
    );
  });
  table.push("*".repeat(wGift + wQtty + 7));
  return table.join("\n");
} // printTable()

console.log(
  printTable([
    { name: "Game", quantity: 2 },
    { name: "Bike", quantity: 1 },
    { name: "Book", quantity: 3 },
  ]),
);
console.log(
  printTable([
    { name: "PlayStation 5", quantity: 9234782374892 },
    { name: "Book Learn Web Dev", quantity: 23531 },
  ]),
);
