function L3Step7() {
  return (
    <div className="step-content trainer-step">
      <h2>Шаг 7: JavaScript — отправка формы и добавление записи</h2>

      <div className="info-box trainer-definition">
        <strong>💡 Как работает отправка формы?</strong>
        <p style={{marginTop: '10px'}}>
          Когда пользователь заполняет форму (имя и сообщение) и нажимает кнопку "Отправить", 
          форма пытается отправиться обычным способом (это перезагрузит страницу). 
          Но мы "перехватываем" это событие и отправляем данные через JavaScript на наш API.
        </p>
        <p style={{marginTop: '10px'}}>
          После успешной отправки мы добавляем новую запись на страницу без перезагрузки — 
          это делает интерфейс быстрым и удобным!
        </p>
      </div>

      <h3>Код для отправки формы (добавь в script.js)</h3>
      <div className="code-block">
        <code>{`// Добавь в конец функции внутри DOMContentLoaded
form.addEventListener('submit', function(e) {
    // Предотвращаем обычную отправку формы (чтобы страница не перезагрузилась)
    e.preventDefault();
    
    // Получаем значения из полей формы
    const a = author.value.trim();
    const m = message.value.trim();
    
    // Проверка: если поля пустые, ничего не делаем
    if (!a || !m) return;
    
    // Отправляем POST запрос на сервер
    fetch('/api/entries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ author: a, message: m })
    })
    .then(r => r.json())
    .then(data => {
        if (data.success) {
            // Очищаем форму
            author.value = '';
            message.value = '';
            
            // Убираем сообщение "Пока нет записей", если оно есть
            const el = container.querySelector('.empty');
            if (el) el.remove();
            
            // Добавляем новую запись в начало списка
            container.insertBefore(renderEntry(data.entry), container.firstChild);
        } else {
            // Показываем ошибку, если что-то пошло не так
            alert(data.error || 'Ошибка');
        }
    });
});`}</code>
      </div>

      <h3>🔍 Разберём код по строчкам:</h3>
      <ul>
        <li><code>form.addEventListener('submit', ...)</code> — слушаем событие отправки формы. 
          Когда пользователь нажмёт кнопку "Отправить" или нажмёт Enter в поле формы, выполнится эта функция.</li>
        <li><code>e.preventDefault()</code> — отменяем стандартное поведение формы (перезагрузку страницы). 
          Без этого страница перезагрузится, и мы потеряем все данные!</li>
        <li><code>const a = author.value.trim()</code> — получаем значение из поля имени:
          <ul>
            <li><code>author.value</code> — текст, который ввёл пользователь</li>
            <li><code>.trim()</code> — убираем пробелы по краям (чтобы "  Иван  " стало "Иван")</li>
          </ul>
        </li>
        <li><code>const m = message.value.trim()</code> — то же самое для сообщения</li>
        <li><code>if (!a || !m) return</code> — если хотя бы одно поле пустое, выходим из функции. 
          Ничего не отправляем на сервер.</li>
        <li><code>fetch('/api/entries', ...)</code> — отправляем POST запрос на сервер:
          <ul>
            <li><code>method: 'POST'</code> — метод запроса (создание новой записи)</li>
            <li><code>{`headers: { 'Content-Type': 'application/json' }`}</code> - говорим серверу, 
              что отправляем данные в формате JSON</li>
            <li><code>{`body: JSON.stringify({ author: a, message: m })`}</code> - превращаем объект JavaScript в строку JSON и отправляем:
              <ul>
                <li><code>{`{ author: a, message: m }`}</code> - объект с данными формы</li>
                <li><code>JSON.stringify(...)</code> - превращает объект в строку JSON, например: <code>{'`{"author":"Иван","message":"Привет!"}`'}</code></li>
              </ul>
            </li>
          </ul>
        </li>
        <li><code>.then(r => r.json())</code> — превращаем ответ сервера в объект JavaScript</li>
        <li><code>.then(data => ...)</code> — обрабатываем ответ:
          <ul>
            <li><code>if (data.success)</code> — если сервер вернул успех:
              <ul>
                <li><code>author.value = ''</code> — очищаем поле имени</li>
                <li><code>message.value = ''</code> — очищаем поле сообщения</li>
                <li><code>container.querySelector('.empty')</code> — ищем сообщение "Пока нет записей"</li>
                <li><code>if (el) el.remove()</code> — если сообщение найдено, удаляем его (теперь есть записи!)</li>
                <li><code>container.insertBefore(renderEntry(data.entry), container.firstChild)</code> — добавляем новую запись в начало списка:
                  <ul>
                    <li><code>renderEntry(data.entry)</code> — создаём HTML элемент для новой записи</li>
                    <li><code>container.firstChild</code> — первый элемент в контейнере</li>
                    <li><code>insertBefore(..., firstChild)</code> — вставляем новую запись перед первым элементом (новые записи сверху!)</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><code>else</code> — если сервер вернул ошибку:
              <ul>
                <li><code>alert(data.error || 'Ошибка')</code> — показываем сообщение об ошибке пользователю</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>

      <div className="info-box" style={{marginTop: '20px'}}>
        <strong>💡 Что такое JSON.stringify?</strong>
        <p style={{marginTop: '10px'}}>
          <code>JSON.stringify</code> — это функция JavaScript, которая превращает объект в строку JSON. 
          Это нужно, потому что HTTP запросы отправляют только текст, а не объекты JavaScript.
        </p>
        <p style={{marginTop: '10px'}}>
          <strong>Пример:</strong>
        </p>
        <pre style={{margin: '10px 0', padding: '10px', background: '#f5f5f5', borderRadius: '4px'}}>{`// Объект JavaScript:
{ author: "Иван", message: "Привет!" }

// После JSON.stringify:
'{"author":"Иван","message":"Привет!"}'

// Сервер получает строку и превращает её обратно в объект`}</pre>
      </div>

      <h3>Полный код script.js (для справки)</h3>
      <div className="code-block">
        <code>{`document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('addForm');
    const author = document.getElementById('author');
    const message = document.getElementById('message');
    const container = document.getElementById('entries');

    function escapeHtml(s) {
        const div = document.createElement('div');
        div.textContent = s;
        return div.innerHTML;
    }

    function formatTime(s) {
        if (!s) return '';
        return s.replace('T', ' ').slice(0, 19);
    }

    function renderEntry(e) {
        const div = document.createElement('div');
        div.className = 'entry';
        div.innerHTML = \`
            <div class="author">\${escapeHtml(e.author)}</div>
            <div class="message">\${escapeHtml(e.message)}</div>
            <div class="time">\${formatTime(e.created_at)}</div>
        \`;
        return div;
    }

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

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const a = author.value.trim();
        const m = message.value.trim();
        if (!a || !m) return;
        fetch('/api/entries', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ author: a, message: m })
        })
        .then(r => r.json())
        .then(data => {
            if (data.success) {
                author.value = '';
                message.value = '';
                const el = container.querySelector('.empty');
                if (el) el.remove();
                container.insertBefore(renderEntry(data.entry), container.firstChild);
            } else {
                alert(data.error || 'Ошибка');
            }
        });
    });

    load();
});`}</code>
      </div>

      <div className="info-box" style={{marginTop: '20px'}}>
        <strong>🎯 Как это работает вместе:</strong>
        <ol style={{marginTop: '10px'}}>
          <li>Пользователь открывает страницу → вызывается <code>load()</code> → загружаются все записи</li>
          <li>Пользователь заполняет форму (имя и сообщение)</li>
          <li>Пользователь нажимает "Отправить" или Enter</li>
          <li>JavaScript "ловит" событие отправки формы (<code>addEventListener('submit')</code>)</li>
          <li>Отменяем стандартную отправку (<code>preventDefault()</code>)</li>
          <li>Получаем значения из полей формы</li>
          <li>Проверяем, что поля не пустые</li>
          <li>Отправляем POST запрос на сервер с данными формы</li>
          <li>Сервер добавляет запись в базу данных</li>
          <li>Сервер возвращает созданную запись</li>
          <li>JavaScript получает ответ и очищает форму</li>
          <li>JavaScript добавляет новую запись на страницу (в начало списка)</li>
          <li>Пользователь видит свою запись сразу, без перезагрузки страницы!</li>
        </ol>
      </div>

      <div className="success-box">
        <strong>✅ Проверь:</strong> 
        <ol style={{marginTop: '10px'}}>
          <li>Добавь код отправки формы в свой <code>static/script.js</code></li>
          <li>Запусти сервер и открой страницу</li>
          <li>Заполни форму (имя и сообщение) и нажми "Отправить"</li>
          <li>Проверь, что:
            <ul>
              <li>Форма очистилась после отправки</li>
              <li>Новая запись появилась на странице (в начале списка)</li>
              <li>Запись содержит имя, сообщение и дату</li>
            </ul>
          </li>
          <li>Попробуй добавить ещё несколько записей</li>
          <li>Перезапусти сервер и проверь, что записи остались (они в базе данных!)</li>
        </ol>
      </div>
    </div>
  )
}

export default L3Step7
