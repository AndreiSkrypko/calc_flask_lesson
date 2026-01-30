function L2Step6() {
  return (
    <div className="step-content trainer-step">
      <h2>Шаг 6: Реализация toggle — пометить как выполнено</h2>

      <p>Добавим маршрут, который переключает поле <code>done</code> у задачи.</p>

      <div className="code-block">
        <code>{`@app.route('/api/todos/<int:id>/toggle', methods=['POST'])
def toggle_todo(id):
    # Итерируем по списку и ищем задачу с нужным id
    for t in todos:
        if t['id'] == id:
            t['done'] = not t['done']  # меняем True <-> False
            return jsonify({'success': True, 'todo': t})
    # Если не нашли — возвращаем 404
    return jsonify({'success': False, 'error': 'not_found'}), 404`}</code>
      </div>

      <h3>Пояснение для тебя</h3>
      <ul>
        <li>Маршрут принимает <code>id</code> в URL — так сервер понимает, какую задачу менять.</li>
        <li>Мы возвращаем изменённый объект, чтобы твой интерфейс мог сразу обновиться.</li>
        <li>Если задача не найдена — возвращаем код 404 (это значит «не найдено»).</li>
      </ul>

      <h3>Короткий тест</h3>
      <pre>{`curl -X POST http://localhost:5001/api/todos/1/toggle`}</pre>

      <div className="success-box">
        <strong>✅ После применения:</strong> при GET /api/todos у задачи изменится поле <code>done</code>.
      </div>
    </div>
  )
}

export default L2Step6

