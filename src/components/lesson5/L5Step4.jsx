function L5Step4() {
  return (
    <div className="step-content trainer-step">
      <h2>Шаг 4: Запуск и проверка</h2>

      <ol>
        <li>Запусти <code>python app.py</code>, открой <code>http://localhost:5004</code>.</li>
        <li>Создай пост, отредактируй, удали. Убедись, что flash-сообщения видны.</li>
        <li>Проверь валидацию: пустой заголовок или текст — снова форма и сообщение об ошибке.</li>
      </ol>

      <div className="success-box trainer-examples">
        <strong>✅ Урок 5 завершён!</strong>
        <p>Ты сделал блог с CRUD, формами и валидацией. Курс по Flask для начинающих пройден.</p>
      </div>
    </div>
  )
}

export default L5Step4
