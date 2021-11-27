let number = parseInt(prompt('몇 명이 참가하나요?'));
const $button = document.querySelector('button');
const $input = document.querySelector('input');
const $word = document.querySelector('#word');
const $order = document.querySelector('#order');
let word; // 제시어
let newWord; // 새로 입력한 단어

// prompt 창을 끄거나 잘못 입력했을 때
while (!number) {
  alert('숫자를 입력해 주세요.');
  number = parseInt(prompt('몇 명이 참가하나요?'));
}

const onClickButton = () => {
  // 제시어가 비어 있거나 입력한 단어가 끝말잇기 규칙에 맞는가?
  if (!word || word[word.length - 1] === newWord[0]) {
    // 세 글자가 아니면 경고창을 띄운다.
    if (newWord.length !== 3) {
      alert('세 글자만 입력해 주세요.');
    } else {
      word = newWord; // 입력한 단어가 제시어가 된다.
      $word.textContent = word;
      const order = parseInt($order.textContent); // 현재 순서
      if (order + 1 > number) {
        $order.textContent = 1;
      } else {
        $order.textContent = order + 1;
      }
    }
  } else {
    alert('올바르지 않은 단어 입니다.');
  }
  $input.value = '';
  $input.focus();
};
const onInput = (event) => {
  newWord = event.target.value;
};

$button.addEventListener('click', onClickButton);
$input.addEventListener('input', onInput);
