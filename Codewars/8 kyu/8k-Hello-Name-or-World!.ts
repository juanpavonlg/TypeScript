export function hello(name = ''): string {
  return `Hello, ${name ? name[0].toUpperCase() + name.slice(1).toLowerCase() : "World"}!`;
} // hello()

console.log(hello("jOHN"));
