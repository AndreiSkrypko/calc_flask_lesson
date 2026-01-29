function L5Step1() {
  return (
    <div className="step-content trainer-step">
      <h2>Шаг 1: БД и CRUD</h2>

      <p>Таблица <code>posts</code>: <code>id</code>, <code>title</code>, <code>body</code>, <code>created_at</code>. Инициализация при старте — как в уроке 3.</p>

      <div className="info-box trainer-definition">
        <strong>Маршруты:</strong>
        <ul>
          <li><code>GET /</code> — список постов, <code>render_template('index.html', posts=...)</code></li>
          <li><code>GET /post/&lt;id&gt;</code> — один пост, <code>view.html</code></li>
          <li><code>GET /new</code> — форма нового поста; <code>POST /new</code> — создание</li>
          <li><code>GET /post/&lt;id&gt;/edit</code> — форма редактирования; <code>POST</code> — сохранение</li>
          <li><code>POST /post/&lt;id&gt;/delete</code> — удаление, затем <code>redirect(url_for('index'))</code></li>
        </ul>
      </div>

      <p>Валидация: заголовок и текст не пустые, ограничение длины (например, 200 и 5000 символов). При ошибке — <code>flash</code> и снова форма.</p>

      <div className="success-box">
        <strong>✅ Готово.</strong> Дальше — формы и валидация в коде.
      </div>
    </div>
  )
}

export default L5Step1
