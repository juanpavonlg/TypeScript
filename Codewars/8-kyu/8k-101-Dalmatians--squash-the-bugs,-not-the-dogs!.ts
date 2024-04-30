export function howManyDalmatians(number : number): string{
  var dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
  var respond = number <= 10 ? dogs[0] : (number <= 50 ? dogs[1] : (number === 101 ?  dogs[3] : dogs[2]));
  return respond
} // howManyDalmatians()

console.log(howManyDalmatians(26));
console.log(howManyDalmatians(8));
console.log(howManyDalmatians(14));
console.log(howManyDalmatians(80));
console.log(howManyDalmatians(100));
console.log(howManyDalmatians(101));
