function playSound(e) {
    const key = document.querySelector(`button[data-key="${e.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    
    if (!audio) {
        console.log("There's no such instrument in a symphony orchestra");
    } else {
        // console.log(key);
        key.classList.add('playing');
        audio.currentTime = 0;
        audio.play();
    };
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

function playMusic(e) {
    const audio = document.querySelector(`audio[data-key="${e.currentTarget.dataset.key}"]`);
    
    this.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

window.addEventListener('keydown', playSound);

const buttons = document.querySelectorAll('.keys__key');
buttons.forEach(e => e.addEventListener('transitionend', removeTransition));
buttons.forEach(e => e.addEventListener('click', playMusic));
