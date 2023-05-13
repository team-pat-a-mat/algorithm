function solution(s) {
  // 길이가 4 or 6이 아닌 경우 false
  if (s.length !== 4 && s.length !== 6) return false;

  for (let i = 0; i < s.length; ++i) {
    if (isNaN(Number(s[i]))) return false;
  }
  return true;
}
