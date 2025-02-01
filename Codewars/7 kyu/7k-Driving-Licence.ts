export function driver(data: Array<string>): string{
  const template = "99999999999999AA".split("");
  data[2].substring(0, 5).split("").forEach((ch, i) => {
    template[i] = ch.toUpperCase();
  });
  const date = new Date(data[3]);
  template[5] = date.getFullYear().toString()[2];
  const month = ("0" + (date.getMonth() + 1 + (data[4] === "F" ? 50 : 0))).slice(-2);
  template[6] = month.toString()[0];
  template[7] = month.toString()[1];
  const day = ("0" + date.getDate()).slice(-2);
  template[8] = day[0];
  template[9] = day[1];
  template[10] = date.getFullYear().toString()[3];
  template[11] = data[0][0];
  template[12] = data[1][0] ? data[1][0] : template[12];
  return template.join("");
} // driver()

console.log(driver(["John","James","Smith","01-Jan-2000","M"]));
console.log(driver(["Andrew","Robert","Lee","02-September-1981","M"]));
console.log(driver(["Johanna","","Gibbs","13-Dec-1981","F"]));


