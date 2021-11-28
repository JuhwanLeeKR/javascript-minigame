let numOne = '';
let operator = '';
let numTwo = '';
const $operator = document.querySelector('#operator');
const $result = document.querySelector('#result');
const onClickNumber = (number) => () => {
  if (operator) {
    // 비어있지 않다
    numTwo += number;
  } else {
    // 비어있다
    numOne += number;
  }
  $result.value += number;
}; // 고차 함수 (high order function)
document.querySelector('#num-0').addEventListener('click', onClickNumber('0'));
document.querySelector('#num-1').addEventListener('click', onClickNumber('1'));
document.querySelector('#num-2').addEventListener('click', onClickNumber('2'));
document.querySelector('#num-3').addEventListener('click', onClickNumber('3'));
document.querySelector('#num-4').addEventListener('click', onClickNumber('4'));
document.querySelector('#num-5').addEventListener('click', onClickNumber('5'));
document.querySelector('#num-6').addEventListener('click', onClickNumber('6'));
document.querySelector('#num-7').addEventListener('click', onClickNumber('7'));
document.querySelector('#num-8').addEventListener('click', onClickNumber('8'));
document.querySelector('#num-9').addEventListener('click', onClickNumber('9'));

document.querySelector('#plus').addEventListener('click', () => {});
document.querySelector('#minus').addEventListener('click', () => {});
document.querySelector('#divide').addEventListener('click', () => {});
document.querySelector('#multiply').addEventListener('click', () => {});
document.querySelector('#calculate').addEventListener('click', () => {});
document.querySelector('#clear').addEventListener('click', () => {});
