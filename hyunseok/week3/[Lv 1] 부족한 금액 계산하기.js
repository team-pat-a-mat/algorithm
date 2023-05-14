function solution(price, money, count) {
  let a = 0;

  for (let i = 1; i <= count; i++) {
    a += price * i;
  }
  return money > a ? 0 : a - money;
}
