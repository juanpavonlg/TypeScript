export function getDrinkByProfession(profession: string): string {
  const drinks: { [i: string]: string } = {
    "jabroni": "Patron Tequila", 
    "school counselor": "Anything with Alcohol",
    "programmer": "Hipster Craft Beer",
    "bike gang member": "Moonshine", 
    "politician": "Your tax dollars",
    "rapper": "Cristal"
  }
  return drinks[profession.toLowerCase()] || "Beer";
} // getDrinkByProfession()

console.log(getDrinkByProfession("jabrOni"));
