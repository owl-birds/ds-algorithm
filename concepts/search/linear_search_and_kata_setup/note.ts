export const linear_search = (haystack: number[], needle: number): boolean => {
  for (let i = 0; i < haystack.length; i += 1) {
    if (needle === haystack[i]) return true;
  }
  return false;
};
