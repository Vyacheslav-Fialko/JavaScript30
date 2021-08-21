const removeTransition = (e) => {
  e.propertyName === "transform" ? e.target.classList.remove("playing") : false;
};
const playSound = (keyCode) => {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`div[data-key="${keyCode}"]`);
  if (audio) {
    key.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
  } else {
    return false;
  }
};

const keys = Array.from(document.querySelectorAll(".key"));

keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
  key.addEventListener("click", () => {
    playSound(key.dataset.key);
  });
});

window.addEventListener("keydown", (e) => {
  const key = e.keyCode;
  playSound(key);
});
