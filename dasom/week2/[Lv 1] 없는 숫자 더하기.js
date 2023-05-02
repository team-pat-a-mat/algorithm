function solution(numbers) {
  const numberArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const filterNum = numberArr.filter((el) => !numbers.includes(el));
  return filterNum.reduce((acc, cur) => acc + cur);
}
