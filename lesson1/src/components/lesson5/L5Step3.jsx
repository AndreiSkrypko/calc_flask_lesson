function L5Step3() {
  return (
    <div className="step-content trainer-step">
      <h2>Шаг 3: Шаблоны и flash</h2>

      <h3>Базовый шаблон</h3>
      <p>В <code>base.html</code> выведи сообщения:</p>
      <div className="code-block">
        <code>{`{% with messages = get_flashed_messages() %}
  {% if messages %}
    <ul class="flashes">
      {% for m in messages %}<li>{{ m }}</li>{% endfor %}
    </ul>
  {% endif %}
{% endwith %}`}</code>
      </div>

      <h3>Страницы</h3>
      <ul>
        <li><code>index.html</code> — список постов (ссылки на <code>/post/&lt;id&gt;</code>), кнопка «Новый пост».</li>
        <li><code>view.html</code> — заголовок, дата, текст, ссылка «Редактировать», форма «Удалить» (POST).</li>
        <li><code>form.html</code> — форма создания/редактирования. Один шаблон: если <code>post.id</code> есть — редактирование, иначе создание.</li>
      </ul>

      <div className="success-box">
        <strong>✅ Готово.</strong> Дальше — запуск и проверка.
      </div>
    </div>
  )
}

export default L5Step3
