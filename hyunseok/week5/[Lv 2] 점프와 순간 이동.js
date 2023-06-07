function solution(n) {
  let a = 0;
  while (n > 0) {
    if (n % 2 === 0) {
      n /= 2;
    } else {
      n--;
      a++;
    }
  }

  return a;
}
