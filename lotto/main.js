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
setTimeout(() => {
  const $ball = document.createElement('div');
  $ball.className = 'ball';
  $ball.textContent = winBalls[0];
  $result.appendChild($ball);
}, 1000);
setTimeout(() => {
  const $ball = document.createElement('div');
  $ball.className = 'ball';
  $ball.textContent = winBalls[1];
  $result.appendChild($ball);
}, 2000);
setTimeout(() => {
  const $ball = document.createElement('div');
  $ball.className = 'ball';
  $ball.textContent = winBalls[2];
  $result.appendChild($ball);
}, 3000);
setTimeout(() => {
  const $ball = document.createElement('div');
  $ball.className = 'ball';
  $ball.textContent = winBalls[3];
  $result.appendChild($ball);
}, 4000);
setTimeout(() => {
  const $ball = document.createElement('div');
  $ball.className = 'ball';
  $ball.textContent = winBalls[4];
  $result.appendChild($ball);
}, 5000);
setTimeout(() => {
  const $ball = document.createElement('div');
  $ball.className = 'ball';
  $ball.textContent = winBalls[5];
  $result.appendChild($ball);
}, 6000);
const $bonus = document.querySelector('#bonus');
setTimeout(() => {
  const $ball = document.createElement('div');
  $ball.className = 'ball';
  $ball.textContent = bonus;
  $bonus.appendChild($ball);
}, 7000);
