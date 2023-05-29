function solution(n) {
  let a = n.toString(3);
  let b = [...(a + "")].reverse().join("").toString();
  return parseInt(b, 3);
}
