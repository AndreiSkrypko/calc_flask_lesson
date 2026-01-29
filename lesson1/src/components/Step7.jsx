function Step7() {
  return (
    <div className="step-content">
      <h2>Шаг 7: Создание JavaScript кода</h2>
      
      <p>
        JavaScript добавляет интерактивность нашей странице. 
        Он будет отправлять запросы на сервер и отображать результаты.
      </p>

      <h3>Что нужно сделать:</h3>
      
      <ol>
        <li>
          <strong>Создайте файл script.js</strong>
          <ul>
            <li>Правой кнопкой на папку <code>static</code></li>
            <li>Выберите <span className="highlight">New → File</span></li>
            <li>Назовите файл <code>script.js</code></li>
          </ul>
        </li>
        
        <li>
          <strong>Напишите JavaScript код</strong>
          <p>Откройте файл <code>static/script.js</code> и вставьте код:</p>
          <div className="code-block">
            <code>{`// Ждем загрузки страницы
document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculateBtn');
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const operationSelect = document.getElementById('operation');
    const resultDiv = document.getElementById('result');
    
    // Обработчик клика на кнопку
    calculateBtn.addEventListener('click', calculate);
    
    // Вычисление при нажатии Enter
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
        
        // Проверка корректности ввода
        if (isNaN(num1) || isNaN(num2)) {
            showResult('Пожалуйста, введите корректные числа!', false);
            return;
        }
        
        // Показываем загрузку
        resultDiv.textContent = 'Вычисляем...';
        resultDiv.className = 'result';
        
        // Отправляем запрос на сервер
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
                showResult(\`Результат: \${data.result}\`, true);
            } else {
                showResult(\`Ошибка: \${data.error}\`, false);
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
});`}</code>
          </div>
        </li>
        
        <li>
          <strong>Сохраните файл</strong>
        </li>
      </ol>

      <div className="info-box">
        <strong>💡 Объяснение JavaScript:</strong>
        <ul>
          <li><code>document.getElementById()</code> - находит элемент на странице по ID</li>
          <li><code>addEventListener()</code> - добавляет обработчик события (клик, нажатие клавиши)</li>
          <li><code>fetch()</code> - отправляет HTTP запрос на сервер</li>
          <li><code>JSON.stringify()</code> - преобразует объект в JSON строку</li>
          <li><code>.then()</code> - обрабатывает ответ от сервера</li>
          <li><code>.catch()</code> - обрабатывает ошибки</li>
        </ul>
      </div>

      <div className="file-structure">
        <div>📁 ваш_проект/</div>
        <div>&nbsp;&nbsp;📁 templates/</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;📄 index.html</div>
        <div>&nbsp;&nbsp;📁 static/</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;📄 style.css</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;📄 script.js</div>
        <div>&nbsp;&nbsp;📄 app.py</div>
      </div>

      <div className="success-box">
        <strong>✅ Готово!</strong> JavaScript код создан. Теперь создадим файл requirements.txt.
      </div>
    </div>
  )
}

export default Step7
