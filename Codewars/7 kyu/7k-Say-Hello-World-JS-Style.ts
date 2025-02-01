export const say = (string1: string) => {
  return (string2: string) => {
    return `${string1} ${string2}`;
  }
}; // say()

console.log(say("Hello")("world!"));

