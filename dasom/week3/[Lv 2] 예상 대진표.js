function solution(n, a, b) {
  let count = 0;
  while (n > 1) {
    a = Math.round(a / 2);
    b = Math.round(b / 2);
    n = n / 2;
    count++;

    if (a === b) break;
  }
  return count;
}
