function filterTable() {
    const input = document.getElementById('nameFilter');
    const filter = input.value.toUpperCase();
    const table = document.getElementById('peopleTable');
    const rows = table.getElementsByTagName('tr');

    // Проходимося по всіх рядах таблиці, починаючи з другого (індекс 1)
    for (let i = 1; i < rows.length; i++) {
        const nameColumn = rows[i].getElementsByTagName('td')[0];
        if (nameColumn) {
            const nameText = nameColumn.textContent || nameColumn.innerText;
            // Порівнюємо текст в колонці з фільтром
            if (nameText.toUpperCase().indexOf(filter) > -1) {
                rows[i].style.display = ''; // Відображення рядка, якщо текст збігається
            } else {
                rows[i].style.display = 'none'; // Сховати рядок, якщо текст не збігається
            }
        }
    }
}