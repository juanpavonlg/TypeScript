// Export a function "greet" that returns "hello world!"
export function greet() {
  return (function() {
    return "hello world!";
  })();
} // greet()

console.log(greet());
