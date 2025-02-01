export function friend(friends: string[]): string[] {
  return friends.filter((e) => e.length === 4);
} // friend()

console.log(friend(["Ryan", "Kieran", "Jason", "Yous"]));
console.log(friend(["Peter", "Stephen", "Joe"]));
