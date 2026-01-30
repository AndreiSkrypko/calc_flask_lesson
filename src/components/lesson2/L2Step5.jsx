function L2Step5() {
  return (
    <div className="step-content trainer-step">
      <h2>Шаг 5: Реализация POST — добавление задачи подробно</h2>

      <p>Теперь ты напишешь маршрут, который принимает POST‑запрос и добавляет новую задачу в список.</p>

      <div className="code-block">
        <code>{`# В app.py (подробно)
from flask import request, jsonify

next_id = 1

@app.route('/api/todos', methods=['POST'])
def add_todo():
    global next_id
    # request.json — это уже распарсенный JSON из тела запроса
    data = request.json
    # Берём поле "text" и убираем пробелы по краям
    text = data.get('text', '').strip()
    # Проверка: пустой текст — возвращаем ошибку 400
    if not text:
        return jsonify({'success': False, 'error': 'empty'}), 400
    # Создаём объект задачи с уникальным id
    todo = {'id': next_id, 'text': text, 'done': False}
    todos.append(todo)
    next_id += 1
    # Возвращаем созданную задачу и статус успеха
    return jsonify({'success': True, 'todo': todo}), 201`}</code>
      </div>

      <h3>Пошаговое объяснение для тебя</h3>
      <ul>
        <li><code>request.json</code> — Flask сам разбирает JSON, который ты отправишь с фронта.</li>
        <li><code>.get('text', '')</code> защищает от отсутствующего поля.</li>
        <li>Проверяем пустую строку — если она пустая, ничего не добавляем.</li>
        <li>Увеличиваем <code>next_id</code>, чтобы у каждой задачи был свой уникальный номер.</li>
        <li>Возвращаем код 201 (Created) — это значит «создано успешно».</li>
      </ul>

      <h3>Как тестировать вручную</h3>
      <pre>{`curl -X POST http://localhost:5001/api/todos -H "Content-Type: application/json" -d '{"text":"Купить яблоки"}'`}</pre>

      <div className="success-box">
        <strong>✅ После этого:</strong> проверь, что задача появилась при GET /api/todos, и что сервер вернул объект задачи.
      </div>
    </div>
  )
}

export default L2Step5

