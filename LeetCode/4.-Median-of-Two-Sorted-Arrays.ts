function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const merge: number[] = [];
  const len = nums1.length + nums2.length;
  const mid = Math.floor(len / 2);
  let i = 0;
  let j = 0;
  let last = -1;
  while (last < mid) {
    if (nums1[i] <= nums2[j] || j >= nums2.length) {
      merge.push(nums1[i++]);
    } else {
      merge.push(nums2[j++]);
    }
    last = i + j - 1;
  }
  return (len % 2 ? merge[last] : (merge[last - 1] + merge[last]) / 2);
} // findMedianSortedArrays()

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
console.log(findMedianSortedArrays([1, 3, 5], [2, 4, 6]));
console.log(findMedianSortedArrays([2, 4, 6], [1, 3, 5]));
console.log(findMedianSortedArrays([1, 3], []));
console.log(findMedianSortedArrays([], [2, 4]));
console.log(findMedianSortedArrays([2], []));
console.log(findMedianSortedArrays([], [3]));
console.log(findMedianSortedArrays([0, 0, 0, 0, 0], [-1, 0, 0, 0, 0, 0, 1]));
