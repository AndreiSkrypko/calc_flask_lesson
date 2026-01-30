function L4Step3() {
  return (
    <div className="step-content trainer-step">
      <h2>Шаг 3: Стили и навигация</h2>

      <ul>
        <li>Подключи <code>static/style.css</code> в <code>base.html</code> через <code>url_for('static', filename='style.css')</code>.</li>
        <li>Оформи навбар (фон, отступы, ссылки). При наведении можно менять цвет.</li>
        <li>Контент — в белой карточке по центру, удобная ширина и скруглённые углы.</li>
      </ul>

      <div className="info-box">
        На всех страницах меню одинаковое за счёт базового шаблона. Меняешь только блок <code>content</code>.
      </div>

      <div className="success-box trainer-examples">
        <strong>✅ Урок 4 завершён!</strong>
        <p>Ты сделал многостраничный сайт с общим шаблоном. В уроке 5 — простой блог с CRUD и формами.</p>
      </div>
    </div>
  )
}

export default L4Step3
