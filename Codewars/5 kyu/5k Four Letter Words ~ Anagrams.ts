export function anagrams(subjects: string[], memories: string[][], players: number[]) {
  const score: [number, number] = [0, 0];
  const rounds: [number, number][] = [[0, 2], [2, 1], [1, 3], [3, 0], [0, 3], [2, 0], [1, 2], [3, 1]];
  let round = rounds.findIndex((e) => e[0] === players[0] && e[1] === players[1]);
  subjects.forEach((subject) => {
    const sorted = subject.split("").sort().join("");
    const used: string[] = [];
    const [player0, player1] = [rounds[round][0], rounds[round][1]];
    let [score0, score1] = [0, 0];
    memories[player0].forEach((word) => {
      if (word === subject) {
        score0 += 1;
      } else if (word.split("").sort().join("") === sorted) {
        score0 += 2;
        used.push(word);
      }
    });
    memories[player1].forEach((word) => {
      if (word === subject) {
        score1 += 1;
      } else if (!used.includes(word) && word.split("").sort().join("") === sorted) {
        score1 += 3;
      }
    });
    if (score0 > score1) {
      [0, 1].includes(player0) ? score[0]++ : score[1]++;
    } else if (score1 > score0) {
      [0, 1].includes(player1) ? score[0]++ : score[1]++;
    }
    round = ++round % rounds.length;
  });
  return score[0] > score[1] ? 0 : score[1] > score[0] ? 1 : -1;
} // anagrams()

const subjects = [
  "darb",
  "bust",
  "spot",
  "calo",
  "oaky",
  "mite",
  "meta",
  "tael",
  "gore",
  "elan",
  "code",
  "demo",
];
const alice = [
  "gore",
  "stop",
  "emit",
  "tame",
  "mode",
  "cola",
  "drab",
  "ergo",
  "dome",
  "bard",
  "okay",
  "loca",
  "stub",
  "goer",
  "coal",
];
const bob = [
  "lean",
  "tela",
  "stop",
  "leat",
  "code",
  "pots",
  "coed",
  "post",
  "buts",
  "tale",
  "stub",
  "spot",
  "tame",
  "meat",
  "mate",
];
const carol = [
  "brad",
  "tame",
  "okay",
  "bust",
  "time",
  "lane",
  "item",
  "mate",
  "ergo",
  "darb",
  "tubs",
  "team",
  "gore",
  "ogre",
  "meta",
];
const dan = [
  "coal",
  "oaky",
  "tops",
  "mode",
  "spot",
  "code",
  "demo",
  "calo",
  "teal",
  "opts",
  "deco",
  "cola",
  "tale",
  "kayo",
  "late",
];
const memories = [alice, bob, carol, dan];
const players = [0, 2];
console.log(anagrams(subjects, memories, players));
