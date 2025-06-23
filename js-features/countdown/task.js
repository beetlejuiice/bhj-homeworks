const timerDisplay = document.getElementById("timer");

if (!timerDisplay) {
    console.error("Элемент с id 'timer' не найден в HTML.");
    alert('Ошибка: Не найден элемент для отображения таймера.');
    throw new Error('Элемент timer не найден');
}

let timerValue = parseInt(timerDisplay.textContent);

if (isNaN(timerValue)) {
    console.error('Начальное значение таймера не является числом.');
    alert('Ошибка: Начальное значение таймера не является числом.');
    timerValue = 59;
    timerDisplay.textContent = timerValue;
}

const timerInterval = setInterval(() => {
    timerValue--;
    timerDisplay.textContent = timerValue;
    if (timerValue <= 0) {
        clearInterval(timerInterval);
        alert('Вы победили в конкурсе!');
        timerDisplay.textContent = 'Время вышло!';
    } else {
        console.log('Осталось секунд:', timerValue);
    }
}, 1000);