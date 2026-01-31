import { useState } from 'react'
import './App.css'
import { lessons } from './lessonsConfig'
import LessonSwitcher from './components/LessonSwitcher'

function App() {
  const [currentLesson, setCurrentLesson] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)

  const lesson = lessons[currentLesson]
  const steps = lesson.steps
  const totalSteps = steps.length
  const StepComponent = steps[currentStep].component

  const goToLesson = (index) => {
    setCurrentLesson(index)
    setCurrentStep(0)
  }

  const nextStep = () => {
    if (currentStep < totalSteps - 1) setCurrentStep((s) => s + 1)
  }

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep((s) => s - 1)
  }

  return (
    <div className="app trainer-page">
      <LessonSwitcher
        lessons={lessons}
        currentLesson={currentLesson}
        onSelect={goToLesson}
      />
      
      <header className="app-header">
        <h1>Урок {lesson.id}: {lesson.title}</h1>
        <p className="subtitle">Пошаговое руководство для начинающих</p>
      </header>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
        />
      </div>

      <div className="step-indicator">
        {currentStep === 0 ? (
          <span>{steps[currentStep].title}</span>
        ) : (
          <span>Шаг {currentStep} из {totalSteps - 1}: {steps[currentStep].title}</span>
        )}
      </div>

      <main
        className="main-content trainer-card"
        role="main"
        data-trainer-lesson={lesson.id}
        data-trainer-step={currentStep}
        data-trainer-step-title={steps[currentStep].title}
      >
        <StepComponent />
      </main>

      <div className="navigation">
        <button
          onClick={prevStep}
          disabled={currentStep === 0}
          className="nav-button prev"
        >
          ← Назад
        </button>
        <div className="step-dots">
          {steps.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`dot ${index === currentStep ? 'active' : ''} ${index < currentStep ? 'completed' : ''}`}
              onClick={() => setCurrentStep(index)}
              aria-label={`Шаг ${index + 1}`}
            />
          ))}
        </div>
        <button
          onClick={nextStep}
          disabled={currentStep === totalSteps - 1}
          className="nav-button next"
        >
          Вперёд →
        </button>
      </div>
    </div>
  )
}

export default App
