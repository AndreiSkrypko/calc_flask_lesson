function L3Intro() {
  return (
    <div className="step-content trainer-step">
      <h2>📖 Урок 3: Гостевская книга + SQLite</h2>

      <div className="info-box trainer-definition">
        <p>
          <strong>Гостевская книга</strong> — страница, где посетители оставляют имя и сообщение.
          Записи сохраняются в <strong>базу данных SQLite</strong> и не пропадают при перезапуске.
        </p>
      </div>

      <h3>🆕 Что нового</h3>
      <ul>
        <li><strong>SQLite</strong> — встроенная БД, хранится в файле <code>guestbook.db</code>.</li>
        <li>Таблица <code>entries</code>: <code>id</code>, <code>author</code>, <code>message</code>, <code>created_at</code>.</li>
        <li>Маршруты: <code>GET /api/entries</code>, <code>POST /api/entries</code>.</li>
      </ul>

      <div className="success-box trainer-examples">
        <strong>Что сделаем:</strong>
        <ul>
          <li>Форма: имя и сообщение</li>
          <li>Вывод всех записей под формой</li>
          <li>Создание таблицы при старте, INSERT при отправке, SELECT при загрузке</li>
        </ul>
      </div>

      <h3>📁 Эталонный проект</h3>
      <p><code>lesson3/guestbook-flask</code>. Запуск: <code>pip install -r requirements.txt</code> → <code>python app.py</code>. Браузер: <code>http://localhost:5002</code>.</p>

      <div className="success-box">
        <strong>✅ Дальше</strong> — по шагам создадим гостевую книгу.
      </div>
    </div>
  )
}

export default L3Intro
