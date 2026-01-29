function L3Step3() {
  return (
    <div className="step-content trainer-step">
      <h2>Шаг 3: Форма и вывод записей</h2>

      <h3>HTML</h3>
      <ul>
        <li>Форма: поле «Имя», текстовое поле «Сообщение», кнопка «Отправить».</li>
        <li>Блок для списка записей (имя, текст, дата).</li>
      </ul>

      <h3>JavaScript</h3>
      <ul>
        <li>При загрузке: <code>fetch('/api/entries')</code> → отрисуй записи (например, в обратном порядке — новые сверху).</li>
        <li>При отправке формы: <code>fetch('/api/entries', { method: 'POST', ... })</code> с <code>body: JSON.stringify({ author, message })</code>. После успеха — добавь новую запись в список и очисти форму.</li>
      </ul>

      <div className="warning">
        Не забывай экранировать текст при вставке в HTML (чтобы избежать XSS). Можно использовать <code>textContent</code> или простую функцию замены <code>&lt;</code>, <code>&gt;</code>, <code>&amp;</code>.
      </div>

      <div className="success-box">
        <strong>✅ Готово.</strong> Дальше — запуск и проверка.
      </div>
    </div>
  )
}

export default L3Step3
