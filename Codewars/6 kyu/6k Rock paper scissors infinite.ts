export function winner(choices: string[], p1: string, p2: string): string {
  const half = Math.floor((choices.length - 1) / 2);
  const index = choices.indexOf(p1);
  const left: string[] = [];
  for (let i = index - 1; i >= index - half; i--) {
    left.unshift(choices[(i + choices.length) % choices.length]);
  }
  const right: string[] = [];
  for (let i = index + 1; i <= index + half; i++) {
    right.push(choices[i % choices.length]);
  }
  return left.includes(p2) ? "Player 1 won!" : right.includes(p2) ? "Player 2 won!" : "Draw!";
} // winner()

let choices = ["rock", "paper", "scissors"];
console.log(winner(choices, "paper", "rock"));
console.log(winner(choices, "paper", "scissors"));
console.log(winner(choices, "scissors", "scissors"));
choices = ["rock", "spock", "paper", "lizard", "scissors"];
console.log(winner(choices, "rock", "spock"));
console.log(winner(choices, "rock", "paper"));
console.log(winner(choices, "rock", "lizard"));
console.log(winner(choices, "rock", "scissors"));
console.log(winner(choices, "lizard", "paper"));
choices = ["heavy", "sniper", "soldier", "pyro"];
console.log(winner(choices, "heavy", "pyro"));
console.log(winner(choices, "heavy", "sniper"));
console.log(winner(choices, "heavy", "soldier"));
console.log(winner(choices, "pyro", "sniper"));
