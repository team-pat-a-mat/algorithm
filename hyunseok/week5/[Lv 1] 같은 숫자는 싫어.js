function solution(arr) {
  let arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      arr1.push(arr[i]);
    }
  }
  return arr1;
}
