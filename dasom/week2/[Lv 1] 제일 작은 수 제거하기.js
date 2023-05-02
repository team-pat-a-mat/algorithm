function solution(arr) {
  const smallNum = Math.min.apply(null, arr);
  const minusSmall = arr.filter((el) => el !== smallNum);
  return arr.length <= 1 ? [-1] : minusSmall;
}
