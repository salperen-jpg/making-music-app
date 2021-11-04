window.addEventListener('keydown', (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    typedKey(e);
    typeSongName(e);
    typeKeyCodes(e);
    if (!audio) return
    audio.play();
    key.classList.add('playing')
});

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing')
}

function typedKey(e) {
    const typedDiv = document.querySelector('.typedKey');
    const letter = document.querySelector('.typedKey > kbd')


    const typ = e.key;
    typedDiv.classList.add('key');
    letter.style.textTransform = 'uppercase'
    letter.innerText = typ

}

function typeSongName(e) {
    const soundsName = document.querySelector('.typedKey .sound')
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const div = document.querySelector(`.keys .key[data-key='${e.keyCode}']`)
    const relatedSong = document.querySelector(`.keys .key[data-key='${e.keyCode}'] .sound`)
    if (audio) {

        soundsName.innerText = relatedSong.innerText

    } else {
        soundsName.innerText = '';
    }

}

function typeKeyCodes(e) {
    const keyC = document.querySelector('.keyCodes > kbd');
    keyC.classList.add('keyClass')
    keyC.innerText = e.keyCode
}