function solution(s, n) {
  let lows = "abcdefghijklmnopqrstuvwxyz".toLowerCase();
  let ups = lows.toUpperCase();
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] == " ") {
      answer += " ";
      continue;
    }
    let text = ups.includes(s[i]) ? ups : lows;
    let index = text.indexOf(s[i]) + n;
    if (index >= text.length) index -= text.length;
    answer += text[index];
  }

  return answer;
}
