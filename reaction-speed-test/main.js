const $screen = document.querySelector('#screen');
const $result = document.querySelector('#result');
let startTime;
let endTime;
const records = [];
let timeoutId;

$screen.addEventListener('click', function () {
  if ($screen.classList.contains('waiting')) {
    // 대기 화면
    $screen.classList.remove('waiting');
    $screen.classList.add('ready');
    $screen.textContent = '초록색이 되면 클릭하세요';
    timeoutId = setTimeout(function () {
      startTime = new Date();
      $screen.classList.remove('ready');
      $screen.classList.add('now');
      $screen.textContent = '클릭하세요!';
    }, Math.floor(Math.random() * 1000) + 2000); // 2000~3000 사이 수
  } else if ($screen.classList.contains('ready')) {
    // 준비 화면
    clearTimeout(timeoutId);
    $screen.classList.remove('ready');
    $screen.classList.add('waiting');
    $screen.textContent = '너무 성급하시군요!';
  } else if ($screen.classList.contains('now')) {
    // 클릭 화면
    endTime = new Date();
    const current = endTime - startTime;
    records.push(current);
    const average = records.reduce((a, c) => a + c) / records.length;
    $result.textContent = `현재 ${current}ms, 평균: ${average}ms`;
    startTime = null;
    endTime = null;
    $screen.classList.remove('now');
    $screen.classList.add('waiting');
    $screen.textContent = '클릭해서 시작하세요';
  }
});
