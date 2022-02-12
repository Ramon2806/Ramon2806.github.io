
function removeTransition(event) {
    if (event.propertyName !== 'transform') return;
    event.target.classList.remove('playing');
}

function playSound(e) {
    //data-key="65"
const audio = document.querySelector(`audio[data-key="${e.keyCode}¨]`);
const key = document.querySelector(`div[data-key="${e.keyCode}¨]`);
const keys = document.querySelectorAll('.key');

keys.forEach ( key=> key.addEventListenner('transitionend', removeTransition))

if (!audio) return;
key.classList.add("playing");
audio.currentTimev = 0;
audio.play();
}

window.addEventListener('keydown', playSound);