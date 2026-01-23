/*
Файл: static/script.js
Это JavaScript файл, который добавляет интерактивность нашему калькулятору.

JavaScript - язык программирования для веб-страниц.
Здесь мы обрабатываем действия пользователя и отправляем запросы на сервер.
*/

// Ждем, пока весь HTML загрузится в браузер
// DOMContentLoaded - событие, которое происходит когда HTML полностью загружен
document.addEventListener('DOMContentLoaded', function() {
    // Находим кнопку "Вычислить" по её ID
    const calculateBtn = document.getElementById('calculateBtn');
    
    // Находим поля ввода и блок результата
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const operationSelect = document.getElementById('operation');
    const resultDiv = document.getElementById('result');
    
    // Добавляем обработчик события "клик" на кнопку
    // Когда пользователь нажмет кнопку, выполнится функция calculate()
    calculateBtn.addEventListener('click', calculate);
    
    // Также можно вычислять при нажатии Enter в полях ввода
    num1Input.addEventListener('keypress', function(e) {
        // Если нажата клавиша Enter (код 13)
        if (e.key === 'Enter') {
            calculate();
        }
    });
    
    num2Input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            calculate();
        }
    });
    
    /**
     * Функция calculate() отправляет запрос на сервер для выполнения вычисления
     */
    function calculate() {
        // Получаем значения из полей ввода
        const num1 = parseFloat(num1Input.value);
        // parseFloat() преобразует строку в число с плавающей точкой
        const num2 = parseFloat(num2Input.value);
        const operation = operationSelect.value;
        
        // Проверяем, что числа введены корректно
        // isNaN() проверяет, является ли значение "не числом"
        if (isNaN(num1) || isNaN(num2)) {
            showResult('Пожалуйста, введите корректные числа!', false);
            return; // Прерываем выполнение функции
        }
        
        // Показываем, что идет загрузка
        resultDiv.textContent = 'Вычисляем...';
        resultDiv.className = 'result';
        
        // Отправляем POST запрос на сервер
        // fetch() - современный способ отправки HTTP запросов
        fetch('/calculate', {
            method: 'POST', // Метод запроса - POST (для отправки данных)
            headers: {
                'Content-Type': 'application/json'
                // Указываем, что отправляем данные в формате JSON
            },
            body: JSON.stringify({
                // JSON.stringify() преобразует JavaScript объект в JSON строку
                num1: num1,
                num2: num2,
                operation: operation
            })
        })
        .then(response => response.json())
        // .then() обрабатывает ответ от сервера
        // response.json() преобразует JSON ответ в JavaScript объект
        .then(data => {
            // Проверяем, успешно ли выполнилась операция
            if (data.success) {
                // Показываем результат
                showResult(`Результат: ${data.result}`, true);
            } else {
                // Показываем ошибку
                showResult(`Ошибка: ${data.error}`, false);
            }
        })
        .catch(error => {
            // .catch() обрабатывает ошибки, если что-то пошло не так
            console.error('Ошибка:', error);
            // console.error() выводит ошибку в консоль браузера (для отладки)
            showResult('Произошла ошибка при соединении с сервером!', false);
        });
    }
    
    /**
     * Функция showResult() отображает результат или ошибку на странице
     * @param {string} message - текст сообщения
     * @param {boolean} isSuccess - true если успех, false если ошибка
     */
    function showResult(message, isSuccess) {
        resultDiv.textContent = message;
        // textContent устанавливает текстовое содержимое элемента
        
        // Устанавливаем класс в зависимости от результата
        if (isSuccess) {
            resultDiv.className = 'result success';
            // Класс 'success' применяет зеленые стили
        } else {
            resultDiv.className = 'result error';
            // Класс 'error' применяет красные стили
        }
    }
});
