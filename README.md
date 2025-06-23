# ProtfolioKNU

Портфоліо **Ярослава Павленка** (GitHub: [AnvilBrain](https://github.com/AnvilBrain))

---

## Проєкти

- **Авто post-bot в Telegram**  
  Python-бот для автоматичної публікації  
  Репозиторій: https://github.com/AnvilBrain/TelegramBot_AutoPost

- **TurnToe – гра на Android (APK)**  
  Розроблено на Kotlin в Android Studio  
  Файл APK: `download/TurnToe.apk` (Розмір: 8,5 МБ)

- **ProtfolioKNU – це цей сайт**  
  React + Tailwind CSS портфоліо  
  Репозиторій: https://github.com/AnvilBrain/ProtfolioKNU

---

## Використані технології

- **React**  
- **Tailwind CSS**  
- **AOS** (анімація під час скролу)  
- **JavaScript**, **Python**, **C++ (ESP32)**, **Kotlin**

---

## Запуск локально

1. Клонування репозиторію  
   ```bash
   git clone https://github.com/AnvilBrain/ProtfolioKNU.git
   cd ProtfolioKNU
   ```

2. Встановлення залежностей  
   ```bash
   npm install
   ```

3. Запуск у режимі розробки  
   ```bash
   npm start
   ```

4. Збірка для продакшена  
   ```bash
   npm run build
   ```

---

## Деплой на GitHub Pages

1. Додати скрипти в `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
2. Виконати:
   ```bash
   npm run deploy
   ```
3. Сайт буде доступний за адресою:
   ```
   https://AnvilBrain.github.io/ProtfolioKNU
   ```

---

## Ліцензія

Цей проект ліцензовано під MIT License.  
Деталі у файлі [LICENSE](LICENSE).
