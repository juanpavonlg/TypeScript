/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: any) {
  return function (n: number): number {
    let l = 1;
    let r = n;
    while (l < r) {
      const version = Math.floor((l + r) / 2);
      if (!isBadVersion(version)) {
        l = version + 1;
      } else {
        r = version;
      }
    }
    return r;
  };
}; // solution()
