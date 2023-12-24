const correctAnswer = 'Патрик';
let attempts = 0;

function checkGuess() {
    const userGuess = document.getElementById('userGuess').value.trim();

    if (!userGuess) {
        alert('Введіть ім\'я.');
        return;
    }

    attempts++;

    if (userGuess.toLowerCase() === correctAnswer.toLowerCase()) {
        displayResult(`Вітаємо! ${correctAnswer} - це правильна відповідь. Ви вгадали за ${attempts} спроб.`);
    } else {
        displayHint('Неправильно. Спробуйте ще раз.');
    }
}

function displayResult(message) {
    const hintElement = document.getElementById('hint');
    hintElement.textContent = message;
    hintElement.style.color = 'green';
}

function displayHint(message) {
    const hintElement = document.getElementById('hint');
    hintElement.textContent = message;
    hintElement.style.color = 'red';
}