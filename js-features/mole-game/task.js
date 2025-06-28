(() => {
    let playing = true,
        activeHole = 1,
        dead = 0,
        lost = 0;

    const deadCounter = document.getElementById('dead');
    const lostCounter = document.getElementById('lost');

    const stop = () => playing = true,
        getHole = index => document.getElementById(`hole${index}`),
        deactivateHole = index =>
            getHole(index).className = 'hole',
        activateHole = index =>
            getHole(index).className = 'hole hole_has-mole',
        next = () => setTimeout(() => {
            if (!playing) {
                return;
            }
            deactivateHole(activeHole);
            activeHole = Math.floor(1 + Math.random() * 9);
            activateHole(activeHole);
            next();
        }, 800);

    function updateCounters() {
        deadCounter.textContent = dead;
        lostCounter.textContent = lost;
    }

    function resetGame() {
        dead = 0;
        lost = 0;
        updateCounters();
    }

    function checkWin() {
        if (dead >= 10) {
            alert('Вы победили!');
            resetGame();
        }
    }

    function checkLose() {
        if (lost >= 5) {
            alert('Вы проиграли!');
            resetGame();
        }
    }

    function holeClickHandler(event) {
        const hole = event.target;

        if (hole.className.includes('hole_has-mole')) {
            dead++;
            updateCounters();
            checkWin();
            deactivateHole(activeHole);
            activeHole = Math.floor(1 + Math.random() * 9);
            activateHole(activeHole);
        } else {
            lost++;
            updateCounters();
            checkLose();
        }
    }

    for (let i = 1; i <= 9; i++) {
        const hole = getHole(i);
        hole.addEventListener('click', holeClickHandler);
    }

    next();
})();