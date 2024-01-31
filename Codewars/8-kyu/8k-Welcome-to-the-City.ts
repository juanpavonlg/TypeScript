export const sayHello = (name: string[], city: string, state: string): string => {
    return `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`;
} // sayHello()

console.log(sayHello(['Franklin', 'Delano', 'Roosevelt'], 'Chicago', 'Illinois'));
