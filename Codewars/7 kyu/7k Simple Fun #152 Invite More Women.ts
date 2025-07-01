export function inviteMoreWomen(L: number[]): boolean {
  return L.filter((w) => w === -1).length < L.length / 2;
  return L.reduce((a, e) => a + e) > 0;
} // inviteMoreWomen()

console.log(inviteMoreWomen([1, -1, 1]));
console.log(inviteMoreWomen([1, 1, 1]));
console.log(inviteMoreWomen([-1, -1, -1]));
console.log(inviteMoreWomen([1, -1]));
