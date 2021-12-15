const candidate = Array(45)
  .fill()
  .map((v, i) => i + 1);
const shuffle = [];
while (candidate.length > 0) {
  const random = Math.floor(Math.random() * candidate.length); // 무작위 인덱스 뽑기
  const spliceArray = candidate.splice(random, 1); // 뽑은 값은 배열에 들어 있음
  const value = spliceArray[0]; // 배열에 들어 있는 값을 꺼내어
  shuffle.push(value); // shuffle 배열에 넣기
}
console.log(shuffle);
// map, slice는 원본 배열을 바꾸지 않는다. (splice는 원본을 수정)
const winBalls = shuffle.slice(0, 6).sort((a, b) => a - b); // sort는 원본을 바꾸며, a - b는 순서를 오름차순으로 정렬, b - a는 내림차순으로 정렬
const bonus = shuffle[6];
console.log(winBalls, bonus);
const $result = document.querySelector('#result');
const $bonus = document.querySelector('#bonus');

const showBall = (number, $target) => {
  const $ball = document.createElement('div');
  $ball.className = 'ball';
  $ball.textContent = number;
  $target.appendChild($ball);
};

// setTimeout()은 정확하지 않으므로 주의해야한다.
for (let i = 0; i < winBalls.length; i++) {
  setTimeout(() => {
    showBall(winBalls[i], $result);
  }, 1000 * (i + 1));
}
setTimeout(() => {
  showBall(bonus, $bonus);
}, 7000);

// var + 비동기가 만나면 클로저 문제가 발생한다.
// 클로저: 함수와 함수 바깥의 변수와의 관계
