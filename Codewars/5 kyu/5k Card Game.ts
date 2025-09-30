export function cardGame(n: bigint): bigint {
  let alice = 0n;
  let turn = 1;
  while (n) {
    if (n % 2n) {
      if (turn) {
        alice++;
      }
      n--;
    } else {
      if ((n - n / 2n) % 2n || n === 4n) {
        if (turn) {
          alice += n / 2n;
        }
        n /= 2n;
      } else {
        if (turn) {
          alice++;
        }
        n--;
      }
    }
    turn ^= 1;
  }
  return alice;
} // cardGame()

console.log(cardGame(10n));
console.log(cardGame(12n));
console.log(cardGame(100000000000n));
