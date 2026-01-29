# Урок 3: Гостевская книга — SQLite
# Первое знакомство с базой данных: сохраняем записи и показываем их

import sqlite3
from pathlib import Path
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)
app.config['DEBUG'] = True

DB_PATH = Path(__file__).parent / 'guestbook.db'


def get_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def init_db():
    with get_db() as conn:
        conn.execute('''
            CREATE TABLE IF NOT EXISTS entries (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                author TEXT NOT NULL,
                message TEXT NOT NULL,
                created_at TEXT DEFAULT (datetime('now'))
            )
        ''')
        conn.commit()


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/api/entries', methods=['GET'])
def get_entries():
    with get_db() as conn:
        rows = conn.execute(
            'SELECT id, author, message, created_at FROM entries ORDER BY id DESC'
        ).fetchall()
    entries = [dict(r) for r in rows]
    return jsonify({'entries': entries})


@app.route('/api/entries', methods=['POST'])
def add_entry():
    data = request.json or {}
    author = (data.get('author') or '').strip()
    message = (data.get('message') or '').strip()
    if not author or not message:
        return jsonify({'success': False, 'error': 'Введите имя и сообщение!'}), 400
    with get_db() as conn:
        cur = conn.execute(
            'INSERT INTO entries (author, message) VALUES (?, ?)',
            (author, message)
        )
        conn.commit()
        row = conn.execute(
            'SELECT id, author, message, created_at FROM entries WHERE id = ?',
            (cur.lastrowid,)
        ).fetchone()
    return jsonify({'success': True, 'entry': dict(row)})


if __name__ == '__main__':
    init_db()
    app.run(host='0.0.0.0', port=5002, debug=True)
