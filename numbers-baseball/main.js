const $input = document.querySelector('#input');
const $form = document.querySelector('#form');
const $logs = document.querySelector('#logs');

const numbers = []; // [1,2,3,4,5,6,7,8,9]
for (let i = 0; i < 9; i++) {
  numbers.push(i + 1);
}

const answer = [];
for (let i = 0; i < 4; i++) {
  // 4번 반복
  let index = Math.floor(Math.random() * numbers.length); // 0~8 정수
  answer.push(numbers[index]);
  numbers.splice(index, 1);
}
console.log(answer);
