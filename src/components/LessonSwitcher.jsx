function LessonSwitcher({ lessons, currentLesson, onSelect }) {
  return (
    <nav className="navbar trainer-nav" role="navigation" aria-label="Выбор урока">
      <div className="navbar-container">
        <div className="navbar-brand">
          <span className="brand-icon">📚</span>
          <span className="brand-text">Flask Уроки</span>
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
