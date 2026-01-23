function Step6() {
  return (
    <div className="step-content">
      <h2>Шаг 6: Создание CSS стилей</h2>
      
      <p>
        CSS (Cascading Style Sheets) определяет внешний вид нашей страницы. 
        Flask ищет статические файлы (CSS, JS, изображения) в папке <code>static</code>.
      </p>

      <h3>Что нужно сделать:</h3>
      
      <ol>
        <li>
          <strong>Создайте папку static</strong>
          <ul>
            <li>В PyCharm нажмите правой кнопкой на папку проекта</li>
            <li>Выберите <span className="highlight">New → Directory</span></li>
            <li>Назовите папку <code>static</code></li>
          </ul>
        </li>
        
        <li>
          <strong>Создайте файл style.css</strong>
          <ul>
            <li>Правой кнопкой на папку <code>static</code></li>
            <li>Выберите <span className="highlight">New → File</span></li>
            <li>Назовите файл <code>style.css</code></li>
          </ul>
        </li>
        
        <li>
          <strong>Напишите CSS код</strong>
          <p>Откройте файл <code>static/style.css</code> и вставьте код:</p>
          <div className="code-block">
            <code>{`* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.container {
    background: white;
    border-radius: 20px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
    padding: 40px;
    max-width: 500px;
    width: 100%;
}

h1 {
    text-align: center;
    color: #333;
    margin-bottom: 30px;
    font-size: 2em;
}

.calculator {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.input-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

label {
    font-weight: 600;
    color: #555;
    font-size: 14px;
}

input[type="number"],
select {
    padding: 12px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-size: 16px;
    transition: border-color 0.3s;
}

input[type="number"]:focus,
select:focus {
    outline: none;
    border-color: #667eea;
}

.calculate-btn {
    padding: 15px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
    margin-top: 10px;
}

.calculate-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
}

.result {
    margin-top: 20px;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    font-size: 24px;
    font-weight: 600;
    min-height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.result.success {
    background-color: #d4edda;
    color: #155724;
    border: 2px solid #c3e6cb;
}

.result.error {
    background-color: #f8d7da;
    color: #721c24;
    border: 2px solid #f5c6cb;
}`}</code>
          </div>
        </li>
        
        <li>
          <strong>Сохраните файл</strong>
        </li>
      </ol>

      <div className="info-box">
        <strong>💡 Объяснение CSS:</strong>
        <ul>
          <li><code>background: linear-gradient(...)</code> - создает градиентный фон</li>
          <li><code>border-radius</code> - скругляет углы элементов</li>
          <li><code>box-shadow</code> - добавляет тень для объема</li>
          <li><code>:hover</code> - стили при наведении мыши</li>
          <li><code>:focus</code> - стили когда элемент в фокусе</li>
        </ul>
      </div>

      <div className="file-structure">
        <div>📁 ваш_проект/</div>
        <div>&nbsp;&nbsp;📁 templates/</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;📄 index.html</div>
        <div>&nbsp;&nbsp;📁 static/</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;📄 style.css</div>
        <div>&nbsp;&nbsp;📄 app.py</div>
      </div>

      <div className="success-box">
        <strong>✅ Готово!</strong> CSS стили созданы. Теперь добавим JavaScript для интерактивности.
      </div>
    </div>
  )
}

export default Step6
