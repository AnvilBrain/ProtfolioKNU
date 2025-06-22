import React from 'react';

function App() {
  const publicUrl = process.env.PUBLIC_URL;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-100 flex flex-col">
      {/* Header */}
      <header className="py-8">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 animate-pulse">
          Моє портфоліо
        </h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 space-y-8">
        {/* Card: Про мене */}
        <section className="bg-white rounded-2xl shadow-lg p-6 transform hover:-translate-y-1 transition">
          <h2 className="text-2xl font-semibold mb-2">Про мене</h2>
          <p>Привіт! Я <strong>Ярослав Павленко</strong>, вивчаю програмування та хочу показати свої проєкти.</p>
        </section>

        {/* Card: Мої проєкти */}
        <section className="bg-white rounded-2xl shadow-lg p-6 transform hover:-translate-y-1 transition">
          <h2 className="text-2xl font-semibold mb-4">Мої проєкти</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <a
                href="https://github.com/AnvilBrain/TelegramBot_AutoPost"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Авто post-бот в Telegram
              </a>
            </li>
            <li>
              <a
                href={`${publicUrl}/downloads/TurnToe.apk`}
                download
                className="text-blue-600 hover:underline"
              >
                Гра на Android (APK)
              </a>
            </li>
            <li>
              <a
                href="https://github.com/AnvilBrain/PortfolioKNU"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Репозиторій цього сайту
              </a>
            </li>
          </ul>
        </section>

        {/* Download button */}
        <div className="text-center">
          <a
            href={`${publicUrl}/downloads/TurnToe.apk`}
            download
            className="inline-block bg-blue-600 text-white font-medium py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition transform hover:scale-105"
          >
            Завантажити гру
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Ярослав Павленко. Всі права захищені.
      </footer>
    </div>
  );
}

export default App;
