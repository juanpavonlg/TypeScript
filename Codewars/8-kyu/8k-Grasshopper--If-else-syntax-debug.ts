export function checkAlive(health: number): boolean {
  return health > 0;
} // checkAlive()

console.log(checkAlive(5));
console.log(checkAlive(0));
