document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculateBtn');
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const operationSelect = document.getElementById('operation');
    const resultDiv = document.getElementById('result');

    calculateBtn.addEventListener('click', calculate);

    num1Input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            calculate();
        }
    });

    num2Input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            calculate();
        }
    });

    function calculate() {
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);
        const operation = operationSelect.value;

        if (isNaN(num1) || isNaN(num2)) {
            showResult('Пожалуйста, введите корректные числа!', false);
            return;
        }

        resultDiv.textContent = 'Вычисляем...';
        resultDiv.className = 'result';

        fetch('/calculate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                num1: num1,
                num2: num2,
                operation: operation
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                showResult(`Результат: ${data.result}`, true);
            } else {
                showResult(`Ошибка: ${data.error}`, false);
            }
        })
        .catch(error => {
            console.error('Ошибка:', error);
            showResult('Произошла ошибка при соединении с сервером!', false);
        });
    }

    function showResult(message, isSuccess) {
        resultDiv.textContent = message;
        if (isSuccess) {
            resultDiv.className = 'result success';
        } else {
            resultDiv.className = 'result error';
        }
    }
});
