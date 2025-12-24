type Gift = string | number | boolean;
type Workshop = Record<string, any>;
type Path = string[];

function findGiftPath(workshop: Workshop, gift: Gift): Path {
  for (const key in workshop) {
    const value = workshop[key];
    if (value === gift) {
      return [key];
    }
    if (typeof value === "object") {
      const subPath = findGiftPath(value, gift);
      if (subPath.length > 0) {
        return [key, ...subPath];
      }
    }
  }
  return [];
} // findGiftPath()

const workshop = {
  storage: {
    shelf: {
      box1: "train",
      box2: "switch",
    },
    box: "car",
  },
  gift: "doll",
};
console.log(findGiftPath(workshop, "train"));
console.log(findGiftPath(workshop, "switch"));
console.log(findGiftPath(workshop, "car"));
console.log(findGiftPath(workshop, "doll"));
console.log(findGiftPath(workshop, "plane"));
