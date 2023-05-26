function solution(n) {
  const arrN = Array.from(n.toString(2));
  const filterN = arrN.filter((el) => el === "1");
  return filterN.length;
}
