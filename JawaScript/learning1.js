function displayInfo() {
    const learningLevel = parseInt(document.getElementById('learningLevel').value);
    const levelInfo = document.getElementById('levelInfo');
    const levelDescription = document.getElementById('levelDescription');

    switch (learningLevel) {
        case 1:
        case 2:
        case 3:
            levelDescription.textContent = 'Низький рівень навчання.';
            break;
        case 4:
        case 5:
        case 6:
            levelDescription.textContent = 'Середній рівень навчання.';
            break;
        case 7:
        case 8:
        case 9:
            levelDescription.textContent = 'Достатній рівень навчання.';
            break;
        case 10:
        case 11:
        case 12:
            levelDescription.textContent = 'Високий рівень навчання.';
            break;
        default:
            levelDescription.textContent = 'Невірний рівень навчання.';
    }

    levelInfo.style.display = 'block';
}