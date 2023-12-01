export function pieChart(obj: string): string {
  const data: {[key: string]: number} =  JSON.parse(obj);
  const sum = Object.values(data).reduce((a, e) => a + e);
  Object.keys(data).forEach((key) => data[key] = Math.round(36000 * data[key] / sum) / 100);
  return JSON.stringify(data);
} // pieChart()

console.log(pieChart('{"Hausa": 4, "Yoruba" : 5, "Igbo" : 6, "Efik" : 1, "Edo" : 4}'));
console.log(pieChart('{"English": 4, "Polish" : 12, "Russian" : 10, "Spanish" : 2}'));
