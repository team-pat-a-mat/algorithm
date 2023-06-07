function solution(d, budget) {
  let result = 0,
    sum = 0;
  const sortD = d.sort((a, b) => a - b);

  for (let i = 0; i < sortD.length; ++i) {
    sum += sortD[i];

    if (sum <= budget) {
      result++;
    } else {
      break;
    }
  }
  return result;
}
