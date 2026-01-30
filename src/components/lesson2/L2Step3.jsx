function L2Step3() {
  return (
    <div className="step-content trainer-step">
      <h2>Шаг 3: Страница и простой JavaScript</h2>

      <h3>1) HTML — сделай так</h3>
      <div className="code-block">
        <code>{`<!-- templates/index.html -->
<input id="newText" placeholder="Что нужно сделать?" />
<button id="addBtn">Добавить</button>
<ul id="todosList"></ul>`}</code>
      </div>
      <p>Скопируй этот HTML — это поле ввода, кнопка и пустой список.</p>

      <h3>2) JavaScript — загрузи и покажи список</h3>
      <div className="code-block">
        <code>{`// static/app.js
async function loadTodos() {
  const res = await fetch('/api/todos')
  const data = await res.json()
  const ul = document.getElementById('todosList')
  ul.innerHTML = ''
  data.todos.forEach(t => {
    const li = document.createElement('li')
    li.textContent = t.text + (t.done ? ' ✅' : '')
    ul.appendChild(li)
  })
}
document.addEventListener('DOMContentLoaded', loadTodos)`}</code>
      </div>
      <p>Пояснение: fetch берёт список у сервера и рисует элементы в списке.</p>

      <h3>3) Добавление задачи</h3>
      <div className="code-block">
        <code>{`document.getElementById('addBtn').addEventListener('click', async () => {
  const text = document.getElementById('newText').value
  await fetch('/api/todos', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({ text }) })
  loadTodos()
})`}</code>
      </div>
      <p>Нажми кнопку — текст отправится на сервер, затем список обновится.</p>

      <div className="info-box">
        <strong>Совет:</strong> сначала убедись, что кнопка «Добавить» работает, потом добавим «Готово» и «Удалить» рядом с каждой задачей.
      </div>

      <div className="success-box">
        <strong>✅ Готово.</strong> Если всё работает — переходи к следующему шагу.
      </div>
    </div>
  )
}

export default L2Step3
