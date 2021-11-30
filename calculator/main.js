let numOne = '';
let operator = '';
let numTwo = '';
const $operator = document.querySelector('#operator');
const $result = document.querySelector('#result');
/* if 문 중첩을 제거하는 방법
1. if 문 다음에 나오는 공통된 절차를 각 분기점 내부에 넣는다.
2. 분기점에서 짧은 절차부터 실행하게 if 문을 작성한다.
3. 짧은 절차가 끝나면 return(함수 내부의 경우)이나 break(for 문 내부의 경우)로 중단한다.
4. else를 제거한다(이때 중첩 하나가 제거된다).
5. 다음 중첩된 분기점이 나오면 1~4의 과정을 반복한다.
*/
const onClickNumber = (event) => {
  if (!operator) {
    // 비어있다
    numOne += event.target.textContent;
    $result.value += event.target.textContent;
    return;
  }
  // 비어있지 않다
  if (!numTwo) {
    $result.value = '';
  }
  numTwo += event.target.textContent;
  $result.value += event.target.textContent;
}; // 고차 함수 (high order function)
document.querySelector('#num-0').addEventListener('click', onClickNumber);
document.querySelector('#num-1').addEventListener('click', onClickNumber);
document.querySelector('#num-2').addEventListener('click', onClickNumber);
document.querySelector('#num-3').addEventListener('click', onClickNumber);
document.querySelector('#num-4').addEventListener('click', onClickNumber);
document.querySelector('#num-5').addEventListener('click', onClickNumber);
document.querySelector('#num-6').addEventListener('click', onClickNumber);
document.querySelector('#num-7').addEventListener('click', onClickNumber);
document.querySelector('#num-8').addEventListener('click', onClickNumber);
document.querySelector('#num-9').addEventListener('click', onClickNumber);

const onClickOperator = (op) => () => {
  if (numOne) {
    operator = op;
    $operator.value = op;
  } else {
    alert('숫자를 먼저 입력하세요.');
  }
};
document.querySelector('#plus').addEventListener('click', onClickOperator('+'));
document
  .querySelector('#minus')
  .addEventListener('click', onClickOperator('-'));
document
  .querySelector('#divide')
  .addEventListener('click', onClickOperator('/'));
document
  .querySelector('#multiply')
  .addEventListener('click', onClickOperator('*'));
document.querySelector('#calculate').addEventListener('click', () => {
  if (numTwo) {
    switch (operator) {
      case '+':
        $result.value = parseInt(numOne) + parseInt(numTwo);
        break;
      // -, *, / 일 때는 문자열이 숫자로 바뀌므로 parseInt()를 사용하지 않아도 된다.
      case '-':
        $result.value = numOne - numTwo;
        break;
      case '*':
        $result.value = numOne * numTwo;
        break;
      case '/':
        $result.value = numOne / numTwo;
        break;
      default:
        break;
    }
    // 아래 4줄만 작성해주면 연달아 계산이 가능하다.
    // 순서도를 짜보면서 연습하자.
    $operator.value = '';
    numOne = $result.value;
    operator = '';
    numTwo = '';
  } else {
    alert('숫자를 먼저 입력하세요.');
  }
});
document.querySelector('#clear').addEventListener('click', () => {
  // 초기화 하기
  // 초기화를 쉽게하는 법: 위에 변수 선언을 순서대로 작성해준다.
  numOne = '';
  operator = '';
  numTwo = '';
  $operator.value = '';
  $result.value = '';
});

/* 
 1. 현재 '='을 눌러야 연달아 계산이 가능하다. '=' 없이 연달아 계산이 가능하게 바꿔보자.
 2. '-'을 처음부터 사용하여 계산이 가능하도록 바꿔보자.
 */
