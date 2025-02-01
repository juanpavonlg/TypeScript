export function parseMolecule(formula: string): Record<string, number> {
  const brackets: { [key: string]: string } = { "(": ")", "[": "]", "{": "}" };
  const atoms: Record<string, number> = {};
  const parsed: any[] = formula.match(/[A-Z][a-z]?|\d+|[()[\]{}]/g) ?? [];
  for (let i = 0; i < parsed.length; i++) {
    if (/[A-Z][a-z]?|[)\]}]/.test(parsed[i])) {
      if (!/\d+/.test(parsed[i + 1])) {
        parsed.splice(i + 1, 0, 1);
      }
    } else if (/\d+/.test(parsed[i])) {
      parsed[i] = +parsed[i];
    }
  }
  for (let i = 0; i < parsed.length - 1; i++) {
    if (/[([{]/.test(parsed[i])) {
      let pairs = 0;
      let j = i + 1;
      for (; j < parsed.length - 1; j++) {
        if (parsed[j] === brackets[parsed[i]] && pairs === 0) {
          break;
        } else if (parsed[j] === parsed[i]) {
          pairs++;
        } else if (parsed[j] === brackets[parsed[i]]) {
          pairs--;
        }
      }
      const factor = parsed[j + 1];
      for (let k = i + 1; k < j - 1; k++) {
        if (/[A-Z][a-z]?/.test(parsed[k])) {
          parsed[k + 1] *= factor;
        }
      }
    }
    if (/[A-Z][a-z]?/.test(parsed[i])) {
      atoms[parsed[i]] = atoms[parsed[i]] ? atoms[parsed[i]] + parsed[i + 1] : parsed[i + 1];
    }
  }
  return atoms;
} // parseMolecule()

console.log(parseMolecule("H2O"));
console.log(parseMolecule("Mg(OH)2"));
console.log(parseMolecule("K4[ON(SO3)2]2"));
