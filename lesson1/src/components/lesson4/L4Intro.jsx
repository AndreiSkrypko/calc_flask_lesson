function L4Intro() {
  return (
    <div className="step-content trainer-step">
      <h2>🪪 Урок 4: Сайт-визитка</h2>

      <div className="info-box trainer-definition">
        <p>
          <strong>Сайт-визитка</strong> — несколько страниц (главная, «Обо мне», «Контакты») с общим оформлением и меню.
          Без базы данных — только HTML, шаблоны и стили.
        </p>
      </div>

      <h3>🆕 Что нового</h3>
      <ul>
        <li><strong>Наследование шаблонов</strong>: общий <code>base.html</code> с навбаром и футером.</li>
        <li>Страницы расширяют его через <code>{% extends 'base.html' %}</code> и <code>{% block content %}</code>.</li>
        <li>Навигация через <code>url_for('index')</code>, <code>url_for('about')</code>, <code>url_for('contact')</code>.</li>
      </ul>

      <div className="success-box trainer-examples">
        <strong>Что сделаем:</strong>
        <ul>
          <li>Маршруты <code>/</code>, <code>/about</code>, <code>/contact</code></li>
          <li>Базовый шаблон с меню и блоком для контента</li>
          <li>Три страницы с разным текстом</li>
        </ul>
      </div>

      <p>Эталон: <code>lesson4/visitor-flask</code>. Порт <code>5003</code>.</p>

      <div className="success-box">
        <strong>✅ Дальше</strong> — базовый шаблон и страницы.
      </div>
    </div>
  )
}

export default L4Intro
