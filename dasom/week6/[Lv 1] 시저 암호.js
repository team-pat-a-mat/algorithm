function solution(s, n) {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = upper.toLowerCase();
  let result = "";

  for (let i = 0; i < s.length; ++i) {
    // 공백일 경우
    if (s[i] === " ") {
      result += " ";
      continue;
    }
    // s[i]가 upper에 포함되어 있을 경우 대문자로 아닐 경우 소문자로
    let text = upper.includes(s[i]) ? upper : lower;
    // n번째로 밀려나야 하니까 해당 인덱스를 찾아서 n을 더하기
    let index = text.indexOf(s[i]) + n;
    // index가 text의 길이보다 크거나 같을 경우 index에서 text의 길이만큼 빼기
    if (index >= text.length) index -= text.length;
    result += text[index];
  }
  return result;
}
