export function change(s: string, prog: string, version: string): string {
  if (!/Phone: \+1-\d{3}-\d{3}-\d{4}/.test(s) || !/Version: \d+\.\d+\n/.test(s)) {
    return "ERROR: VERSION or PHONE";
  }
  if (/Version: 2.0/.test(s)) {
    version = "2.0";
  }
  return `Program: ${prog} Author: g964 Phone: +1-503-555-0090 Date: 2019-01-01 Version: ${version}`;
} // change()

const s1 = "Program title: Primes\nAuthor: Kern\nCorporation: Gold\nPhone: +1-503-555-0091\nDate: Tues April 9, 2005\nVersion: 6.7\nLevel: Alpha";
console.log(change(s1, "Ladder", "1.1"));
