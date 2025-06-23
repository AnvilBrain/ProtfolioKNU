// src/App.js
import React, { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import TurnToeAPK from './download/TurnToe.apk'

import {
  FaBars,
  FaTimes,
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Инициализация AOS
  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  // Тумблер тёмной темы
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  const navLinks = [
    { href: '#about',    label: 'Про мене' },
    { href: '#skills',   label: 'Навички' },
    { href: '#projects', label: 'Проєкти' },
    { href: '#contact',  label: 'Контакти' },
  ]

  const skills = [
    { name: 'JavaScript',   icon: <FaJsSquare   size={32} className="text-yellow-500" /> },
    { name: 'Python',       icon: <SiPython     size={32} className="text-blue-500"   /> },
    { name: 'C++ / ESP32',  icon: <SiCplusplus  size={32} className="text-purple-600" /> },
    { name: 'Kotlin',       icon: <SiKotlin     size={32} className="text-indigo-500" /> },
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
      desc:  'Розроблена на Kotlin',
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
      <nav className="bg-white dark:bg-gray-800 shadow" data-aos="fade-down">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <span className="text-xl font-bold">Моє портфоліо</span>

          {/* Десктопное меню */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map(({ href, label }) => (
              <a key={href} href={href} className="hover:underline">
                {label}
              </a>
            ))}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>

          {/* Мобильное меню */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 mr-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Выпадающее мобильное меню */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
            <ul className="flex flex-col px-4 py-4 space-y-2">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="block py-2 hover:underline"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* Hero */}
      <header
        className="text-center py-16 bg-gray-200 dark:bg-gray-700"
        data-aos="zoom-in"
      >
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
      <section
        id="about"
        className="container mx-auto mt-12 px-6"
        data-aos="fade-up"
      >
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-2">Про мене</h2>
          <p>
            Привіт! Мене звати Ярослав Павленко. Я захоплююся розробкою програмного забезпечення:
            пишу боти для Telegram, створюю Android-ігри та веб-додатки. Люблю швидко вчитися новим
            технологіям і експериментувати з Python, JavaScript, C++ (ESP32) та Kotlin.
          </p>
        </div>
      </section>

      {/* Навички */}
      <section
        id="skills"
        className="container mx-auto mt-12 px-6"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Мої навички</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {skills.map(({ name, icon }, idx) => (
            <div
              key={name}
              className="flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
            >
              {icon}
              <span className="mt-2 font-medium text-center">{name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Проєкти */}
      <section
        id="projects"
        className="container mx-auto mt-12 px-6"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Мої проєкти</h2>
        <div className="space-y-6">
          {projects.map(({ title, href, desc, downloadSize }, idx) => (
            <div
              key={title}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
              data-aos="fade-right"
              data-aos-delay={idx * 150}
            >
              <a
                href={href}
                className="text-lg font-semibold text-blue-600 hover:underline"
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                download={downloadSize ? true : undefined}
              >
                {title}
              </a>
              <p className="text-sm mt-1">{desc}</p>
              {downloadSize && (
                <span className="text-xs text-gray-500 dark:text-gray-400 mt-2 block">
                  Розмір: {downloadSize}
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Контакт */}
      <section
        id="contact"
        className="container mx-auto mt-12 px-6 text-center"
        data-aos="fade-up"
        data-aos-delay="300"
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
            href="https://t.me/Anvil_pv"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 dark:hover:text-white"
          >
            <FaTelegram />
          </a>
          <a
            href="mailto:anvilbrain55@gmail.com"
            className="hover:text-gray-900 dark:hover:text-white"
          >
            <FaEnvelope />
          </a>
        </div>
      </section>

      {/* Футер */}
      <footer
        className="mt-16 py-6 text-center text-gray-500 dark:text-gray-400 text-sm"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        © 2025 Ярослав Павленко. Всі права захищені.
      </footer>
    </div>
  )
}

export default App
