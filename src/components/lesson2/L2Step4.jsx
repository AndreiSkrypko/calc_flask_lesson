function L2Step4() {
  return (
    <div className="step-content trainer-step">
      <h2>Шаг 4: Запуск и проверка</h2>

      <ol>
        <li>Активируй venv, выполни <code>python app.py</code>.</li>
        <li>Открой <code>http://localhost:5001</code> (или тот порт, что указан в <code>app.run</code>).</li>
        <li>Добавь дела, отметь «Готово», удали — убедись, что всё работает.</li>
        <li>Перезапусти сервер — список очистится (данные в памяти).</li>
      </ol>

      <div className="success-box trainer-examples">
        <strong>✅ Урок 2 завершён!</strong>
        <p>Ты сделал приложение с несколькими маршрутами и данными в памяти. В уроке 3 будем сохранять данные в SQLite.</p>
      </div>
    </div>
  )
}

export default L2Step4
