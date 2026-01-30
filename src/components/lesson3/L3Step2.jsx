function L3Step2() {
  return (
    <div className="step-content trainer-step">
      <h2>Шаг 2: Маршруты и API</h2>

      <h3>GET /api/entries</h3>
      <p><code>SELECT id, author, message, created_at FROM entries ORDER BY id DESC</code> → список словарей → <code>jsonify(&#123;'entries': entries&#125;)</code>.</p>

      <h3>POST /api/entries</h3>
      <ul>
        <li>Читай <code>request.json</code> → <code>author</code>, <code>message</code>.</li>
        <li>Проверь, что оба не пустые. Если пусто — верни <code>jsonify(&#123;'success': False, 'error': '...'&#125;), 400</code>.</li>
        <li><code>INSERT INTO entries (author, message) VALUES (?, ?)</code>.</li>
        <li>Верни <code>jsonify(&#123;'success': True, 'entry': &#123;...&#125;&#125;)</code> с новой записью (включая <code>id</code>, <code>created_at</code>).</li>
      </ul>

      <div className="info-box">
        <strong>Главная страница:</strong> <code>@app.route('/')</code> → <code>render_template('index.html')</code>. Шаблон и статика — как в предыдущих уроках.
      </div>

      <div className="success-box">
        <strong>✅ Готово.</strong> Дальше — форма и вывод записей на странице.
      </div>
    </div>
  )
}

export default L3Step2
