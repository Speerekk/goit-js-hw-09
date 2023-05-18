function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
let intervalId = null;

startButton.addEventListener('click', onStartButtonClick);
stopButton.addEventListener('click', onStopButtonClick);

function onStartButtonClick() {
  startButton.disabled = true;
  intervalId = setInterval(changeBodyColor, 1000);
}

function onStopButtonClick() {
  startButton.disabled = false;
  clearInterval(intervalId);
}

function changeBodyColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}
