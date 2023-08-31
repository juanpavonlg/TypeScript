export function join(tokens: string | string[], glue?: string): string {
  if (typeof tokens !== "string") {   
    return tokens.join(glue);
  }
  return tokens;
} // join()

console.log(join("Hello"));
console.log(join(["Hello", "world!"], ", "));
console.log(join(["Hello", "world!"]));
