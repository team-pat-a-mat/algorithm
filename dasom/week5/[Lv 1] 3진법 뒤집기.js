function solution(n) {
  // 10진수 -> 3진수 (문자열)
  const three = n.toString(3);
  // 배열변환 -> 뒤집기 -> 문자열변환
  const threeReverse = three.split("").reverse().join("");
  // 3진수 -> 10진수 (숫자)
  return Number.parseInt(threeReverse, 3);
}
