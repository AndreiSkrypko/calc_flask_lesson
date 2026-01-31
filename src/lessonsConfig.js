import Introduction from './components/Introduction'
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
import L2Intro from './components/lesson2/L2Intro'
import L2Step1 from './components/lesson2/L2Step1'
import L2Step2 from './components/lesson2/L2Step2'
import L2Step3 from './components/lesson2/L2Step3'
import L2Step4 from './components/lesson2/L2Step4'
import L2Step5 from './components/lesson2/L2Step5'
import L2Step6 from './components/lesson2/L2Step6'
import L2Step7 from './components/lesson2/L2Step7'
import L2Step8 from './components/lesson2/L2Step8'
import L2Step9 from './components/lesson2/L2Step9'
import L2Step10 from './components/lesson2/L2Step10'
import L2Step11 from './components/lesson2/L2Step11'
import L3Intro from './components/lesson3/L3Intro'
import L3Step1 from './components/lesson3/L3Step1'
import L3Step2 from './components/lesson3/L3Step2'
import L3Step3 from './components/lesson3/L3Step3'
import L3Step4 from './components/lesson3/L3Step4'
import L4Intro from './components/lesson4/L4Intro'
import L4Step1 from './components/lesson4/L4Step1'
import L4Step2 from './components/lesson4/L4Step2'
import L4Step3 from './components/lesson4/L4Step3'
import L5Intro from './components/lesson5/L5Intro'
import L5Step1 from './components/lesson5/L5Step1'
import L5Step2 from './components/lesson5/L5Step2'
import L5Step3 from './components/lesson5/L5Step3'
import L5Step4 from './components/lesson5/L5Step4'

export const lessons = [
  {
    id: 1,
    title: 'Калькулятор на Flask',
    shortTitle: 'Калькулятор',
    steps: [
      { title: 'Введение: Что такое Flask?', component: Introduction },
      { title: 'Подготовка проекта', component: Step1 },
      { title: 'Виртуальное окружение', component: Step2 },
      { title: 'Установка Flask', component: Step3 },
      { title: 'Создание app.py', component: Step4 },
      { title: 'HTML шаблон', component: Step5 },
      { title: 'CSS стили', component: Step6 },
      { title: 'JavaScript', component: Step7 },
      { title: 'requirements.txt', component: Step8 },
      { title: 'Запуск проекта', component: Step9 },
      { title: 'Проверка работы', component: Step10 },
    ],
  },
  {
    id: 2,
    title: 'Список дел (To-Do)',
    shortTitle: 'Список дел',
    steps: [
      { title: 'Введение', component: L2Intro },
      { title: 'Подготовка и первый маршрут', component: L2Step1 },
      { title: 'Данные и API (структура)', component: L2Step2 },
      { title: 'Страница: базовый HTML', component: L2Step3 },
      { title: 'Реализация POST (добавление)', component: L2Step5 },
      { title: 'Реализация toggle (готово)', component: L2Step6 },
      { title: 'Реализация DELETE (удаление)', component: L2Step7 },
      { title: 'Шаблоны и static (HTML, CSS, JS)', component: L2Step8 },
      { title: 'Готовые файлы — код для копирования', component: L2Step11 },
      { title: 'JavaScript: POST/DELETE/toggle подробно', component: L2Step9 },
      { title: 'Валидация, коды ответов и улучшения', component: L2Step10 },
      { title: 'Запуск и проверка', component: L2Step4 },
    ],
  },
  // Уроки 3, 4, 5 временно скрыты
  // {
  //   id: 3,
  //   title: 'Гостевская книга + SQLite',
  //   shortTitle: 'Гостевская книга',
  //   steps: [
  //     { title: 'Введение', component: L3Intro },
  //     { title: 'SQLite и таблица', component: L3Step1 },
  //     { title: 'Маршруты и API', component: L3Step2 },
  //     { title: 'Форма и вывод записей', component: L3Step3 },
  //     { title: 'Запуск и проверка', component: L3Step4 },
  //   ],
  // },
  // {
  //   id: 4,
  //   title: 'Сайт-визитка',
  //   shortTitle: 'Визитка',
  //   steps: [
  //     { title: 'Введение', component: L4Intro },
  //     { title: 'Базовый шаблон', component: L4Step1 },
  //     { title: 'Страницы и маршруты', component: L4Step2 },
  //     { title: 'Стили и навигация', component: L4Step3 },
  //   ],
  // },
  // {
  //   id: 5,
  //   title: 'Простой блог',
  //   shortTitle: 'Блог',
  //   steps: [
  //     { title: 'Введение', component: L5Intro },
  //     { title: 'БД и CRUD', component: L5Step1 },
  //     { title: 'Формы и валидация', component: L5Step2 },
  //     { title: 'Шаблоны и flash', component: L5Step3 },
  //     { title: 'Запуск и проверка', component: L5Step4 },
  //   ],
  // },
]
