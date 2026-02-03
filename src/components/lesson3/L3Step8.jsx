function L3Step8() {
  return (
    <div className="step-content trainer-step">
      <h2>Шаг 8: CSS стили — делаем страницу красивой</h2>

      <div className="info-box trainer-definition">
        <strong>💡 Что такое CSS?</strong>
        <p style={{marginTop: '10px'}}>
          <strong>CSS</strong> (Cascading Style Sheets) — это язык для оформления страниц. 
          Если HTML — это каркас дома, то CSS — это краска, обои и мебель. 
          CSS определяет, как будут выглядеть элементы: цвет, размер, расположение, шрифты и т.д.
        </p>
        <p style={{marginTop: '10px'}}>
          Мы создадим красивые стили для гостевой книги: градиентный фон, карточки для записей, 
          стилизованную форму и приятные цвета.
        </p>
      </div>

      <h3>Полный код для <code>static/style.css</code></h3>
      <div className="code-block">
        <code>{`* { margin: 0; padding: 0; box-sizing: border-box; }

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
    min-height: 100vh;
    padding: 40px 20px;
}

.container {
    max-width: 600px;
    margin: 0 auto;
    background: white;
    border-radius: 16px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.2);
    padding: 32px;
}

h1 { color: #333; margin-bottom: 4px; font-size: 1.8em; }
.subtitle { color: #666; font-size: 0.9em; margin-bottom: 24px; }

.add-form {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 28px;
}
.add-form input, .add-form textarea {
    padding: 12px 14px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-size: 16px;
    font-family: inherit;
}
.add-form input:focus, .add-form textarea:focus {
    outline: none;
    border-color: #6a11cb;
}
.add-form button {
    padding: 12px;
    background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
}

.entries { display: flex; flex-direction: column; gap: 12px; }
.entry {
    padding: 14px 16px;
    background: #f8f9fa;
    border-radius: 10px;
    border-left: 4px solid #6a11cb;
}
.entry .author { font-weight: 600; color: #333; margin-bottom: 4px; }
.entry .message { color: #555; line-height: 1.5; }
.entry .time { font-size: 0.85em; color: #888; margin-top: 6px; }

.empty { color: #999; text-align: center; padding: 24px; }`}</code>
      </div>

      <h3>🔍 Разберём стили по блокам:</h3>

      <h4>1. Сброс стилей и базовые настройки</h4>
      <ul>
        <li><code>* {'{'} margin: 0; padding: 0; box-sizing: border-box; {'}'}</code> - сбрасываем все отступы браузера по умолчанию. 
          <code>box-sizing: border-box</code> означает, что padding и border включаются в ширину элемента (удобнее для расчётов).</li>
      </ul>

      <h4>2. Стили для body</h4>
      <ul>
        <li><code>font-family: 'Segoe UI', ...</code> — выбираем красивый шрифт. 
          Если первый не доступен, используется следующий из списка.</li>
        <li><code>background: linear-gradient(...)</code> — градиентный фон от фиолетового к синему:
          <ul>
            <li><code>135deg</code> — угол градиента (диагональ)</li>
            <li><code>#6a11cb</code> — начальный цвет (фиолетовый)</li>
            <li><code>#2575fc</code> — конечный цвет (синий)</li>
          </ul>
        </li>
        <li><code>min-height: 100vh</code> — минимальная высота равна высоте экрана (100vh = 100% высоты viewport)</li>
        <li><code>padding: 40px 20px</code> — отступы сверху/снизу 40px, слева/справа 20px</li>
      </ul>

      <h4>3. Стили для контейнера</h4>
      <ul>
        <li><code>max-width: 600px</code> — максимальная ширина контейнера (на больших экранах не будет слишком широким)</li>
        <li><code>margin: 0 auto</code> — центрируем контейнер (автоматические отступы слева и справа)</li>
        <li><code>background: white</code> — белый фон</li>
        <li><code>border-radius: 16px</code> — скруглённые углы</li>
        <li><code>box-shadow: 0 10px 40px rgba(0,0,0,0.2)</code> — тень для объёма:
          <ul>
            <li><code>0</code> — смещение по X</li>
            <li><code>10px</code> — смещение по Y</li>
            <li><code>40px</code> — размытие</li>
            <li><code>rgba(0,0,0,0.2)</code> — цвет тени (чёрный с прозрачностью 20%)</li>
          </ul>
        </li>
        <li><code>padding: 32px</code> — внутренние отступы</li>
      </ul>

      <h4>4. Стили для формы</h4>
      <ul>
        <li><code>display: flex</code> — используем flexbox для расположения элементов</li>
        <li><code>flex-direction: column</code> — элементы располагаются вертикально (один под другим)</li>
        <li><code>gap: 12px</code> — расстояние между элементами формы</li>
        <li><code>input, textarea</code> — стили для полей ввода:
          <ul>
            <li><code>padding: 12px 14px</code> — внутренние отступы</li>
            <li><code>border: 2px solid #e0e0e0</code> — рамка (2px, сплошная, светло-серая)</li>
            <li><code>border-radius: 8px</code> — скруглённые углы</li>
            <li><code>font-size: 16px</code> — размер шрифта</li>
            <li><code>font-family: inherit</code> — наследуем шрифт от родителя</li>
          </ul>
        </li>
        <li><code>input:focus, textarea:focus</code> — стили при фокусе (когда пользователь кликает в поле):
          <ul>
            <li><code>outline: none</code> — убираем стандартную рамку браузера</li>
            <li><code>border-color: #6a11cb</code> — меняем цвет рамки на фиолетовый</li>
          </ul>
        </li>
        <li><code>button</code> — стили для кнопки:
          <ul>
            <li><code>background: linear-gradient(...)</code> — градиентный фон (как у body)</li>
            <li><code>color: white</code> — белый текст</li>
            <li><code>border: none</code> — без рамки</li>
            <li><code>font-weight: 600</code> — полужирный шрифт</li>
            <li><code>cursor: pointer</code> — курсор-указатель при наведении</li>
          </ul>
        </li>
      </ul>

      <h4>5. Стили для записей</h4>
      <ul>
        <li><code>.entries</code> — контейнер для всех записей:
          <ul>
            <li><code>display: flex</code> — flexbox</li>
            <li><code>flex-direction: column</code> — вертикальное расположение</li>
            <li><code>gap: 12px</code> — расстояние между записями</li>
          </ul>
        </li>
        <li><code>.entry</code> — одна запись:
          <ul>
            <li><code>padding: 14px 16px</code> — внутренние отступы</li>
            <li><code>background: #f8f9fa</code> — светло-серый фон</li>
            <li><code>border-radius: 10px</code> — скруглённые углы</li>
            <li><code>border-left: 4px solid #6a11cb</code> — фиолетовая полоска слева для красоты</li>
          </ul>
        </li>
        <li><code>.entry .author</code> — имя автора:
          <ul>
            <li><code>font-weight: 600</code> — полужирный</li>
            <li><code>color: #333</code> — тёмно-серый цвет</li>
          </ul>
        </li>
        <li><code>.entry .message</code> — текст сообщения:
          <ul>
            <li><code>color: #555</code> — серый цвет</li>
            <li><code>line-height: 1.5</code> — межстрочный интервал (читабельнее)</li>
          </ul>
        </li>
        <li><code>.entry .time</code> — дата:
          <ul>
            <li><code>font-size: 0.85em</code> — немного меньше основного текста</li>
            <li><code>color: #888</code> — светло-серый цвет</li>
          </ul>
        </li>
      </ul>

      <h4>6. Стили для пустого состояния</h4>
      <ul>
        <li><code>.empty</code> — сообщение "Пока нет записей":
          <ul>
            <li><code>color: #999</code> — серый цвет</li>
            <li><code>text-align: center</code> — выравнивание по центру</li>
            <li><code>padding: 24px</code> — отступы</li>
          </ul>
        </li>
      </ul>

      <div className="info-box" style={{marginTop: '20px'}}>
        <strong>💡 Что такое Flexbox?</strong>
        <p style={{marginTop: '10px'}}>
          <strong>Flexbox</strong> — это способ расположения элементов на странице. 
          С помощью <code>display: flex</code> можно легко выравнивать элементы, 
          распределять пространство и создавать адаптивные макеты.
        </p>
        <p style={{marginTop: '10px'}}>
          В нашем случае мы используем <code>flex-direction: column</code>, 
          чтобы элементы располагались вертикально (один под другим).
        </p>
      </div>

      <div className="success-box">
        <strong>✅ Проверь:</strong> 
        <ol style={{marginTop: '10px'}}>
          <li>Создай файл <code>static/style.css</code> с кодом выше</li>
          <li>Обнови страницу в браузере</li>
          <li>Проверь, что:
            <ul>
              <li>Фон стал градиентным (фиолетовый → синий)</li>
              <li>Контейнер белый с тенью и скруглёнными углами</li>
              <li>Поля формы красиво оформлены</li>
              <li>Кнопка с градиентным фоном</li>
              <li>Записи выглядят как карточки с фиолетовой полоской слева</li>
            </ul>
          </li>
        </ol>
        <p style={{marginTop: '10px'}}>
          Если всё выглядит красиво — поздравляю! Ты создал полноценную гостевую книгу с базой данных!
        </p>
      </div>
    </div>
  )
}

export default L3Step8
