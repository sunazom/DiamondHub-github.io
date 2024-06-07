function createDiamond() {
    const diamond = document.createElement('div');
    diamond.classList.add('diamond');

    diamond.style.left = Math.random() * 100 + 'vw';
    diamond.style.animationDuration = Math.random() * 2 + 3 + 's';

    document.body.appendChild(diamond);

    setTimeout(() => {
        diamond.remove();
    }, 5000);
}

setInterval(createDiamond, 300);
