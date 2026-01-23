import { useState } from 'react'

function Step4() {
  const [copied, setCopied] = useState(false)
  
  const code = `# Импортируем Flask
from flask import Flask, render_template, request, jsonify

# Создаем экземпляр Flask приложения
app = Flask(__name__)

# Настройка для отладки
app.config['DEBUG'] = True

# Главная страница
@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

# Маршрут для вычислений
@app.route('/calculate', methods=['POST'])
def calculate():
    try:
        # Получаем данные из запроса
        data = request.json
        num1 = float(data.get('num1', 0))
        num2 = float(data.get('num2', 0))
        operation = data.get('operation', '+')
        
        # Выполняем операцию
        if operation == '+':
            result = num1 + num2
        elif operation == '-':
            result = num1 - num2
        elif operation == '*':
            result = num1 * num2
        elif operation == '/':
            if num2 == 0:
                return jsonify({
                    'success': False,
                    'error': 'Деление на ноль невозможно!'
                }), 400
            result = num1 / num2
        else:
            return jsonify({
                'success': False,
                'error': 'Неизвестная операция!'
            }), 400
        
        # Возвращаем результат
        return jsonify({
            'success': True,
            'result': result
        })
    
    except ValueError:
        return jsonify({
            'success': False,
            'error': 'Пожалуйста, введите корректные числа!'
        }), 400
    
    except Exception as e:
        return jsonify({
            'success': False,
            'error': f'Произошла ошибка: {str(e)}'
        }), 500

# Запуск сервера
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)`

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="step-content">
      <h2>Шаг 4: Создание файла app.py</h2>
      
      <p>
        Файл <code>app.py</code> - это главный файл нашего Flask приложения. 
        В нем мы создадим сервер и определим маршруты (routes) для нашего калькулятора.
      </p>

      <div className="info-box">
        <strong>📝 Что такое "New → Python File"?</strong>
        <p>Это пункт меню в PyCharm для создания нового Python файла. "→" означает подменю - сначала выбираете "New", затем "Python File".</p>
        <p><strong>Где найти:</strong> Правой кнопкой мыши на папку проекта → появится меню → наведите на "New" → выберите "Python File"</p>
        <p><strong>💡 Не знаете, как что-то сделать в PyCharm?</strong> Откройте файл <code>PYCHARM_GUIDE.md</code> в корне проекта - там подробные инструкции по всем действиям!</p>
      </div>

      <h3>Что нужно сделать:</h3>
      
      <ol>
        <li>
          <strong>Создайте новый файл</strong>
          <p>В PyCharm есть несколько способов создать файл:</p>
          <div className="info-box">
            <strong>Способ 1 (через контекстное меню):</strong>
            <ol>
              <li>В левой панели PyCharm найдите папку вашего проекта (она называется так же, как ваш проект)</li>
              <li>Нажмите на неё <strong>правой кнопкой мыши</strong> (или кликните правой кнопкой мыши в пустом месте рядом с файлами)</li>
              <li>В появившемся меню наведите курсор на пункт <span className="highlight">New</span></li>
              <li>В подменю выберите <span className="highlight">Python File</span></li>
              <li>В появившемся окне введите имя файла: <code>app</code> (без расширения .py - PyCharm добавит его сам)</li>
              <li>Нажмите <strong>Enter</strong> или кнопку <strong>OK</strong></li>
            </ol>
          </div>
          <div className="info-box">
            <strong>Способ 2 (через меню):</strong>
            <ol>
              <li>В верхнем меню PyCharm выберите <span className="highlight">File</span></li>
              <li>Выберите <span className="highlight">New</span></li>
              <li>Выберите <span className="highlight">Python File</span></li>
              <li>Введите имя: <code>app</code></li>
              <li>Нажмите <strong>Enter</strong></li>
            </ol>
          </div>
          <div className="info-box">
            <strong>Способ 3 (горячие клавиши):</strong>
            <ol>
              <li>Нажмите <span className="highlight">Alt + Insert</span> (или <span className="highlight">Ctrl + Alt + Insert</span>)</li>
              <li>Выберите <span className="highlight">Python File</span></li>
              <li>Введите имя: <code>app</code></li>
              <li>Нажмите <strong>Enter</strong></li>
            </ol>
          </div>
          <p><strong>Результат:</strong> В папке проекта появится новый файл <code>app.py</code></p>
        </li>
        
        <li>
          <strong>Напишите код для Flask приложения</strong>
          <p>Файл <code>app.py</code> должен автоматически открыться в редакторе PyCharm. Если нет - дважды кликните на него в левой панели.</p>
          <p>Теперь нужно вставить код. Есть два способа:</p>
          <div className="info-box">
            <strong>Способ 1 (копирование):</strong>
            <ol>
              <li>Выделите весь код ниже (от первой строки до последней)</li>
              <li>Нажмите <span className="highlight">Ctrl + C</span> (или правой кнопкой мыши → Copy)</li>
              <li>В PyCharm кликните в пустое место редактора</li>
              <li>Нажмите <span className="highlight">Ctrl + V</span> (или правой кнопкой мыши → Paste)</li>
            </ol>
          </div>
          <div className="info-box">
            <strong>Способ 2 (написание вручную):</strong>
            <p>Можете набирать код вручную - это поможет лучше запомнить синтаксис!</p>
          </div>
          <p><strong>Вставьте следующий код в файл app.py:</strong></p>
          <div style={{ position: 'relative' }}>
            <button 
              onClick={copyToClipboard}
              className="copy-button"
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                padding: '8px 15px',
                background: copied ? '#4caf50' : '#667eea',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '12px',
                fontWeight: '600',
                zIndex: 10,
                transition: 'all 0.3s'
              }}
            >
              {copied ? '✓ Скопировано!' : '📋 Копировать код'}
            </button>
            <div className="code-block">
              <code>{code}</code>
            </div>
          </div>
        </li>
        
        <li>
          <strong>Сохраните файл</strong>
          <p>После вставки кода нужно сохранить файл. Есть несколько способов:</p>
          <div className="info-box">
            <strong>Способ 1 (горячие клавиши - самый быстрый):</strong>
            <p>Нажмите <span className="highlight">Ctrl + S</span></p>
            <p>В правом верхнем углу файла должна исчезнуть звёздочка (*), которая означает, что файл не сохранён</p>
          </div>
          <div className="info-box">
            <strong>Способ 2 (через меню):</strong>
            <ol>
              <li>В верхнем меню PyCharm выберите <span className="highlight">File</span></li>
              <li>Выберите <span className="highlight">Save</span> или <span className="highlight">Save All</span></li>
            </ol>
          </div>
          <div className="info-box">
            <strong>Способ 3 (автосохранение):</strong>
            <p>PyCharm может автоматически сохранять файлы при потере фокуса. Проверьте настройки:</p>
            <p><span className="highlight">File → Settings → Appearance & Behavior → System Settings</span></p>
            <p>Установите галочку <span className="highlight">Save files on frame deactivation</span></p>
          </div>
          <p><strong>Как проверить, что файл сохранён:</strong> В правом верхнем углу вкладки файла не должно быть звёздочки (*)</p>
        </li>
      </ol>

      <div className="info-box">
        <strong>💡 Объяснение кода:</strong>
        <ul>
          <li><code>from flask import ...</code> - импортируем необходимые функции Flask</li>
          <li><code>app = Flask(__name__)</code> - создаем приложение Flask</li>
          <li><code>@app.route('/')</code> - определяем маршрут для главной страницы</li>
          <li><code>@app.route('/calculate')</code> - маршрут для вычислений</li>
          <li><code>render_template()</code> - отображает HTML шаблон</li>
          <li><code>jsonify()</code> - возвращает данные в формате JSON</li>
        </ul>
      </div>

      <div className="warning">
        <strong>⚠️ Важно:</strong> Пока не запускайте приложение! 
        Сначала нужно создать HTML шаблон и другие файлы.
      </div>

      <div className="success-box">
        <strong>✅ Готово!</strong> Файл app.py создан. Теперь создадим HTML шаблон.
      </div>
    </div>
  )
}

export default Step4
