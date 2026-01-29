function L2Step2() {
  return (
    <div className="step-content trainer-step">
      <h2>Шаг 2: Данные и API</h2>

      <p>Храним дела в списке. У каждого дела: <code>id</code>, <code>text</code>, <code>done</code>.</p>

      <div className="info-box trainer-definition">
        <strong>Структура дела:</strong>
        <pre style={{ margin: 0 }}>{`{ "id": 1, "text": "Купить молоко", "done": false }`}</pre>
      </div>

      <h3>Добавление (POST /api/todos)</h3>
      <ul>
        <li>Читай <code>request.json</code>, достань <code>text</code>.</li>
        <li>Создай объект с <code>id</code> (счётчик), <code>text</code>, <code>done: False</code>.</li>
        <li>Добавь в <code>todos</code>, верни <code>jsonify({'success': True, 'todo': ...})</code>.</li>
      </ul>

      <h3>Toggle и удаление</h3>
      <ul>
        <li><code>POST /api/todos/&lt;id&gt;/toggle</code> — найди дело по <code>id</code>, смени <code>done</code> на противоположное.</li>
        <li><code>DELETE /api/todos/&lt;id&gt;</code> — удали дело из списка, верни <code>{'success': True}</code>.</li>
      </ul>

      <div className="warning">
        <strong>Подсказка:</strong> используй <code>next_id = 1</code> и увеличивай его при каждом новом деле.
      </div>

      <div className="success-box">
        <strong>✅ Готово.</strong> Дальше — HTML и JavaScript для страницы.
      </div>
    </div>
  )
}

export default L2Step2
