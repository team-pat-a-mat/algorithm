function solution(n, words) {
  const result = [0, 0];

  for (let i = 1; i < words.length; ++i) {
    const currentWord = words[i];
    // 탈락조건 1. 단어를 중복해서 말했을 경우
    if (words.indexOf(currentWord) !== i) {
      result[0] = (i % n) + 1;
      result[1] = Math.floor(i / n + 1);
      return result;
    }
    // 탈락조건 2. 시작 알파벳이 다를 경우
    const lastAlphabet = words[i - 1].slice(-1);
    const firstAlphabet = currentWord.slice(0, 1);

    if (lastAlphabet !== firstAlphabet) {
      result[0] = (i % n) + 1;
      result[1] = Math.floor(i / n + 1);
      return result;
    }
  }
  return result;
}
