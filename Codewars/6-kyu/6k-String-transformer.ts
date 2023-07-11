export function stringTransformer(str: string) {
  return str
    .split(" ")
    .reverse()
    .join(" ")
    .split("")
    .map((ch) =>
      ch === ch.toLowerCase() ? ch.toUpperCase() : ch.toLowerCase()
    )
    .join("");
} // stringTransformer()

console.log(stringTransformer("Example Input"));
