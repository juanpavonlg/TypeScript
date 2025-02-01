export function byState(str: string): string {
  const states: { [i: string]: string } = {
    AZ: "Arizona",
    CA: "California",
    ID: "Idaho",
    IN: "Indiana",
    MA: "Massachusetts",
    OK: "Oklahoma",
    PA: "Pennsylvania",
    VA: "Virginia",
  };
  const lines = str.match(/.+/g);
  const addresses: { [i: string]: string[] } = {};
  for (let line of lines!) {
    const state = line.match(/..$/)![0];
    line = line.replace(/,/g, "").replace(/..$/, states[state]);
    if (addresses[state]) {
      addresses[state].push(line);
    } else {
      addresses[state] = [line];
    }
  }
  const ans: string[] = [];  
  for (const state of Object.keys(addresses).sort()) {
    ans.push(
      `${states[state]}\r\n..... ${addresses[state].sort().join("\r\n..... ")}`
    );
  }
  return ans.join("\r\n ");
} // byState()

var ad2 = `John Daggett, 341 King Road, Plymouth MA
Alice Ford, 22 East Broadway, Richmond VA
Orville Thomas, 11345 Oak Bridge Road, Tulsa OK
Terry Kalkas, 402 Lans Road, Beaver Falls PA
Eric Adams, 20 Post Road, Sudbury MA
Hubert Sims, 328A Brook Road, Roanoke MA
Amy Wilde, 334 Bayshore Pkwy, Mountain View CA
Sal Carpenter, 73 6th Street, Boston MA`;

var ad3 = `Bill Joke, 1C Hilary Main Street, Westbury AZ
Raf Johnson, 73 Bd Tucs, Mountain View CA
Mac Bud, 2134 Clint Street, Mountain View CA
Buf Kid, 334 Shore Parkway, Richmond ID
Mac Bud, 11345 Oak Bridge Road, Plymouth MA
Bill Joke, 213 Cap Bono, Beaver Falls PA
Fanny Hem, 321 King Street, Hill View IN
Ama Zon, 12 Loan Alley, Mountain View CA
Ad Knew, 334 Shore Parkway, Mountain View CA`;

// console.log(byState(ad2));
console.log(byState(ad3));
