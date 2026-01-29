function L4Step2() {
  return (
    <div className="step-content trainer-step">
      <h2>Шаг 2: Страницы и маршруты</h2>

      <h3>Шаблоны</h3>
      <ul>
        <li><code>index.html</code>: <code>{% extends 'base.html' %}</code>, <code>{% block title %}Главная{% endblock %}</code>, <code>{% block content %}...{% endblock %}</code> с приветствием.</li>
        <li><code>about.html</code> — «Обо мне», краткий текст.</li>
        <li><code>contact.html</code> — «Контакты», пример почты или соцсетей.</li>
      </ul>

      <h3>Маршруты</h3>
      <div className="code-block">
        <code>{`@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')`}</code>
      </div>

      <div className="success-box">
        <strong>✅ Готово.</strong> Дальше — стили и навигация.
      </div>
    </div>
  )
}

export default L4Step2
