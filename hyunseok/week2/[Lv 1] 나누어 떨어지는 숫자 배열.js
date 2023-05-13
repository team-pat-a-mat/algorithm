function solution(arr, divisor) {
  let filter = arr.filter((a) => a % divisor === 0);
  let sort = filter.sort((a, b) => a - b);
  return sort.length === 0 ? [-1] : sort;
}
