function countHours(year: number, holidays: string[]) {
  return holidays.reduce((a, e) => {
    const day = new Date(`${e}/${year}`).getDay();
    a += day > 0 && day < 6 ? 2 : 0;
    return a;
  }, 0);
} // countHours()

const year = 2022;
const holidays = ["01/06", "04/01", "12/25"];
console.log(countHours(year, holidays));
