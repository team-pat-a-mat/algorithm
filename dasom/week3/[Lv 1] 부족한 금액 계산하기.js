function solution(price, money, count) {
  const priceStr = String(price);
  const priceArr = Array.from({ length: count }, (_, idx) => (idx + 1) * price);
  const priceSum = priceArr.reduce((acc, cur) => acc + cur);

  return priceSum > money ? priceSum - money : 0;
}
