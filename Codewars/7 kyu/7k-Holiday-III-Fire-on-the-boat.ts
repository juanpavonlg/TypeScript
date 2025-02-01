export const removeFire = (str: string): string => {
  return str.replace(/fire/gi, "~~");
} // removeFire()

console.log(removeFire('Fire Deck Engine Sail Deck Fire Fire Fire Rudder Fire Boat Fire Fire Captain'));
