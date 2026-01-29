function Step8() {
  return (
    <div className="step-content">
      <h2>Шаг 8: Создание requirements.txt</h2>
      
      <p>
        Файл <code>requirements.txt</code> содержит список всех библиотек, 
        необходимых для проекта. Это позволяет легко установить все зависимости на другом компьютере.
      </p>

      <h3>Что нужно сделать:</h3>
      
      <ol>
        <li>
          <strong>Создайте файл requirements.txt</strong>
          <ul>
            <li>В PyCharm нажмите правой кнопкой на папку проекта</li>
            <li>Выберите <span className="highlight">New → File</span></li>
            <li>Назовите файл <code>requirements.txt</code></li>
          </ul>
        </li>
        
        <li>
          <strong>Добавьте Flask в файл</strong>
          <p>Откройте файл <code>requirements.txt</code> и вставьте:</p>
          <div className="code-block">
            <code>{`Flask==3.0.0
Werkzeug==3.0.1`}</code>
          </div>
          <p>Или просто:</p>
          <div className="code-block">
            <code>Flask==3.0.0</code>
          </div>
        </li>
        
        <li>
          <strong>Сохраните файл</strong>
        </li>
      </ol>

      <div className="info-box">
        <strong>💡 Зачем нужен requirements.txt?</strong>
        <ul>
          <li>Позволяет легко установить все зависимости одной командой</li>
          <li>Фиксирует версии библиотек для совместимости</li>
          <li>Упрощает развертывание проекта на другом компьютере</li>
        </ul>
      </div>

      <div className="info-box">
        <strong>💡 Как использовать requirements.txt:</strong>
        <p>Для установки всех зависимостей выполните:</p>
        <div className="command">
          pip install -r requirements.txt
        </div>
      </div>

      <div className="file-structure">
        <div>📁 ваш_проект/</div>
        <div>&nbsp;&nbsp;📁 templates/</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;📄 index.html</div>
        <div>&nbsp;&nbsp;📁 static/</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;📄 style.css</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;📄 script.js</div>
        <div>&nbsp;&nbsp;📄 app.py</div>
        <div>&nbsp;&nbsp;📄 requirements.txt</div>
      </div>

      <div className="success-box">
        <strong>✅ Готово!</strong> Файл requirements.txt создан. 
        Теперь можно запускать проект!
      </div>
    </div>
  )
}

export default Step8
