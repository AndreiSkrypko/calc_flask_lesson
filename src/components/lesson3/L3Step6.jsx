function L3Step6() {
  return (
    <div className="step-content trainer-step">
      <h2>Шаг 6: JavaScript — загрузка и отображение записей</h2>

      <div className="info-box trainer-definition">
        <strong>💡 Зачем нужен JavaScript для загрузки записей?</strong>
        <p style={{marginTop: '10px'}}>
          Когда пользователь открывает страницу гостевой книги, нужно показать все существующие записи. 
          JavaScript отправляет GET запрос на сервер, получает список записей и отображает их на странице.
        </p>
        <p style={{marginTop: '10px'}}>
          Это происходит автоматически при загрузке страницы — пользователь сразу видит все записи!
        </p>
      </div>

      <h3>Код для загрузки записей (часть 1)</h3>
      <div className="code-block">
        <code>{`// static/script.js
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('addForm');
    const author = document.getElementById('author');
    const message = document.getElementById('message');
    const container = document.getElementById('entries');

    // Функция для экранирования HTML (защита от XSS)
    function escapeHtml(s) {
        const div = document.createElement('div');
        div.textContent = s;
        return div.innerHTML;
    }

    // Функция для форматирования даты
    function formatTime(s) {
        if (!s) return '';
        return s.replace('T', ' ').slice(0, 19);
    }

    // Функция для создания HTML элемента записи
    function renderEntry(e) {
        const div = document.createElement('div');
        div.className = 'entry';
        div.innerHTML = 
            '<div class="author">' + escapeHtml(e.author) + '</div>' +
            '<div class="message">' + escapeHtml(e.message) + '</div>' +
            '<div class="time">' + formatTime(e.created_at) + '</div>';
        return div;
    }

    // Функция для загрузки всех записей
    function load() {
        fetch('/api/entries')
            .then(r => r.json())
            .then(data => {
                container.innerHTML = '';
                if (!data.entries.length) {
                    container.innerHTML = '<p class="empty">Пока нет записей. Оставьте первое!</p>';
                    return;
                }
                data.entries.forEach(e => container.appendChild(renderEntry(e)));
            });
    }

    // Загружаем записи при загрузке страницы
    load();
});`}</code>
      </div>

      <h3>🔍 Разберём код по строчкам:</h3>
      <ul>
        <li><code>document.addEventListener('DOMContentLoaded', ...)</code> — ждём, пока HTML полностью загрузится. 
          Только после этого начинаем работать с элементами страницы.</li>
        <li><code>const form = document.getElementById('addForm')</code> — находим форму на странице по её ID</li>
        <li><code>const author = document.getElementById('author')</code> — находим поле для имени</li>
        <li><code>const message = document.getElementById('message')</code> — находим поле для сообщения</li>
        <li><code>const container = document.getElementById('entries')</code> — находим контейнер, куда будем добавлять записи</li>
        <li><code>function escapeHtml(s)</code> — функция для защиты от XSS атак:
          <ul>
            <li>Создаём временный элемент <code>div</code></li>
            <li>Записываем текст в него через <code>textContent</code> (это автоматически экранирует опасные символы)</li>
            <li>Возвращаем безопасный HTML</li>
            <li>Например: <code>"&lt;script&gt;"</code> превратится в <code>"&amp;lt;script&amp;gt;"</code> и не выполнится как код!</li>
          </ul>
        </li>
        <li><code>function formatTime(s)</code> — функция для форматирования даты:
          <ul>
            <li>Заменяем <code>T</code> на пробел (дата приходит в формате <code>2026-02-03T15:30:45</code>)</li>
            <li>Берём первые 19 символов (дата и время без миллисекунд)</li>
            <li>Результат: <code>"2026-02-03 15:30:45"</code></li>
          </ul>
        </li>
        <li><code>function renderEntry(e)</code> — функция для создания HTML элемента одной записи:
          <ul>
            <li><code>document.createElement('div')</code> — создаём новый элемент <code>div</code></li>
            <li><code>div.className = 'entry'</code> — добавляем класс для стилизации</li>
            <li><code>div.innerHTML = ...</code> — заполняем HTML содержимым. Используем конкатенацию строк для безопасности</li>
            <li><code>escapeHtml(e.author)</code> — вызываем функцию для экранирования имени автора</li>
            <li><code>escapeHtml(e.message)</code> — вызываем функцию для экранирования сообщения</li>
            <li><code>formatTime(e.created_at)</code> — вызываем функцию для форматирования даты</li>
            <li><code>return div</code> — возвращаем готовый элемент</li>
          </ul>
        </li>
        <li><code>function load()</code> — функция для загрузки всех записей:
          <ul>
            <li><code>fetch('/api/entries')</code> — отправляем GET запрос на сервер</li>
            <li><code>.then(r => r.json())</code> — превращаем ответ в объект JavaScript</li>
            <li><code>.then(data => ...)</code> — обрабатываем данные:
              <ul>
                <li><code>container.innerHTML = ''</code> — очищаем контейнер</li>
                <li><code>if (!data.entries.length)</code> — если записей нет, показываем сообщение "Пока нет записей"</li>
                <li><code>data.entries.forEach(e => ...)</code> — для каждой записи создаём элемент и добавляем в контейнер</li>
                <li><code>container.appendChild(renderEntry(e))</code> — добавляем элемент записи в контейнер</li>
              </ul>
            </li>
          </ul>
        </li>
        <li><code>load()</code> — вызываем функцию загрузки сразу при загрузке страницы</li>
      </ul>

      <div className="info-box" style={{marginTop: '20px'}}>
        <strong>💡 Что такое XSS атака?</strong>
        <p style={{marginTop: '10px'}}>
          <strong>XSS</strong> (Cross-Site Scripting) — это когда злоумышленник вставляет вредоносный JavaScript код в сообщение. 
          Если мы просто вставим текст в HTML без экранирования, код может выполниться!
        </p>
        <p style={{marginTop: '10px'}}>
          <strong>Пример опасного кода:</strong>
        </p>
        <pre style={{margin: '10px 0', padding: '10px', background: '#ffebee', borderRadius: '4px'}}>{`// Если пользователь введёт:
<script>alert('Взлом!')</script>

// И мы вставим это напрямую в HTML:
div.innerHTML = userMessage;  // ОПАСНО! Код выполнится!

// Правильно (с экранированием):
div.innerHTML = escapeHtml(userMessage);  // Безопасно!`}</pre>
      </div>

      <div className="info-box" style={{marginTop: '20px'}}>
        <strong>🎯 Как это работает:</strong>
        <ol style={{marginTop: '10px'}}>
          <li>Страница загружается в браузере</li>
          <li>JavaScript ждёт полной загрузки HTML (<code>DOMContentLoaded</code>)</li>
          <li>Вызывается функция <code>load()</code></li>
          <li>Отправляется GET запрос на <code>/api/entries</code></li>
          <li>Сервер возвращает список всех записей</li>
          <li>JavaScript получает данные и для каждой записи создаёт HTML элемент</li>
          <li>Элементы добавляются в контейнер на странице</li>
          <li>Пользователь видит все записи!</li>
        </ol>
      </div>

      <div className="success-box">
        <strong>✅ Проверь:</strong> 
        <ol style={{marginTop: '10px'}}>
          <li>Создай папку <code>static</code> в папке проекта</li>
          <li>Создай файл <code>static/script.js</code> с кодом выше (пока только функцию <code>load()</code>)</li>
          <li>Запусти сервер и открой страницу</li>
          <li>Если в базе данных есть записи — они должны отобразиться!</li>
          <li>Если записей нет — должно быть сообщение "Пока нет записей"</li>
        </ol>
        <p style={{marginTop: '10px'}}>
          В следующем шаге мы добавим код для отправки формы, чтобы можно было добавлять новые записи!
        </p>
      </div>
    </div>
  )
}

export default L3Step6
