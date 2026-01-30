function LessonSwitcher({ lessons, currentLesson, onSelect }) {
  return (
    <nav className="lesson-switcher trainer-nav" role="navigation" aria-label="Выбор урока">
      {lessons.map((lesson, index) => (
        <button
          key={lesson.id}
          type="button"
          className={`lesson-tab ${index === currentLesson ? 'active' : ''}`}
          onClick={() => onSelect(index)}
          aria-pressed={index === currentLesson}
        >
          <span className="lesson-num">Урок {lesson.id}</span>
          <span className="lesson-name">{lesson.shortTitle}</span>
        </button>
      ))}
    </nav>
  )
}

export default LessonSwitcher
