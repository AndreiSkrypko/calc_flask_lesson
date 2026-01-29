function L3Step1() {
  return (
    <div className="step-content trainer-step">
      <h2>Шаг 1: SQLite и таблица</h2>

      <p>SQLite встроен в Python. Подключаемся к файлу <code>guestbook.db</code> в папке проекта.</p>

      <div className="info-box trainer-definition">
        <strong>Создание таблицы при старте:</strong>
        <div className="code-block" style={{ marginTop: 10 }}>
          <code>{`CREATE TABLE IF NOT EXISTS entries (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    author TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TEXT DEFAULT (datetime('now'))
)`}</code>
        </div>
      </div>

      <h3>Что сделать</h3>
      <ol>
        <li>Импортируй <code>sqlite3</code> и определи путь к <code>guestbook.db</code>.</li>
        <li>Функция <code>get_db()</code> — открывает соединение, возвращает <code>conn</code>. Можно использовать <code>conn.row_factory = sqlite3.Row</code>, чтобы получать строки как словари.</li>
        <li>Функция <code>init_db()</code> — выполняет <code>CREATE TABLE IF NOT EXISTS ...</code>, вызывай её при запуске (<code>if __name__ == '__main__'</code>).</li>
      </ol>

      <div className="success-box">
        <strong>✅ Готово.</strong> Дальше — маршруты и API.
      </div>
    </div>
  )
}

export default L3Step1
