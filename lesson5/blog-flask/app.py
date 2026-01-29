# Урок 5: Простой блог
# CRUD постов, SQLite, формы, валидация, redirect

import sqlite3
from pathlib import Path
from flask import Flask, render_template, request, redirect, url_for, flash

app = Flask(__name__)
app.config['DEBUG'] = True
app.config['SECRET_KEY'] = 'lesson5-secret'

DB_PATH = Path(__file__).parent / 'blog.db'


def get_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def init_db():
    with get_db() as conn:
        conn.execute('''
            CREATE TABLE IF NOT EXISTS posts (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT NOT NULL,
                body TEXT NOT NULL,
                created_at TEXT DEFAULT (datetime('now'))
            )
        ''')
        conn.commit()


def validate_post(title, body):
    err = []
    t = (title or '').strip()
    b = (body or '').strip()
    if not t:
        err.append('Введите заголовок.')
    elif len(t) > 200:
        err.append('Заголовок не длиннее 200 символов.')
    if not b:
        err.append('Введите текст поста.')
    elif len(b) > 5000:
        err.append('Текст не длиннее 5000 символов.')
    return t, b, err


@app.route('/')
def index():
    with get_db() as conn:
        rows = conn.execute(
            'SELECT id, title, body, created_at FROM posts ORDER BY id DESC'
        ).fetchall()
    posts = [dict(r) for r in rows]
    return render_template('index.html', posts=posts)


@app.route('/post/<int:post_id>')
def view_post(post_id):
    with get_db() as conn:
        row = conn.execute(
            'SELECT id, title, body, created_at FROM posts WHERE id = ?',
            (post_id,)
        ).fetchone()
    if not row:
        flash('Пост не найден.')
        return redirect(url_for('index'))
    return render_template('view.html', post=dict(row))


@app.route('/new', methods=['GET', 'POST'])
def new_post():
    if request.method == 'GET':
        return render_template('form.html', post=None)
    title = request.form.get('title', '')
    body = request.form.get('body', '')
    t, b, err = validate_post(title, body)
    if err:
        for e in err:
            flash(e)
        return render_template('form.html', post={'title': title, 'body': body})
    with get_db() as conn:
        cur = conn.execute('INSERT INTO posts (title, body) VALUES (?, ?)', (t, b))
        conn.commit()
        pid = cur.lastrowid
    flash('Пост создан.')
    return redirect(url_for('view_post', post_id=pid))


@app.route('/post/<int:post_id>/edit', methods=['GET', 'POST'])
def edit_post(post_id):
    with get_db() as conn:
        row = conn.execute(
            'SELECT id, title, body, created_at FROM posts WHERE id = ?',
            (post_id,)
        ).fetchone()
    if not row:
        flash('Пост не найден.')
        return redirect(url_for('index'))
    post = dict(row)
    if request.method == 'GET':
        return render_template('form.html', post=post)
    title = request.form.get('title', '')
    body = request.form.get('body', '')
    t, b, err = validate_post(title, body)
    if err:
        for e in err:
            flash(e)
        return render_template('form.html', post={'id': post_id, 'title': title, 'body': body})
    with get_db() as conn:
        conn.execute('UPDATE posts SET title = ?, body = ? WHERE id = ?', (t, b, post_id))
        conn.commit()
    flash('Пост обновлён.')
    return redirect(url_for('view_post', post_id=post_id))


@app.route('/post/<int:post_id>/delete', methods=['POST'])
def delete_post(post_id):
    with get_db() as conn:
        conn.execute('DELETE FROM posts WHERE id = ?', (post_id,))
        conn.commit()
    flash('Пост удалён.')
    return redirect(url_for('index'))


if __name__ == '__main__':
    init_db()
    app.run(host='0.0.0.0', port=5004, debug=True)
