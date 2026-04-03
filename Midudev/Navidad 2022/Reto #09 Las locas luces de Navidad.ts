function countTime(leds: (0 | 1)[]) {
  // let time = 0;
  // while (leds.includes(0)) {
  //   const temp = [...leds];
  //   for (let i = 0; i < temp.length; i++) {
  //     if (leds[(i + leds.length - 1) % leds.length] === 1) {
  //       temp[i] = 1;
  //     }
  //   }
  //   leds = [...temp];
  //   time += 7;
  // }
  // return time;
  const zeros = leds.join("").split("1");
  zeros[0] += zeros.pop();
  return 7 * Math.max(...zeros.map((e) => e.length));
} // countTime()

const leds: (0 | 1)[] = [0, 1, 1, 0, 1];
console.log(countTime(leds));
console.log(countTime([0, 0, 0, 1]));
console.log(countTime([0, 0, 1, 0, 0]));
