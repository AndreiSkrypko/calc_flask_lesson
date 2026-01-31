function L2Step8() {
  return (
    <div className="step-content trainer-step">
      <h2>Шаг 8: Шаблоны и статичные файлы (HTML, CSS, JS)</h2>

      <div className="info-box trainer-definition">
        <strong>💡 Зачем нужны папки templates и static?</strong>
        <p style={{marginTop: '10px'}}>
          Flask имеет специальные папки для разных типов файлов:
        </p>
        <ul style={{marginTop: '10px'}}>
          <li><strong>templates/</strong> — здесь лежат HTML шаблоны. Flask может вставлять в них данные из Python (но в нашем уроке мы этого не делаем).</li>
          <li><strong>static/</strong> — здесь лежат файлы, которые не меняются: CSS (стили), JavaScript, картинки. Flask автоматически отдаёт их браузеру.</li>
        </ul>
        <p style={{marginTop: '10px'}}>
          Это как организовать свою комнату: книги в шкафу, игрушки в коробке. 
          Когда всё на своих местах, легко найти то, что нужно!
        </p>
      </div>

      <p>Сейчас ты создашь шаблон и подключишь файл <code>static/script.js</code> и <code>static/style.css</code>.</p>

      <div className="code-block">
        <code>{`<!-- templates/index.html -->
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Todo</title>
    <link rel="stylesheet" href="/static/style.css">
  </head>
  <body>
    <input id="newText" placeholder="Что нужно сделать?" />
    <button id="addBtn">Добавить</button>
    <ul id="todosList"></ul>
    <script src="/static/script.js"></script>
  </body>
</html>`}</code>
      </div>

      <h3>🔍 Разберём HTML по строчкам:</h3>
      <ul>
        <li><code>&lt;!doctype html&gt;</code> — говорим браузеру: "Это HTML5 документ".</li>
        <li><code>&lt;html&gt;</code> — начало HTML документа.</li>
        <li><code>&lt;head&gt;</code> — секция с информацией о странице (не видна пользователю).</li>
        <li><code>&lt;meta charset="utf-8"&gt;</code> — кодировка, чтобы русские буквы отображались правильно.</li>
        <li><code>&lt;title&gt;Todo&lt;/title&gt;</code> — заголовок страницы (виден во вкладке браузера).</li>
        <li><code>&lt;link rel="stylesheet" href="/static/style.css"&gt;</code> — подключаем CSS файл со стилями. Браузер загрузит его и применит стили к странице.</li>
        <li><code>&lt;body&gt;</code> — секция с видимым содержимым страницы.</li>
        <li><code>&lt;input id="newText"&gt;</code> — поле для ввода текста. ID нужен, чтобы JavaScript мог найти это поле.</li>
        <li><code>&lt;button id="addBtn"&gt;</code> — кнопка. JavaScript будет слушать клики по ней.</li>
        <li><code>&lt;ul id="todosList"&gt;</code> — пустой список. JavaScript будет добавлять в него дела.</li>
        <li><code>&lt;script src="/static/script.js"&gt;&lt;/script&gt;</code> — подключаем JavaScript файл. Браузер загрузит его и выполнит код.</li>
      </ul>

      <h3>💡 Что важно</h3>
      <ul>
        <li><strong>Flask автоматически отдаёт файлы из папки <code>static</code></strong> — когда браузер запрашивает <code>/static/script.js</code>, Flask находит файл <code>static/script.js</code> и отправляет его браузеру.</li>
        <li><strong>Шаблон должен лежать в <code>templates/index.html</code></strong> — Flask ищет шаблоны именно в этой папке.</li>
        <li><strong>В <code>app.py</code> нужен маршрут:</strong> <code>@app.route('/')</code> с функцией <code>return render_template('index.html')</code> — это говорит Flask: "Когда кто-то зайдёт на главную страницу, покажи шаблон index.html".</li>
      </ul>

      <div className="success-box">
        <strong>✅ Сделай:</strong> создай папки <code>templates</code> и <code>static</code>, добавь файлы и проверь страницу в браузере.
      </div>
    </div>
  )
}

export default L2Step8

