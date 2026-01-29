function L4Step1() {
  return (
    <div className="step-content trainer-step">
      <h2>Шаг 1: Базовый шаблон</h2>

      <p>Создай <code>templates/base.html</code> с общей разметкой.</p>

      <div className="info-box trainer-definition">
        <strong>Структура base.html:</strong>
        <ul>
          <li><code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, подключение CSS.</li>
          <li><code>{% block title %}</code> — заголовок страницы.</li>
          <li><code>&lt;nav&gt;</code> с ссылками: Главная, Обо мне, Контакты. Используй <code>{{ url_for('index') }}</code> и т.п.</li>
          <li><code>&lt;main&gt;</code> с <code>{% block content %}{% endblock %}</code>.</li>
          <li>При желании — <code>&lt;footer&gt;</code>.</li>
        </ul>
      </div>

      <p>В <code>app.py</code> пока сделай три маршрута, которые возвращают простой текст или заглушки. Проверь, что переходы по ссылкам работают.</p>

      <div className="success-box">
        <strong>✅ Готово.</strong> Дальше — отдельные страницы.
      </div>
    </div>
  )
}

export default L4Step1
