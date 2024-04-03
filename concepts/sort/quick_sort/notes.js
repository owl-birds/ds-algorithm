/**
 * an implementation of quick_sort algorithm
 *
 * PARAMS
 * @param {number[]} arr - array of nums
 * @param {number} left - the left most side index
 * @param {number} right  - the right most side index
 * @returns {void}
 *
 * this function change the array in-place.
 *
 * @since 1.0.0
 */
const quick_sort = (arr, left, right) => {
  //
  if (right - left <= 1) {
    return;
  }

  // pivot
  const pivot = Math.floor((right + left) / 2);
};
