function L2Step3() {
  return (
    <div className="step-content trainer-step">
      <h2>Шаг 3: Страница и JavaScript</h2>

      <h3>HTML</h3>
      <ul>
        <li>Поле ввода и кнопка «Добавить».</li>
        <li>Список <code>&lt;ul&gt;</code> для дел. У каждого дела — текст, кнопки «Готово» и «Удалить».</li>
      </ul>

      <h3>JavaScript</h3>
      <ul>
        <li>При загрузке: <code>fetch('/api/todos')</code> → отрисуй список.</li>
        <li>По «Добавить»: <code>fetch('/api/todos', &#123; method: 'POST', ... &#125;)</code> с <code>body: JSON.stringify(&#123; text &#125;)</code>.</li>
        <li>По «Готово»: <code>fetch(`/api/todos/$&#123;id&#125;/toggle`, &#123; method: 'POST' &#125;)</code>, затем обнови список.</li>
        <li>По «Удалить»: <code>fetch(`/api/todos/$&#123;id&#125;`, &#123; method: 'DELETE' &#125;)</code>, затем убери элемент из списка.</li>
      </ul>

      <div className="info-box">
        <strong>Стили:</strong> можно оформить страницу как в уроке 1 (CSS в <code>static/style.css</code>).
      </div>

      <div className="success-box">
        <strong>✅ Готово.</strong> Дальше — запуск и проверка.
      </div>
    </div>
  )
}

export default L2Step3
