function solution(s) {
  const arrS = s.split(" ");
  const mapS = arrS
    .map((el) =>
      el
        .split("")
        .map((el, idx) => (idx % 2 === 0 ? el.toUpperCase() : el.toLowerCase()))
        .join("")
    )
    .join(" ");
  return mapS;
}
