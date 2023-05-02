function solution(phone_number) {
  let string = "";
  let slice = phone_number.slice(-4);
  for (let i = 0; i < phone_number.length - 4; i++) {
    string += "*";
  }
  return string + slice;
}
