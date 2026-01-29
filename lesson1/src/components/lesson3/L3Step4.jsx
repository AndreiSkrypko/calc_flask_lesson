function L3Step4() {
  return (
    <div className="step-content trainer-step">
      <h2>Шаг 4: Запуск и проверка</h2>

      <ol>
        <li>Вызови <code>init_db()</code> при старте приложения.</li>
        <li>Запусти <code>python app.py</code>, открой <code>http://localhost:5002</code>.</li>
        <li>Оставь несколько записей, перезапусти сервер — они должны остаться (файл <code>guestbook.db</code>).</li>
      </ol>

      <div className="success-box trainer-examples">
        <strong>✅ Урок 3 завершён!</strong>
        <p>Ты сохранял данные в SQLite. В уроке 4 сделаем сайт-визитку из нескольких страниц.</p>
      </div>
    </div>
  )
}

export default L3Step4
