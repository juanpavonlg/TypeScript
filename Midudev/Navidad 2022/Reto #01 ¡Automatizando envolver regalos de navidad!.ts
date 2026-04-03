function wrapping(gifts: string[]) {
  return gifts.map((e) => {
    const border = "*".repeat(e.length + 2);
    return `${border}\n*${e}*\n${border}`;
  });
} // wrapping()

const gifts = ["cat", "game", "socks"];
console.log(wrapping(gifts));
