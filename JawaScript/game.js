const secretNumber = Math.floor(Math.random() * 100) + 1; // Генерує випадкове число від 1 до 100
let attempts = 0;

function checkGuess() {
    const userGuess = parseInt(document.getElementById('userGuess').value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        alert('Введіть дійсне число від 1 до 100.');
        return;
    }

    attempts++;

    if (userGuess === secretNumber) {
        displayResult(`Вітаємо! Ви вгадали число ${secretNumber} за ${attempts} спроб.`);
    } else if (userGuess < secretNumber) {
        displayHint('Замало. Спробуйте більше.');
    } else {
        displayHint('Забагато. Спробуйте менше.');
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