function calculateLevel() {
    const points = parseFloat(document.getElementById('points').value);

    if (isNaN(points) || points < 0) {
        alert('Введіть дійсне число більше або рівне нулю.');
        return;
    }

    const level = determineLevel(points);
    displayLevel(level);
}

function determineLevel(points) {
    if (points >= 90) {
        return 'Високий рівень';
    } else if (points >= 70) {
        return 'Достатній рівень';
    } else if (points >= 50) {
        return 'Середній рівень';
    } else {
        return 'Низький рівень';
    }
}

function displayLevel(level) {
    const resultElement = document.getElementById('levelResult');
    resultElement.textContent = `Ваш рівень: ${level}`;
}