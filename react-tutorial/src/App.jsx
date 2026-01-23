import { useState } from 'react'
import './App.css'
import Step1 from './components/Step1'
import Step2 from './components/Step2'
import Step3 from './components/Step3'
import Step4 from './components/Step4'
import Step5 from './components/Step5'
import Step6 from './components/Step6'
import Step7 from './components/Step7'
import Step8 from './components/Step8'
import Step9 from './components/Step9'
import Step10 from './components/Step10'

function App() {
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 10

  const steps = [
    { component: Step1, title: 'Подготовка проекта' },
    { component: Step2, title: 'Создание виртуального окружения' },
    { component: Step3, title: 'Установка Flask' },
    { component: Step4, title: 'Создание файла app.py' },
    { component: Step5, title: 'Создание HTML шаблона' },
    { component: Step6, title: 'Создание CSS стилей' },
    { component: Step7, title: 'Создание JavaScript кода' },
    { component: Step8, title: 'Создание requirements.txt' },
    { component: Step9, title: 'Запуск проекта' },
    { component: Step10, title: 'Проверка работы' },
  ]

  const CurrentStepComponent = steps[currentStep - 1].component

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>🧮 Урок: Создание калькулятора на Flask</h1>
        <p className="subtitle">Пошаговое руководство для начинающих</p>
      </header>

      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        ></div>
      </div>

      <div className="step-indicator">
        Шаг {currentStep} из {totalSteps}: {steps[currentStep - 1].title}
      </div>

      <main className="main-content">
        <CurrentStepComponent />
      </main>

      <div className="navigation">
        <button 
          onClick={prevStep} 
          disabled={currentStep === 1}
          className="nav-button prev"
        >
          ← Назад
        </button>
        <div className="step-dots">
          {steps.map((_, index) => (
            <span
              key={index}
              className={`dot ${index + 1 === currentStep ? 'active' : ''} ${index + 1 < currentStep ? 'completed' : ''}`}
              onClick={() => setCurrentStep(index + 1)}
            />
          ))}
        </div>
        <button 
          onClick={nextStep} 
          disabled={currentStep === totalSteps}
          className="nav-button next"
        >
          Вперед →
        </button>
      </div>
    </div>
  )
}

export default App
