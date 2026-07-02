function transformTree(tree: (number | null)[]) {
  function fillObject(index: number): object | null {
    if (index >= tree.length || tree[index] === null) {
      return null;
    }
    return {
      value: tree[index],
      left: fillObject(2 * index + 1),
      right: fillObject(2 * index + 2),
    };
  } // fillObject()

  const root = fillObject(0);
  return root;
} // transformTree()

console.log(transformTree([3, 1, 0, 8, 12, null, 1]));
