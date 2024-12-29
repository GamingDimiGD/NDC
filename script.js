const party = () => {
    const duration = 15 * 1000,
        animationEnd = Date.now() + duration,
        defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function rng(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function () {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);

        // since particles fall down, start a bit higher than random
        confetti(
            Object.assign({}, defaults, {
                particleCount,
                origin: { x: rng(0.1, 0.3), y: Math.random() - 0.2 },
            })
        );
        confetti(
            Object.assign({}, defaults, {
                particleCount,
                origin: { x: rng(0.7, 0.9), y: Math.random() - 0.2 },
            })
        );
    }, 250);
}

const addZero = (num) => {
    return num < 10 ? '0' + num : num;
}

let partied = false

setInterval(() => {
    let date = new Date();
    $('.hr').text(addZero(24 - date.getHours() - 1));
    $('.min').text(addZero(60 - date.getMinutes() - 1));
    $('.sec').text(addZero(60 - date.getSeconds() - 1));
    if(!partied && 24 - date.getHours() - 1 === 0 && 60 - date.getMinutes() - 1 === 0 && 60 - date.getSeconds() - 1 === 0){
        party();
        partied = true;
    }
})