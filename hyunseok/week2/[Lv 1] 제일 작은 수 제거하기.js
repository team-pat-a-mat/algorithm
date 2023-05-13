function solution(arr) {
  if (arr.length === 1 || arr.length === 0) return [-1];
  return arr.filter((a) => a !== Math.min(...arr));
}
