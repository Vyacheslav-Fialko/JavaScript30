const secondHand = document.querySelector('.second-hand');
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.min-hand');

const init = () => {
  const date = new Date();
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hour = date.getHours();
  secondHand.style.transform = `rotate(${seconds * 6}deg)`;
  minuteHand.style = `transform: rotate(${minutes * 6}deg)`;
  hourHand.style = `transform: rotate(${((hour / 12) * 360) + ((minutes/60)*30)}deg)`;
};

init();

setTimeout(function run() {
  init();
  setTimeout(run, 1000);
}, 1000);
