function L5Intro() {
  return (
    <div className="step-content trainer-step">
      <h2>📝 Урок 5: Простой блог</h2>

      <div className="info-box trainer-definition">
        <p>
          <strong>Блог</strong> — посты с заголовком и текстом. Можно создавать, просматривать, редактировать и удалять записи.
          Храним в <strong>SQLite</strong>, используем <strong>формы</strong>, <strong>валидацию</strong>, <strong>redirect</strong> и <strong>flash</strong>.
        </p>
      </div>

      <h3>🆕 Что нового</h3>
      <ul>
        <li>CRUD: создание, просмотр, редактирование, удаление постов.</li>
        <li>Формы через <code>request.form</code>, валидация (не пусто, длина).</li>
        <li>После успешного действия — <code>redirect</code> на страницу поста или список.</li>
        <li><code>flash</code> — сообщения об успехе или ошибке, вывод через <code>get_flashed_messages()</code> в шаблоне.</li>
      </ul>

      <div className="success-box trainer-examples">
        <strong>Что сделаем:</strong>
        <ul>
          <li>Таблица <code>posts</code>: <code>id</code>, <code>title</code>, <code>body</code>, <code>created_at</code></li>
          <li>Список постов, страница поста, форма создания/редактирования, удаление (POST)</li>
        </ul>
      </div>

      <p>Эталон: <code>lesson5/blog-flask</code>. Порт <code>5004</code>.</p>

      <div className="success-box">
        <strong>✅ Дальше</strong> — БД, CRUD, формы и шаблоны.
      </div>
    </div>
  )
}

export default L5Intro
