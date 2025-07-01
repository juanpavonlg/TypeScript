export function grabscrab(anagram: string, dictionary: string[]): string[] {
  const str = sort(anagram);
  return dictionary.filter((word) => sort(word) === str);
} // grabscrab()

function sort(str: string): string {
  return [...str].sort().join();
} // findCount()

console.log(grabscrab("ortsp", ["sport", "parrot", "ports", "matey"]));
