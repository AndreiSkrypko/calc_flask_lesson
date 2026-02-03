function L3Step9() {
  const appPy = [
    "# Урок 3: Гостевская книга — SQLite",
    "# Первое знакомство с базой данных: сохраняем записи и показываем их",
    "",
    "import sqlite3",
    "from pathlib import Path",
    "from flask import Flask, render_template, request, jsonify",
    "",
    "app = Flask(__name__)",
    "app.config['DEBUG'] = True",
    "",
    "DB_PATH = Path(__file__).parent / 'guestbook.db'",
    "",
    "",
    "def get_db():",
    "    conn = sqlite3.connect(DB_PATH)",
    "    conn.row_factory = sqlite3.Row",
    "    return conn",
    "",
    "",
    "def init_db():",
    "    with get_db() as conn:",
    "        conn.execute('''",
    "            CREATE TABLE IF NOT EXISTS entries (",
    "                id INTEGER PRIMARY KEY AUTOINCREMENT,",
    "                author TEXT NOT NULL,",
    "                message TEXT NOT NULL,",
    "                created_at TEXT DEFAULT (datetime('now'))",
    "            )",
    "        ''')",
    "        conn.commit()",
    "",
    "",
    "@app.route('/')",
    "def index():",
    "    return render_template('index.html')",
    "",
    "",
    "@app.route('/api/entries', methods=['GET'])",
    "def get_entries():",
    "    with get_db() as conn:",
    "        rows = conn.execute(",
    "            'SELECT id, author, message, created_at FROM entries ORDER BY id DESC'",
    "        ).fetchall()",
    "    entries = [dict(r) for r in rows]",
    "    return jsonify({'entries': entries})",
    "",
    "",
    "@app.route('/api/entries', methods=['POST'])",
    "def add_entry():",
    "    data = request.json or {}",
    "    author = (data.get('author') or '').strip()",
    "    message = (data.get('message') or '').strip()",
    "    if not author or not message:",
    "        return jsonify({'success': False, 'error': 'Введите имя и сообщение!'}), 400",
    "    with get_db() as conn:",
    "        cur = conn.execute(",
    "            'INSERT INTO entries (author, message) VALUES (?, ?)',",
    "            (author, message)",
    "        )",
    "        conn.commit()",
    "        row = conn.execute(",
    "            'SELECT id, author, message, created_at FROM entries WHERE id = ?',",
    "            (cur.lastrowid,)",
    "        ).fetchone()",
    "    return jsonify({'success': True, 'entry': dict(row)})",
    "",
    "",
    "if __name__ == '__main__':",
    "    init_db()",
    "    app.run(host='0.0.0.0', port=5002, debug=True)"
  ].join('\n')

  const indexHtml = [
    "<!DOCTYPE html>",
    "<html lang=\"ru\">",
    "<head>",
    "    <meta charset=\"UTF-8\">",
    "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
    "    <title>Гостевская книга — Урок 3</title>",
    "    <link rel=\"stylesheet\" href=\"{{ url_for('static', filename='style.css') }}\">",
    "</head>",
    "<body>",
    "    <div class=\"container\">",
    "        <h1>📖 Гостевская книга</h1>",
    "        <p class=\"subtitle\">Урок 3: SQLite — сохранение в базу данных</p>",
    "",
    "        <form class=\"add-form\" id=\"addForm\">",
    "            <input type=\"text\" id=\"author\" placeholder=\"Ваше имя\" maxlength=\"100\" required>",
    "            <textarea id=\"message\" placeholder=\"Ваше сообщение...\" rows=\"3\" maxlength=\"500\" required></textarea>",
    "            <button type=\"submit\">Отправить</button>",
    "        </form>",
    "",
    "        <div id=\"entries\" class=\"entries\"></div>",
    "    </div>",
    "",
    "    <script src=\"{{ url_for('static', filename='script.js') }}\"></script>",
    "</body>",
    "</html>"
  ].join('\n')

  const scriptJs = [
    "document.addEventListener('DOMContentLoaded', function() {",
    "    const form = document.getElementById('addForm');",
    "    const author = document.getElementById('author');",
    "    const message = document.getElementById('message');",
    "    const container = document.getElementById('entries');",
    "",
    "    function escapeHtml(s) {",
    "        const div = document.createElement('div');",
    "        div.textContent = s;",
    "        return div.innerHTML;",
    "    }",
    "",
    "    function formatTime(s) {",
    "        if (!s) return '';",
    "        return s.replace('T', ' ').slice(0, 19);",
    "    }",
    "",
    "    function renderEntry(e) {",
    "        const div = document.createElement('div');",
    "        div.className = 'entry';",
    "        div.innerHTML = `",
    "            <div class=\"author\">${escapeHtml(e.author)}</div>",
    "            <div class=\"message\">${escapeHtml(e.message)}</div>",
    "            <div class=\"time\">${formatTime(e.created_at)}</div>",
    "        `;",
    "        return div;",
    "    }",
    "",
    "    function load() {",
    "        fetch('/api/entries')",
    "            .then(r => r.json())",
    "            .then(data => {",
    "                container.innerHTML = '';",
    "                if (!data.entries.length) {",
    "                    container.innerHTML = '<p class=\"empty\">Пока нет записей. Оставьте первое!</p>';",
    "                    return;",
    "                }",
    "                data.entries.forEach(e => container.appendChild(renderEntry(e)));",
    "            });",
    "    }",
    "",
    "    form.addEventListener('submit', function(e) {",
    "        e.preventDefault();",
    "        const a = author.value.trim();",
    "        const m = message.value.trim();",
    "        if (!a || !m) return;",
    "        fetch('/api/entries', {",
    "            method: 'POST',",
    "            headers: { 'Content-Type': 'application/json' },",
    "            body: JSON.stringify({ author: a, message: m })",
    "        })",
    "            .then(r => r.json())",
    "            .then(data => {",
    "                if (data.success) {",
    "                    author.value = '';",
    "                    message.value = '';",
    "                    const el = container.querySelector('.empty');",
    "                    if (el) el.remove();",
    "                    container.insertBefore(renderEntry(data.entry), container.firstChild);",
    "                } else {",
    "                    alert(data.error || 'Ошибка');",
    "                }",
    "            });",
    "    });",
    "",
    "    load();",
    "});"
  ].join('\n')

  const styleCss = [
    "* { margin: 0; padding: 0; box-sizing: border-box; }",
    "",
    "body {",
    "    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;",
    "    background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);",
    "    min-height: 100vh;",
    "    padding: 40px 20px;",
    "}",
    "",
    ".container {",
    "    max-width: 600px;",
    "    margin: 0 auto;",
    "    background: white;",
    "    border-radius: 16px;",
    "    box-shadow: 0 10px 40px rgba(0,0,0,0.2);",
    "    padding: 32px;",
    "}",
    "",
    "h1 { color: #333; margin-bottom: 4px; font-size: 1.8em; }",
    ".subtitle { color: #666; font-size: 0.9em; margin-bottom: 24px; }",
    "",
    ".add-form {",
    "    display: flex;",
    "    flex-direction: column;",
    "    gap: 12px;",
    "    margin-bottom: 28px;",
    "}",
    ".add-form input, .add-form textarea {",
    "    padding: 12px 14px;",
    "    border: 2px solid #e0e0e0;",
    "    border-radius: 8px;",
    "    font-size: 16px;",
    "    font-family: inherit;",
    "}",
    ".add-form input:focus, .add-form textarea:focus {",
    "    outline: none;",
    "    border-color: #6a11cb;",
    "}",
    ".add-form button {",
    "    padding: 12px;",
    "    background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);",
    "    color: white;",
    "    border: none;",
    "    border-radius: 8px;",
    "    font-weight: 600;",
    "    cursor: pointer;",
    "}",
    "",
    ".entries { display: flex; flex-direction: column; gap: 12px; }",
    ".entry {",
    "    padding: 14px 16px;",
    "    background: #f8f9fa;",
    "    border-radius: 10px;",
    "    border-left: 4px solid #6a11cb;",
    "}",
    ".entry .author { font-weight: 600; color: #333; margin-bottom: 4px; }",
    ".entry .message { color: #555; line-height: 1.5; }",
    ".entry .time { font-size: 0.85em; color: #888; margin-top: 6px; }",
    "",
    ".empty { color: #999; text-align: center; padding: 24px; }"
  ].join('\n')

  const requirementsTxt = [
    "Flask==3.0.0",
    "Werkzeug==3.0.1"
  ].join('\n')

  return (
    <div className="step-content trainer-step">
      <h2>Готовые файлы — копируй и вставляй</h2>

      <p>Ниже — полный набор файлов, которые ты можешь создать в проекте. Просто создай структуру:</p>
      <ol>
        <li>Папка проекта <code>guestbook-flask</code></li>
        <li>Создай virtualenv и установи Flask: <code>pip install -r requirements.txt</code></li>
        <li>Создай файл <code>app.py</code></li>
        <li>Создай папки <code>templates</code> и <code>static</code></li>
        <li>Создай <code>templates/index.html</code>, <code>static/script.js</code>, <code>static/style.css</code></li>
        <li>Создай <code>requirements.txt</code></li>
      </ol>

      <h3>app.py</h3>
      <div className="code-block"><code>{appPy}</code></div>

      <h3>templates/index.html</h3>
      <div className="code-block"><code>{indexHtml}</code></div>

      <h3>static/script.js</h3>
      <div className="code-block"><code>{scriptJs}</code></div>

      <h3>static/style.css</h3>
      <div className="code-block"><code>{styleCss}</code></div>

      <h3>requirements.txt</h3>
      <div className="code-block"><code>{requirementsTxt}</code></div>

      <div className="success-box">
        <strong>✅ Совет:</strong> сначала скопируй все файлы, запусти сервер и проверь, потом проходи шаги урока, сравнивая свой код с этими примерами.
      </div>

      <div className="info-box" style={{marginTop: '20px'}}>
        <strong>📝 Структура проекта:</strong>
        <pre style={{margin: '10px 0', padding: '10px', background: '#f5f5f5', borderRadius: '4px'}}>{`guestbook-flask/
├── app.py
├── requirements.txt
├── guestbook.db          (создастся автоматически)
├── templates/
│   └── index.html
└── static/
    ├── script.js
    └── style.css`}</pre>
      </div>
    </div>
  )
}

export default L3Step9
