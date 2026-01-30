function L2Step4() {
  return (
    <div className="step-content trainer-step">
      <h2>Шаг 4: Тестируем и улучшаем</h2>

      <h3>Запуск</h3>
      <ol>
        <li>Включи виртуальное окружение и запусти: <code>python app.py</code>.</li>
        <li>Открой в браузере: <code>http://localhost:5001</code>.</li>
      </ol>

      <h3>Проверяй сам</h3>
      <ul>
        <li>Введи текст и нажми «Добавить» — появилась ли задача?</li>
        <li>Попробуй добавить пустую строку — ничего не должно добавиться.</li>
        <li>Нажми «Готово» — задача должна пометиться (например, ✅ или зачёркнуться).</li>
        <li>Нажми «Удалить» — задача должна исчезнуть.</li>
      </ul>

      <div className="info-box">
        <strong>Почему это важно</strong>
        <p>Потому что если что‑то не работает, легче исправить маленький кусочек кода, чем весь проект.</p>
      </div>

      <h3>Идеи для улучшения</h3>
      <ul>
        <li>Сохрани задачи в файл или в SQLite (будет в уроке 3).</li>
        <li>Добавь красивые стили и анимации.</li>
        <li>Добавь проверку длины и запрещай пустые задачи.</li>
      </ul>

      <div className="success-box trainer-examples">
        <strong>✅ Урок 2 пройден!</strong>
        <p>Примеры HTML/JS файлов находятся в <code>lesson2/todo-flask/templates/index.html</code> и <code>lesson2/todo-flask/static/script.js</code>. Сравнивай свой код с ними.</p>
      </div>
    </div>
  )
}

export default L2Step4
