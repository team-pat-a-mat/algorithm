function solution(people, limit) {
  // people 배열 오름차순 정렬
  people.sort((a, b) => a - b);
  let left = 0; // 가장 가벼운 사람의 인덱스
  let right = people.length - 1; // 가장 무거운 사람의 인덱스
  let count = 0; // 필요한 구명보트 개수
  while (left <= right) {
    // 왼쪽 인덱스가 오른쪽 인덱스보다 작거나 같을 때 반복
    if (people[left] + people[right] <= limit) {
      // 가장 가벼운 사람과 가장 무거운 사람의 몸무게 합이 limit 이하인 경우
      left++; // 가장 가벼운 사람 다음 사람으로 이동
    }
    right--; // 가장 무거운 사람 이전 사람으로 이동
    count++; // 구명보트 개수 1 증가
  }
  return count; // 필요한 구명보트 개수 반환
}
