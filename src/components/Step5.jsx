function Step5() {
  return (
    <div className="step-content">
      <h2>Шаг 5: Создание HTML шаблона</h2>
      
      <p>
        HTML шаблон определяет структуру нашей веб-страницы. 
        Flask ищет шаблоны в папке <code>templates</code>.
      </p>

      <h3>Что нужно сделать:</h3>
      
      <ol>
        <li>
          <strong>Создайте папку templates</strong>
          <ul>
            <li>В PyCharm нажмите правой кнопкой на папку проекта</li>
            <li>Выберите <span className="highlight">New → Directory</span></li>
            <li>Назовите папку <code>templates</code></li>
          </ul>
        </li>
        
        <li>
          <strong>Создайте файл index.html</strong>
          <ul>
            <li>Правой кнопкой на папку <code>templates</code></li>
            <li>Выберите <span className="highlight">New → HTML File</span></li>
            <li>Назовите файл <code>index.html</code></li>
          </ul>
        </li>
        
        <li>
          <strong>Напишите HTML код</strong>
          <p>Откройте файл <code>templates/index.html</code> и вставьте код:</p>
          <div className="code-block">
            <code>{`<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Калькулятор на Flask</title>
    <link rel="stylesheet" href="{{ url_for('static', filename='style.css') }}">
</head>
<body>
    <div class="container">
        <h1>🧮 Калькулятор на Flask</h1>
        
        <div class="calculator">
            <div class="input-group">
                <label for="num1">Первое число:</label>
                <input 
                    type="number" 
                    id="num1" 
                    name="num1" 
                    placeholder="Введите число"
                    step="any"
                    required
                >
            </div>
            
            <div class="input-group">
                <label for="operation">Операция:</label>
                <select id="operation" name="operation" required>
                    <option value="+">Сложение (+)</option>
                    <option value="-">Вычитание (-)</option>
                    <option value="*">Умножение (*)</option>
                    <option value="/">Деление (/)</option>
                </select>
            </div>
            
            <div class="input-group">
                <label for="num2">Второе число:</label>
                <input 
                    type="number" 
                    id="num2" 
                    name="num2" 
                    placeholder="Введите число"
                    step="any"
                    required
                >
            </div>
            
            <button type="button" id="calculateBtn" class="calculate-btn">
                Вычислить
            </button>
            
            <div id="result" class="result"></div>
        </div>
    </div>
    
    <script src="{{ url_for('static', filename='script.js') }}"></script>
</body>
</html>`}</code>
          </div>
        </li>
        
        <li>
          <strong>Сохраните файл</strong>
        </li>
      </ol>

      <div className="info-box">
        <strong>💡 Объяснение HTML:</strong>
        <ul>
          <li><code>&lt;input type="number"&gt;</code> - поле для ввода чисел</li>
          <li><code>&lt;select&gt;</code> - выпадающий список для выбора операции</li>
          <li><code>&lt;button&gt;</code> - кнопка для выполнения вычисления</li>
          <li><code>id="result"</code> - блок, куда будет выводиться результат</li>
          <li><code>url_for('static', ...)</code> - функция Flask для подключения CSS и JS</li>
        </ul>
      </div>

      <div className="file-structure">
        <div>📁 ваш_проект/</div>
        <div>&nbsp;&nbsp;📁 templates/</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;📄 index.html</div>
        <div>&nbsp;&nbsp;📄 app.py</div>
      </div>

      <div className="success-box">
        <strong>✅ Готово!</strong> HTML шаблон создан. Теперь добавим стили CSS.
      </div>
    </div>
  )
}

export default Step5
