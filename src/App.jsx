import React from 'react';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-6">Моё портфолио</h1>

      <section className="max-w-2xl w-full bg-white rounded-xl shadow p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-2">Обо мне</h2>
        <p>Привет! Меня зовут Иван, я учусь программированию и хочу показать свои проекты.</p>
      </section>

      <section className="max-w-2xl w-full bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-semibold mb-2">Мои проекты</h2>
        <ul className="list-disc list-inside">
          <li>Сайт-визитка на React</li>
          <li>Чат-бот на Node.js</li>
          <li>Игра на Canvas API</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
