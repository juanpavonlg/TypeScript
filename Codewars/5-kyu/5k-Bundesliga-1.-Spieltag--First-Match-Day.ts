interface ITeam {
  name: string;
  played: number;
  won: number;
  tied: number;
  lost: number;
  goals: [number, number];
  points: number;
};

class Team implements ITeam {
  name: string = "";
  played: number = 0;
  won: number = 0;
  tied: number = 0;
  lost: number = 0;
  goals: [number, number] = [0, 0];
  points: number = 0;
} // Team

export function table(results: string[]): string {
  const teams: Team[] = [];
  for (const match of results) {
    const team1 = new Team();
    const team2 = new Team();
    [, team1.name, team2.name] = match.match(/ (.+) - (.+)/) || [];
    const [, result1, result2] = match.match(/([\d+-]):([\d+-])/) || [];
    if (result1 !== "-" && result1 !== "-") {
      team1.played += 1;
      team2.played += 1;
      const goals1 = +result1;
      const goals2 = +result2;
      goals1 > goals2 ? team1.won += 1 : goals1 < goals2 ? team1.lost += 1 : team1.tied += 1;
      goals2 > goals1 ? team2.won += 1 : goals2 < goals1 ? team2.lost += 1 : team2.tied += 1;
      team1.goals = [team1.goals[0] + goals1, team1.goals[1] + goals2];
      team2.goals = [team2.goals[0] + goals2, team2.goals[1] + goals1];
      team1.points = 3 * team1.won + team1.tied;
      team2.points = 3 * team2.won + team2.tied;
    }
    teams.push(team1);
    teams.push(team2);
  }
  teams.sort((a, b) => {
    if ((a.goals[0] - a.goals[1]) === (b.goals[0] - b.goals[1])) {
      if (a.goals[0] === b.goals[0]) {
        return a.name.localeCompare(b.name);
      }
      return b.goals[0] - a.goals[0];
    }
    if (a.points === b.points) {
      return (b.goals[0] - b.goals[1]) - (a.goals[0] - a.goals[1]);
    }
    return b.points - a.points;
  });
  let position = 1;
  let prevScore = "";
  return teams.map((e, i) => {
    const score = `${e.goals[0]}:${e.goals[1]}  ${e.points}`;
    position = score === prevScore ? position : i + 1;
    prevScore = score;
    return `${position.toString().padStart(2)}. ${e.name.padEnd(30)}${e.played}  ${e.won}  ${e.tied}  ${e.lost}  ${score}`;
  }).join("\n");
} // table()

let results = [
  "6:0 FC Bayern Muenchen - Werder Bremen",
  "-:- Eintracht Frankfurt - Schalke 04",
  "-:- FC Augsburg - VfL Wolfsburg",
  "-:- Hamburger SV - FC Ingolstadt",
  "-:- 1. FC Koeln - SV Darmstadt",
  "-:- Borussia Dortmund - FSV Mainz 05",
  "-:- Borussia Moenchengladbach - Bayer Leverkusen",
  "-:- Hertha BSC Berlin - SC Freiburg",
  "-:- TSG 1899 Hoffenheim - RasenBall Leipzig",
];
console.log(table(results));
console.log();
results = [      
  "6:0 FC Bayern Muenchen - Werder Bremen",
  "1:0 Eintracht Frankfurt - Schalke 04",
  "0:2 FC Augsburg - VfL Wolfsburg",
  "1:1 Hamburger SV - FC Ingolstadt",
  "2:0 1. FC Koeln - SV Darmstadt",
  "2:1 Borussia Dortmund - FSV Mainz 05",
  "2:1 Borussia Moenchengladbach - Bayer Leverkusen",
  "-:- Hertha BSC Berlin - SC Freiburg",
  "-:- TSG 1899 Hoffenheim - RasenBall Leipzig"
];
console.log(table(results));
console.log();
results = [      
  "6:0 FC Bayern Muenchen - Werder Bremen",
  "1:0 Eintracht Frankfurt - Schalke 04",
  "0:2 FC Augsburg - VfL Wolfsburg",
  "1:1 Hamburger SV - FC Ingolstadt",
  "2:0 1. FC Koeln - SV Darmstadt",
  "2:1 Borussia Dortmund - FSV Mainz 05",
  "2:1 Borussia Moenchengladbach - Bayer Leverkusen",
  "2:1 Hertha BSC Berlin - SC Freiburg",
  "2:2 TSG 1899 Hoffenheim - RasenBall Leipzig"
];
console.log(table(results));
