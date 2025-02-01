export function generateChatRoomNames(users: string[]): string[] {
  users = users.map((e) => e.toLowerCase().replace(/\b\w/g, (x) => x.toUpperCase()));
  const names = users.map((e) => e.split(" "));
  const chatNames: string[] = [];
  for (let i = 0; i < names.length; i++) {
    let added = false;
    for (let j = 0; j < names.length; j++) {
      if (i !== j && names[i][0] === names[j][0] && names[i][1][0] === names[j][1][0]) {
        chatNames.push(names[i].join(" "));
        added = true;
        break;
      }
    }
    if (added) {
      continue;
    }
    for (let j = 0; j < names.length; j++) {
      if (i !== j && names[i][0] === names[j][0]) {
        chatNames.push(`${names[i][0]} ${names[i][1][0]}`);
        added = true;
        break;
      }
    }
    if (added) {
      continue;
    }
    chatNames.push(names[i][0]);
  }
  return chatNames.sort();
} // generateChatRoomNames()

console.log(generateChatRoomNames(["John Smith"]));
console.log(generateChatRoomNames(["John Smith", "John Adams"]));
console.log(generateChatRoomNames(["John Smith", "John Simms"]));
