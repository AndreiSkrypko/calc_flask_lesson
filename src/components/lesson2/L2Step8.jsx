function L2Step8() {
  return (
    <div className="step-content trainer-step">
      <h2>Шаг 8: Шаблоны и статичные файлы (HTML, CSS, JS)</h2>

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

      <h3>Что важно</h3>
      <ul>
        <li>Flask сразу отдаёт файлы из папки <code>static</code>.</li>
        <li>Шаблон должен лежать в <code>templates/index.html</code> и возвращаться через <code>render_template('index.html')</code>.</li>
      </ul>

      <div className="success-box">
        <strong>✅ Сделай:</strong> создай папки <code>templates</code> и <code>static</code>, добавь файлы и проверь страницу в браузере.
      </div>
    </div>
  )
}

export default L2Step8

