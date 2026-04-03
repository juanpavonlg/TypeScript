function checkPart(part: string) {
  // let [l, r] = [0, part.length - 1];
  // let strike = false;
  // while (l < r) {
  //   if (part[l] !== part[r]) {
  //     if (strike) {
  //       return false;
  //     }
  //     strike = true;
  //     if (part[l + 1] === part[r]) {
  //       l++;
  //     }
  //     if (part[r - 1] === part[l]) {
  //       r--;
  //     }
  //   }
  //   l++;
  //   r--;
  // }
  // return true;
  return [...part].some((_, i, a) => {
    const word = a.filter((_, j) => j !== i);
    return word.join("") === word.reverse().join("");
  });
} // checkPart()

console.log(checkPart("uwu"));
console.log(checkPart("miidim"));
console.log(checkPart("midu"));
