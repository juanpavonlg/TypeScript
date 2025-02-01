export function send(text: string): string {
  let binary = [...text].map((e) => e.charCodeAt(0).toString(2).padStart(7, "0")).join(""); 
  const unary: string[] = [];
  for (const group of binary.match(/0+|1+/g) || []) {
    unary.push(`${group.includes("0") ? "00" : "0"} ${"0".repeat(group.length)}`);
  }
  return unary.join(" ");
} // send()

export function receive(text: string): string {
  const unary = text.split(" ");
  let message = "";
  for (let i = 0; i < unary.length; i += 2) {
    message += `${(unary[i] === "00" ? "0" : "1").repeat(unary[i + 1].length)}`;
  }
  return Array(message.length / 7).fill("").map((_, i) => String.fromCharCode(+`0b${message.slice(7 * i, 7 * i + 7)}`)).join("");
} // receive()

console.log(send("C"));
console.log(send("CC"));
console.log(receive(send("C")));
console.log(receive(send("CC")));
