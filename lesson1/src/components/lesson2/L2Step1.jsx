function L2Step1() {
  return (
    <div className="step-content trainer-step">
      <h2>Шаг 1: Подготовка и маршруты</h2>

      <h3>Что сделать</h3>
      <ol>
        <li>Создай проект в PyCharm (как в уроке 1).</li>
        <li>Создай виртуальное окружение, установи Flask.</li>
        <li>Создай <code>app.py</code> и подключи Flask.</li>
      </ol>

      <div className="info-box trainer-definition">
        <strong>Маршруты для списка дел:</strong>
        <ul>
          <li><code>GET /</code> — главная страница (HTML)</li>
          <li><code>GET /api/todos</code> — вернуть список дел (JSON)</li>
          <li><code>POST /api/todos</code> — добавить дело (JSON: <code>{"text": "..."}</code>)</li>
          <li><code>POST /api/todos/&lt;id&gt;/toggle</code> — переключить «готово»</li>
          <li><code>DELETE /api/todos/&lt;id&gt;</code> — удалить дело</li>
        </ul>
      </div>

      <p>Пока можно вернуть пустой список:</p>
      <div className="code-block">
        <code>{`todos = []

@app.route('/api/todos')
def get_todos():
    return jsonify({'todos': todos})`}</code>
      </div>

      <div className="success-box">
        <strong>✅ Готово.</strong> Дальше — реализуем добавление, toggle и удаление.
      </div>
    </div>
  )
}

export default L2Step1
