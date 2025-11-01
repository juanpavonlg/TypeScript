export function snapshot(scene: string): string {
  if (scene.length < 11) {
    return scene;
  }
  const splited = scene.split("");
  let index = scene.match(/[^.·]/)?.index ?? -1;
  if (index >= 0) {
    if (index < 2) {
      index = 0;
    } else if (index > scene.length - 10) {
      index = scene.length - 11;
    } else {
      index -= 2;
    }
    splited[index] = "[";
    splited[index + 1] = "[";
    splited[index + 5] = "x";
    splited[index + 9] = "]";
    splited[index + 10] = "]";
  }
  return splited.join("");
} // snapshot()

console.log(snapshot("..·.···...·.·.·...···.·..·"));
console.log(snapshot("..·.···..seagull..···.·..·"));
console.log(snapshot("···..·...··...··..seagu"));
console.log("..·.···..seagull..···.·..·".match(/[^.·]/)?.index);

