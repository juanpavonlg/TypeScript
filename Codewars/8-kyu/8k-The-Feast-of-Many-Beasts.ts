export function feast(beast: string, dish: string): boolean {
  return beast[0] === dish[0] && beast.slice(-1) === dish.slice(-1);  
} // feast()

console.log(feast("great blue heron", "garlic naan"));

