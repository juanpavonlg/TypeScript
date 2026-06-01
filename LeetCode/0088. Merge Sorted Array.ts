function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let [i, j] = [m - 1, n - 1];
  for (let k = m + n - 1; k >= 0; k--) {
    if (i < 0) {
      nums1[k] = nums2[j--];
    } else if (j < 0) {
      break;
    } else if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i--];
    } else {
      nums1[k] = nums2[j--];
    }
  }
} // merge()

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
merge([1], 1, [], 0);
merge([0], 0, [1], 1);
