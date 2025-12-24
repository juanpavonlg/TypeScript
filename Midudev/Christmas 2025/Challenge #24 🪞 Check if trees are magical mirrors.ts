function isTreesSynchronized(
  tree1: { value: string; left?: any; right?: any } | undefined,
  tree2: { value: string; left?: any; right?: any } | undefined
): [boolean, string] {
  function isMirrored(
    left: { value: string; left?: any; right?: any } | undefined,
    right: { value: string; left?: any; right?: any } | undefined
  ): boolean {
    if (!left && !right) {
      return true;
    }
    if (!left || !right || left.value !== right.value) {
      return false;
    }
    return (
      isMirrored(left.left, right.right) && isMirrored(left.right, right.left)
    );
  } // isMirrored()

  return [isMirrored(tree1, tree2), tree1?.value ?? ""];
} // isTreesSynchronized()

const tree1 = {
  value: "🎄",
  left: { value: "⭐" },
  right: { value: "🎅" },
};
const tree2 = {
  value: "🎄",
  left: { value: "🎅" },
  right: { value: "⭐" },
};
console.log(isTreesSynchronized(tree1, tree2));
const tree3 = {
  value: "🎄",
  left: { value: "🎅" },
  right: { value: "🎁" },
};
console.log(isTreesSynchronized(tree1, tree3));
const tree4 = {
  value: "🎄",
  left: { value: "⭐" },
  right: { value: "🎅" },
};
console.log(isTreesSynchronized(tree1, tree4));
console.log(isTreesSynchronized({ value: "🎅" }, { value: "🧑‍🎄" }));
