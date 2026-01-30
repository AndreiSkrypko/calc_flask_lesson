function L5Step2() {
  return (
    <div className="step-content trainer-step">
      <h2>Шаг 2: Формы и валидация</h2>

      <h3>Форма</h3>
      <p><code>method="post"</code>, поля <code>name="title"</code>, <code>name="body"</code>. Для редактирования — <code>action</code> на <code>/post/&lt;id&gt;/edit</code>, для нового — на <code>/new</code>.</p>

      <h3>Обработка</h3>
      <ul>
        <li><code>title = request.form.get('title', '').strip()</code>, аналогично <code>body</code>.</li>
        <li>Проверки: не пусто, длина. При ошибке — <code>flash('...')</code>, <code>return render_template('form.html', post=&#123;'title': ..., 'body': ...&#125;)</code>.</li>
        <li>При успехе — <code>redirect(url_for('view_post', post_id=...))</code> или <code>url_for('index')</code>.</li>
      </ul>

      <div className="info-box">
        <strong>SECRET_KEY:</strong> для <code>flash</code> нужен <code>app.config['SECRET_KEY'] = '...'</code> (любая строка).
      </div>

      <div className="success-box">
        <strong>✅ Готово.</strong> Дальше — шаблоны и вывод flash.
      </div>
    </div>
  )
}

export default L5Step2
