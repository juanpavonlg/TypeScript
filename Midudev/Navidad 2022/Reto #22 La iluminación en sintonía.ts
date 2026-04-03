function checkStepNumbers(systemNames: string[], stepNumbers: number[]) {
  const systems: {[key: string]: number} = {};
  for (let i = 0; i < systemNames.length; i++) {
    if (stepNumbers[i] <= systems[systemNames[i]]) {
      return false;
    } else {
      systems[systemNames[i]] = stepNumbers[i];
    }
  }
  return true;
} // checkStepNumbers()

const systemNames = ["tree_1", "tree_2", "house", "tree_1", "tree_2", "house"];
const stepNumbers = [1, 33, 10, 2, 44, 20];
console.log(checkStepNumbers(systemNames, stepNumbers));
console.log(checkStepNumbers(["tree_1", "tree_1", "house"], [2, 1, 10]));
