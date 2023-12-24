function checkLucky() {
    const userNumber = document.getElementById('userNumber').value;

    if (!userNumber || isNaN(userNumber) || userNumber <= 0) {
        alert('Будь ласка, введіть дійсне позитивне число.');
        return;
    }

    const isLucky = isLuckyNumber(userNumber);
    displayResult(isLucky);
}

function isLuckyNumber(number) {
    number = number.toString();
    const digits = number.split('').map(Number);
    const sum = digits.reduce((acc, digit) => acc + digit, 0);
    return sum === 7 || sum === 11;
}

function displayResult(isLucky) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = isLucky
        ? 'Твоє число щасливе! 🎉'
        : 'Твоє число не щасливе. 😔';
}