function solution(s) {
  const sLength = s.length;
  return sLength % 2 === 0
    ? s[sLength / 2 - 1] + s[sLength / 2]
    : s[Math.floor(sLength / 2)];
}
