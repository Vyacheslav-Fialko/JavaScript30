const inputs = document.querySelectorAll('input');
function hendleHelp() {
  const suf = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`,`${this.value}${suf}`)
}

inputs.forEach(el => {
  el.addEventListener("change", hendleHelp)
})

inputs.forEach(el => {
  el.addEventListener("mousemove", hendleHelp)
})