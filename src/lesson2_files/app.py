# Урок 2: Список дел (To-Do) — копия для фронтенда (референс)
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

todos = []
next_id = 1


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/api/todos', methods=['GET'])
def get_todos():
    return jsonify({'todos': todos})


@app.route('/api/todos', methods=['POST'])
def add_todo():
    global next_id
    data = request.json or {}
    text = (data.get('text') or '').strip()
    if not text:
        return jsonify({'success': False, 'error': 'Введите текст дела!'}), 400
    todo = {'id': next_id, 'text': text, 'done': False}
    next_id += 1
    todos.append(todo)
    return jsonify({'success': True, 'todo': todo})


@app.route('/api/todos/<int:todo_id>/toggle', methods=['POST'])
def toggle_todo(todo_id):
    for t in todos:
        if t['id'] == todo_id:
            t['done'] = not t['done']
            return jsonify({'success': True, 'todo': t})
    return jsonify({'success': False, 'error': 'Дело не найдено'}), 404


@app.route('/api/todos/<int:todo_id>', methods=['DELETE'])
def delete_todo(todo_id):
    global todos
    for i, t in enumerate(todos):
        if t['id'] == todo_id:
            todos.pop(i)
            return jsonify({'success': True})
    return jsonify({'success': False, 'error': 'Дело не найдено'}), 404


if __name__ == '__main__':
    app.run(port=5001, debug=True)

