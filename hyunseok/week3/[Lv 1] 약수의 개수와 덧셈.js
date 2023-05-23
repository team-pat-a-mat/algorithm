function solution(left, right) {
  let arr = [];
  const getDivisors = (num) => {
    const divisors = [];
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) divisors.push(i);
    }
    return divisors;
  };
  for (let i = left; i <= right; i++) {
    if (getDivisors(i).length % 2 === 0) {
      arr.push(i);
    } else {
      arr.push(-i);
    }
  }
  return arr.reduce((acc, cur) => acc + cur, 0);
}
