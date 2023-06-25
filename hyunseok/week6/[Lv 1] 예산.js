function solution(d, budget) {
  d.sort((a, b) => a - b);
  while (d.reduce((a, b) => a + b, 0) > budget) {
    d.pop();
  }
  console.log(d);

  return d.length;
}
