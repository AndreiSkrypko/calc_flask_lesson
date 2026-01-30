function L2Step1() {
  return (
    <div className="step-content trainer-step">
      <h2>Шаг 1: Подготовка и первый маршрут</h2>

      <h3>Что ты сделаешь</h3>
      <ol>
        <li>Создашь папку проекта и виртуальное окружение (venv).</li>
        <li>Установишь Flask командой <code>pip install flask</code>.</li>
        <li>Создадим файл <code>app.py</code> и запустим сервер.</li>
      </ol>

      <div className="info-box trainer-definition">
        <strong>Зачем это нужно</strong>
        <p>Сервер будет отдавать страницу и отвечать на запросы от браузера — без него страница не сможет общаться с кодом на Python.</p>
      </div>

      <h3>Скопируй в <code>app.py</code> (минимум)</h3>
      <div className="code-block">
        <code>{`from flask import Flask, jsonify

app = Flask(__name__)

todos = []  # пока пустой список

@app.route('/api/todos')
def get_todos():
    return jsonify({'todos': todos})

if __name__ == '__main__':
    app.run(port=5001, debug=True)`}</code>
      </div>

      <p>Пояснение для тебя:</p>
      <ul>
        <li><code>Flask</code> — библиотека, которая запускает веб‑сервер.</li>
        <li><code>todos = []</code> — сюда будут добавляться твои задачи.</li>
        <li>Маршрут <code>/api/todos</code> возвращает список задач в формате JSON.</li>
      </ul>

      <div className="success-box">
        <strong>✅ Проверь сам:</strong> запусти <code>python app.py</code> и открой <code>http://localhost:5001/api/todos</code> — должен быть пустой список.
      </div>
    </div>
  )
}

export default L2Step1
