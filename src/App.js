// src/App.js
import React, { useState, useEffect } from 'react'
import {
  FaMoon,
  FaSun,
  FaJsSquare,
  FaGithub,
  FaTelegram,
  FaEnvelope
} from 'react-icons/fa'
import { SiPython, SiCplusplus, SiAndroid } from 'react-icons/si'

// Вот здесь импортируем APK как модуль
import turnToeApk from './assets/TurnToe.apk'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  const skills = [
    { name: 'JavaScript',     icon: <FaJsSquare   size={32} className="text-yellow-500" /> },
    { name: 'Python',         icon: <SiPython     size={32} className="text-blue-500"   /> },
    { name: 'C++ / ESP32',    icon: <SiCplusplus  size={32} className="text-purple-600" /> },
    { name: 'Android Studio', icon: <SiAndroid    size={32} className="text-green-600"  /> },
  ]

  const projects = [
    {
      title: 'Авто post-bot у Telegram',
      href:  'https://github.com/AnvilBrain/TelegramBot_AutoPost',
      desc:  'Python-бот для автоматичної публікації'
    },
    {
      title: 'TurnToe – гра на Android (APK)',
      href:  turnToeApk,         // теперь путь берётся из импорта
      desc:  'Розроблена в Android Studio',
      downloadSize: '8,5 МБ'
    },
    {
      title: 'Репозиторій цього сайту',
      href:  'https://github.com/AnvilBrain/ProtfolioKNU',
      desc:  'React + Tailwind CSS портфоліо'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">

      {/* Навігація */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white dark:bg-gray-800 shadow">
        <span className="text-xl font-bold">Моє портфоліо</span>
        <div className="flex items-center space-x-4 text-blue-600">
          <a href="#about"    className="hover:underline">About</a>
          <a href="#skills"   className="hover:underline">Skills</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact"  className="hover:underline">Contact</a>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <header className="text-center py-16 bg-gray-200 dark:bg-gray-700">
        <div className="inline-block bg-blue-800 text-white rounded-full p-6 mb-4 text-3xl font-bold">
          ЯП
        </div>
        <h1 className="text-4xl font-extrabold mb-2">Ярослав Павленко</h1>
        <p className="text-lg mb-4">Вивчаю програмування та створюю корисні проєкти</p>
        <a
          href="https://t.me/Anvil_pv"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition"
        >
          Написати мені
        </a>
      </header>

      {/* Про мене */}
      <section id="about" className="max-w-3xl mx-auto mt-12 px-4">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-2">Про мене</h2>
          <p>
            Привіт! Мене звати Ярослав Павленко. Я захоплююся розробкою програмного забезпечення:
            пишу боти для Telegram на Python, створюю Android-ігри та веб-додатки на React.
            Люблю швидко вчитися новим технологіям і експериментувати з JavaScript, Python,
            C++ (ESP32) та Android Studio.
          </p>
        </div>
      </section>

      {/* Навички */}
      <section id="skills" className="max-w-3xl mx-auto mt-12 px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Мої навички</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {skills.map(({ name, icon }) => (
            <div
              key={name}
              className="flex flex-col items-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              {icon}
              <span className="mt-2 font-medium text-center">{name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Проєкти */}
      <section id="projects" className="max-w-3xl mx-auto mt-12 px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Мої проєкти</h2>
        <div className="space-y-4">
          {projects.map(({ title, href, desc, downloadSize }) => (
            <div
              key={title}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold text-blue-600">
                {downloadSize
                  ? title
                  : <a href={href}
                       target={href.startsWith('http') ? '_blank' : undefined}
                       rel="noopener noreferrer"
                       className="hover:underline">
                      {title}
                    </a>
                }
              </h3>
              <p className="text-sm mt-1">{desc}</p>

              {/* Если есть downloadSize — показываем кнопку */}
              {downloadSize && (
                <a
                  href={href}
                  download="TurnToe.apk"
                  className="inline-block mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                >
                  Завантажити ({downloadSize})
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Контакт */}
      <section id="contact" className="max-w-3xl mx-auto mt-12 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Зв’язатися зі мною</h2>
        <div className="flex justify-center space-x-6 text-2xl text-gray-700 dark:text-gray-200">
          <a href="https://github.com/AnvilBrain" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://t.me/Anvil_pv"   target="_blank" rel="noopener noreferrer">
            <FaTelegram />
          </a>
          <a href="mailto:anvilbrain55@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </section>

      {/* Футер */}
      <footer className="mt-16 py-6 text-center text-gray-500 dark:text-gray-400 text-sm">
        © 2025 Ярослав Павленко. Всі права захищені.
      </footer>
    </div>
  )
}

export default App
