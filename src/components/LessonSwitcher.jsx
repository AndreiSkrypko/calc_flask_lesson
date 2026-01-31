function LessonSwitcher({ lessons, currentLesson, onSelect }) {
  return (
    <nav className="navbar trainer-nav" role="navigation" aria-label="Выбор урока">
      <div className="navbar-container">
        <div className="navbar-brand">
          <div className="brand-icon-wrapper">
            <span className="brand-icon">⚡</span>
          </div>
          <div className="brand-text-wrapper">
            <span className="brand-text-main">Flask</span>
            <span className="brand-text-sub">Уроки</span>
          </div>
        </div>
        <div className="navbar-menu">
          {lessons.map((lesson, index) => (
            <button
              key={lesson.id}
              type="button"
              className={`navbar-item ${index === currentLesson ? 'active' : ''}`}
              onClick={() => onSelect(index)}
              aria-pressed={index === currentLesson}
            >
              <span className="lesson-num">Урок {lesson.id}</span>
              <span className="lesson-name">{lesson.shortTitle}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default LessonSwitcher
