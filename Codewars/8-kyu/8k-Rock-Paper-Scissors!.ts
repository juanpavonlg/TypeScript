export function rps(p1: string, p2: string): string {
  const results: {[index: string]: string} = {"rock": "scissors", "scissors": "paper", "paper": "rock"};
  if (results[p1] === p2) {
    return "Player 1 won!"
  } 
  if (results[p2] === p1) {
    return "Player 2 won!"
  }
  return "Draw!";
} // rps()

console.log(rps("rock", "scissors"));
