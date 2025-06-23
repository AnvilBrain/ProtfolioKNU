// src/App.js
import React, { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import TurnToeAPK from './download/TurnToe.apk'

import {
  FaMoon,
  FaSun,
  FaJsSquare,
  FaGithub,
  FaTelegram,
  FaEnvelope
} from 'react-icons/fa'
import { SiPython, SiCplusplus, SiKotlin } from 'react-icons/si'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  // Ініціалізація AOS
  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  // Перемикач темної/світлої теми
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  const skills = [
    { name: 'JavaScript',  icon: <FaJsSquare  size={32} className="text-yellow-500" /> },
    { name: 'Python',      icon: <SiPython    size={32} className="text-blue-500"   /> },
    { name: 'C++ / ESP32', icon: <SiCplusplus size={32} className="text-purple-600" /> },
    { name: 'Kotlin',      icon: <SiKotlin    size={32} className="text-indigo-500" /> },
  ]

  const projects = [
    {
      title: 'Авто post-bot в Telegram',
      href:  'https://github.com/AnvilBrain/TelegramBot_AutoPost',
      desc:  'Python-бот для автоматичної публікації'
    },
    {
      title: 'TurnToe — гра на Android (APK)',
      href:  TurnToeAPK,
      desc:  'Розроблена на Kotlin у Android Studio',
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

      {/* ========== Навігація ========== */}
      <nav
        data-aos="fade-down"
        className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 py-4 bg-white dark:bg-gray-800 shadow"
      >
        <span className="text-xl font-bold">Моє портфоліо</span>

        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 mt-4 sm:mt-0 text-blue-600">
          <a href="#about"    className="hover:underline">Про мене</a>
          <a href="#skills"   className="hover:underline">Навички</a>
          <a href="#projects" className="hover:underline">Проєкти</a>
          <a href="#contact"  className="hover:underline">Контакти</a>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Toggle theme"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </nav>

      {/* ========== Hero ========== */}
      <header
        data-aos="zoom-in"
        className="text-center py-12 bg-gray-200 dark:bg-gray-700"
      >
        <div className="inline-block bg-blue-800 text-white rounded-full p-6 mb-4 text-3xl font-bold">
          ЯП
        </div>
        <h1 className="text-4xl font-extrabold mb-2">Ярослав Павленко</h1>
        <p className="text-lg mb-4">Вивчаю програмування та створюю корисні проєкти</p>
        <a
          href="https://t.me/AnvilBrain"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition"
        >
          Написати мені
        </a>
      </header>

      {/* ========== Про мене ========== */}
      <section
        id="about"
        data-aos="fade-up"
        className="max-w-3xl mx-auto mt-8 px-4"
      >
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-2">Про мене</h2>
          <p>
            Привіт! Мене звати Ярослав Павленко. Я захоплююся розробкою програмного забезпечення:
            пишу боти для Telegram, створюю Android-ігри та веб-додатки. Люблю швидко вчитися
            новим технологіям і експериментувати з Python, JavaScript, C++ (ESP32) та Kotlin.
          </p>
        </div>
      </section>

      {/* ========== Навички ========== */}
      <section
        id="skills"
        data-aos="fade-up"
        data-aos-delay="100"
        className="max-w-3xl mx-auto mt-12 px-4"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Мої навички</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {skills.map(({ name, icon }, idx) => (
            <div
              key={name}
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
              className="flex flex-col items-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              {icon}
              <span className="mt-2 font-medium text-center">{name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ========== Проєкти ========== */}
      <section
        id="projects"
        data-aos="fade-up"
        data-aos-delay="200"
        className="max-w-3xl mx-auto mt-12 px-4"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Мої проєкти</h2>
        <div className="space-y-4">
          {projects.map(({ title, href, desc, downloadSize }, idx) => (
            <div
              key={title}
              data-aos="fade-right"
              data-aos-delay={idx * 150}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              <a
                href={href}
                className="text-lg font-semibold text-blue-600 hover:underline"
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {title}
              </a>
              <p className="text-sm mt-1">{desc}</p>

              {downloadSize && (
                <a
                  href={href}
                  download
                  className="inline-block mt-3 px-4 py-2 bg-green-500 text-white text-sm rounded hover:bg-green-600 transition"
                >
                  Скачати ({downloadSize})
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ========== Контакт ========== */}
      <section
        id="contact"
        data-aos="fade-up"
        data-aos-delay="300"
        className="max-w-3xl mx-auto mt-12 px-4 text-center"
      >
        <h2 className="text-2xl font-bold mb-4">Зв’язатися зі мною</h2>
        <div className="flex justify-center space-x-6 text-2xl text-gray-700 dark:text-gray-200">
          <a
            href="https://github.com/AnvilBrain"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 dark:hover:text-white"
          >
            <FaGithub />
          </a>
          <a
            href="https://t.me/AnvilBrain"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 dark:hover:text-white"
          >
            <FaTelegram />
          </a>
          <a
            href="mailto:anvilbrain@example.com"
            className="hover:text-gray-900 dark:hover:text-white"
          >
            <FaEnvelope />
          </a>
        </div>
      </section>

      {/* ========== Футер ========== */}
      <footer
        data-aos="fade-up"
        data-aos-delay="400"
        className="mt-16 py-6 text-center text-gray-500 dark:text-gray-400 text-sm"
      >
        © 2025 Ярослав Павленко. Всі права захищені.
      </footer>
    </div>
  )
}

export default App
