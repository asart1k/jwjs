let balance = 1000;

function withdraw() {
    const amountInput = document.getElementById('amount');
    const amount = parseFloat(amountInput.value);

    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount.');
        return;
    }

    if (amount > balance) {
        alert('Insufficient funds.');
        return;
    }

    balance -= amount;
    updateBalance();
    alert(`Withdrawal successful. Remaining balance: $${balance}`);
}

function updateBalance() {
    const balanceSpan = document.getElementById('balance');
    balanceSpan.textContent = balance;
}