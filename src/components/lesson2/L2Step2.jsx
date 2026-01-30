function L2Step2() {
  const addTodoCode = [
    'next_id = 1',
    '',
    '@app.route(\'/api/todos\', methods=[\'POST\'])',
    'def add_todo():',
    '    global next_id',
    '    data = request.json',
    '    text = data.get(\'text\', \'\').strip()',
    '    if not text:',
    '        return jsonify({\'success\': False, \'error\': \'empty\'}), 400',
    '    todo = {\'id\': next_id, \'text\': text, \'done\': False}',
    '    todos.append(todo)',
    '    next_id += 1',
    '    return jsonify({\'success\': True, \'todo\': todo})'
  ].join('\n')

  const toggleDeleteCode = [
    '@app.route(\'/api/todos/<int:id>/toggle\', methods=[\'POST\'])',
    'def toggle_todo(id):',
    '    for t in todos:',
    '        if t[\'id\'] == id:',
    '            t[\'done\'] = not t[\'done\']',
    '            return jsonify({\'success\': True, \'todo\': t})',
    '    return jsonify({\'success\': False}), 404',
    '',
    '@app.route(\'/api/todos/<int:id>\', methods=[\'DELETE\'])',
    'def delete_todo(id):',
    '    global todos',
    '    todos = [t for t in todos if t[\'id\'] != id]',
    '    return jsonify({\'success\': True})'
  ].join('\n')

  return (
    <div className="step-content trainer-step">
      <h2>Шаг 2: Данные и простые API</h2>

      <p>Теперь добавим структуру для задач. Каждая задача — это маленький словарик с тремя полями:</p>

      <div className="info-box trainer-definition">
        <strong>Структура дела:</strong>
        <pre style={{ margin: 0 }}>{'{ "id": 1, "text": "Купить молоко", "done": false }'}</pre>
      </div>

      <h3>Код: сохранение и добавление — вставь в <code>app.py</code></h3>
      <div className="code-block">
        <code>{addTodoCode}</code>
      </div>

      <p>Пояснение простыми словами:</p>
      <ul>
        <li><code>next_id</code> — счётчик, чтобы у каждой задачи был свой номер.</li>
        <li>Мы читаем JSON из запроса и добавляем новый словарик в список <code>todos</code>.</li>
      </ul>

      <h3>Toggle и удаление — код для <code>app.py</code></h3>
      <div className="code-block">
        <code>{toggleDeleteCode}</code>
      </div>

      <div className="success-box">
        <strong>✅ Проверь:</strong> попробуй добавить задачу через curl или Postman и посмотри, что возвращает GET /api/todos.
      </div>
    </div>
  )
}

export default L2Step2
