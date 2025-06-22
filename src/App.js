import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <header className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold">ProtfolioKNU</h1>
        <p className="mt-2 text-gray-600">
          Портфолио на React + Tailwind. Деплойится на GitHub Pages.
        </p>
      </header>

      <section className="mt-12 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Команды</h2>
        <pre className="bg-white p-4 rounded shadow text-sm">
{`bash
npm install        # поставить зависимости
npm run start      # локальная dev-сборка
npm run deploy     # билд + пуш в gh-pages`}
        </pre>
      </section>
    </div>
  )
}

export default App
