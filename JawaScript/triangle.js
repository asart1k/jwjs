function calculatePerimeter() {
    const sideA = parseFloat(document.getElementById('sideA').value);
    const sideB = parseFloat(document.getElementById('sideB').value);
    const sideC = parseFloat(document.getElementById('sideC').value);

    if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC) || sideA <= 0 || sideB <= 0 || sideC <= 0) {
        alert('Please enter valid positive numbers for all sides of the triangle.');
        return;
    }

    const perimeter = sideA + sideB + sideC;
    displayPerimeter(perimeter);
}

function displayPerimeter(perimeter) {
    const resultElement = document.getElementById('perimeterResult');
    resultElement.textContent = `The perimeter of the triangle is: ${perimeter}`;
}