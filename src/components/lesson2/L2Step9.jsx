function L2Step9() {
  const code = [
    '// static/app.js (расширенный)',
    'async function api(path, options = {}) {',
    "  const res = await fetch(path, {",
    "    headers: { 'Content-Type': 'application/json' },",
    '    ...options',
    '  })',
    '  // Проверяем код ответа',
    '  if (!res.ok) {',
    "    const err = await res.json().catch(() => ({}))",
    '    throw err',
    '  }',
    '  return await res.json()',
    '}',
    '',
    'async function loadTodos() {',
    "  const data = await api('/api/todos')",
    "  const ul = document.getElementById('todosList')",
    "  ul.innerHTML = ''",
    '  data.todos.forEach(t => {',
    "    const li = document.createElement('li')",
    "    li.textContent = t.text",
    '    // Кнопки рядом с каждой задачей',
    "    const doneBtn = document.createElement('button')",
    "    doneBtn.textContent = t.done ? 'Отменить' : 'Готово'",
    "    doneBtn.onclick = async () => { await api(`/api/todos/${t.id}/toggle`, { method: 'POST' }); loadTodos() }",
    "    const delBtn = document.createElement('button')",
    "    delBtn.textContent = 'Удалить'",
    "    delBtn.onclick = async () => { await api(`/api/todos/${t.id}`, { method: 'DELETE' }); loadTodos() }",
    '    li.appendChild(doneBtn)',
    '    li.appendChild(delBtn)',
    "    if (t.done) li.style.textDecoration = 'line-through'",
    '    ul.appendChild(li)',
    '  })',
    '}',
    '',
    "document.getElementById('addBtn').addEventListener('click', async () => {",
    "  const text = document.getElementById('newText').value",
    "  await api('/api/todos', { method: 'POST', body: JSON.stringify({ text }) })",
    "  document.getElementById('newText').value = ''",
    '  loadTodos()',
    '})',
    '',
    "document.addEventListener('DOMContentLoaded', loadTodos)"
  ].join('\n')

  return (
    <div className="step-content trainer-step">
      <h2>Шаг 9: Подробно про JavaScript — POST, DELETE, toggle</h2>

      <p>Разберём код клиента, чтобы ты понял, как отправлять запросы и обрабатывать ответы.</p>

      <div className="code-block">
        <code>{code}</code>
      </div>

      <h3>Объяснение для тебя</h3>
      <ul>
        <li>Функция <code>api</code> централизует <code>fetch</code>: она добавляет заголовок и обрабатывает ошибки — тебе не придётся дублировать логику.</li>
        <li>После каждой операции мы вызываем <code>loadTodos()</code>, чтобы обновить список и синхронизировать интерфейс с сервером.</li>
        <li>Кнопки отправляют POST/DELETE запросы к тем маршрутам, которые ты реализовал в <code>app.py</code>.</li>
      </ul>

      <div className="success-box">
        <strong>✅ Проверь:</strong> добавь, отметь и удали задачу — интерфейс должен реагировать быстро и без перезагрузки страницы.
      </div>
    </div>
  )
}

export default L2Step9

