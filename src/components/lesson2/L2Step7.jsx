function L2Step7() {
  return (
    <div className="step-content trainer-step">
      <h2>Шаг 7: Реализация удаления (DELETE)</h2>

      <p>Реализуем маршрут, который удаляет задачу по её идентификатору.</p>

      <div className="code-block">
        <code>{`@app.route('/api/todos/<int:id>', methods=['DELETE'])
def delete_todo(id):
    global todos
    # Формируем новый список без задачи с этим id
    new_todos = [t for t in todos if t['id'] != id]
    if len(new_todos) == len(todos):
        return jsonify({'success': False, 'error': 'not_found'}), 404
    todos = new_todos
    return jsonify({'success': True})`}</code>
      </div>

      <h3>Пояснение для тебя</h3>
      <ul>
        <li>Мы создаём новый список без удалённого элемента — так проще и безопаснее для урока.</li>
        <li>Если длина списка не изменилась — задача не найдена, вернём 404.</li>
      </ul>

      <h3>Тест</h3>
      <pre>{`curl -X DELETE http://localhost:5001/api/todos/1`}</pre>

      <div className="success-box">
        <strong>✅ После этого:</strong> задача больше не должна появляться в GET /api/todos.
      </div>
    </div>
  )
}

export default L2Step7

