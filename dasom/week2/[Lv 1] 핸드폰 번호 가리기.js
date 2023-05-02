function solution(phone_number) {
  const starNum = phone_number
    .slice(0, phone_number.length - 4)
    .replaceAll(/[0-9]/g, "*");
  const lastFour = phone_number.slice(phone_number.length - 4);
  return `${starNum}${lastFour}`;
}
