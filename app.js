window.onload = () => {
    const playSound = (e) => {
        const keyCode = e.keyCode,
            keyElement = document.querySelector(`div[data-key="${keyCode}"]`);
        if (!keyElement) return;
        const audioEl = document.querySelector(`audio[data-key="${keyCode}"]`);
        audioEl.currentTime = 0;
        audioEl.play();
    }
    window.addEventListener('keydown', playSound);
}