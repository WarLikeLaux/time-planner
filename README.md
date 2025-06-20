# ⏰ TimePlanner

<div align="center">

[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![PWA](https://img.shields.io/badge/PWA-Enabled-purple)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)

> **Интеллектуальный планировщик времени для разработчиков**  
> Научно обоснованная система тайм-менеджмента с математическими расчетами work-life баланса

🇷🇺 [Русский](#-русская-версия) | 🇬🇧 [English](#-english-version)

</div>

---

## � Содержание

- [🎯 Для пользователей](#-для-пользователей)
  - [Что это такое?](#что-это-такое)
  - [Ключевые особенности](#-ключевые-особенности)
  - [Быстрый старт](#-быстрый-старт)
  - [Как пользоваться](#-как-пользоваться)
- [👨‍💻 Для разработчиков](#-для-разработчиков)
  - [Технические особенности](#-технические-особенности)
  - [Система сборки](#-система-сборки)
  - [Инструменты качества кода](#-инструменты-качества-кода)
  - [Структура проекта](#-структура-проекта)
  - [Рабочий процесс](#-рабочий-процесс)
- [🌍 English Version](#-english-version)
- [📄 Лицензия](#-лицензия)

---

# 🇷🇺 Русская версия

## 🎯 Для пользователей

### Что это такое?

**TimePlanner** — профессиональный инструмент для оптимизации личного времени программистов. Основан на исследованиях продуктивности, принципах GTD и научных данных о циркадных ритмах.

### 🔥 Ключевые особенности

- **🧮 Математическая точность** — алгоритмы расчета временных лимитов
- **⚡ Zero dependencies** — чистый JavaScript, мгновенная загрузка  
- **🎨 Modern UI/UX** — адаптивный дизайн с микроанимациями
- **💾 Offline-first** — работает без интернета, данные в LocalStorage
- **📊 Аналитика нагрузки** — предупреждения о переработке и выгорании
- **🏃 Интеграция спорта** — учет физической активности в планах
- **📱 PWA** — устанавливается как приложение на телефон

### 🚀 Быстрый старт

#### Использование онлайн
1. Откройте `index.html` в браузере
2. Разрешите уведомления для таймера
3. Настройте свой рабочий график
4. Начните планировать задачи!

#### Установка как PWA
1. Откройте сайт в Chrome/Safari/Yandex Browser
2. Нажмите кнопку "📱 Установить приложение" 
3. Или через меню браузера: "Установить TimePlanner"
4. Пользуйтесь как обычным приложением!

### 📖 Как пользоваться

1. **Настройка графика** — укажите рабочие часы, сон, спорт
2. **Добавление задач** — создавайте задачи с приоритетами
3. **Таймер Помодоро** — работайте сосредоточенно 25/5 минут
4. **Анализ нагрузки** — следите за балансом work-life
5. **Экспорт данных** — сохраняйте прогресс в JSON

---

## 👨‍💻 Для разработчиков

### 🛠️ Технические особенности

- **Vanilla JavaScript** — без фреймворков, максимальная производительность
- **Modern CSS** — Grid, Flexbox, CSS Custom Properties
- **Progressive Web App** — Service Worker, Web Manifest
- **LocalStorage API** — клиентское хранение данных
- **Notification API** — системные уведомления
- **Responsive Design** — Mobile-first подход

### 🚀 Система сборки

```bash
# Установка зависимостей
make install

# Запуск сервера разработки
make dev

# Если видите старую версию (очистка кеша)
make dev-fresh

# Автоматическая пересборка при изменениях
make watch

# Полная сборка
make build

# Запуск тестов
make test

# Проверка качества кода
make lint
```

### 🔧 Инструменты качества кода

#### Линтинг
- **HTMLHint** — проверка HTML структуры
- **ESLint** — JavaScript код-стайл (Standard)
- **Автоисправление** — `make lint-fix`

#### Тестирование  
- **Jest** — фреймворк тестирования с JSDOM
- **9 тестов** — DOM, темы, хранилище, вычисления, уведомления, PWA
- **Покрытие кода** — отчёты в `coverage/`

#### CI/CD
- **GitHub Actions** — автоматическая проверка при push
- **Pre-commit хуки** — блокировка плохих коммитов

### 📁 Структура проекта

```
├── index.html              # Основное приложение (Single Page App)
├── manifest.json           # PWA манифест  
├── sw.js                   # Service Worker для оффлайн работы
├── package.json            # Зависимости и скрипты
├── Makefile               # Команды сборки
├── build.sh               # Скрипт сборки с watch режимом
├── jest.config.js         # Конфигурация тестов
├── .eslintrc.json         # Настройки ESLint
├── .github/workflows/     # GitHub Actions CI/CD
├── tests/                 # Тесты функциональности
└── scripts/               # Вспомогательные скрипты
```

### 🔄 Рабочий процесс

#### Разработка
```bash
make dev        # Сервер разработки
make watch      # В другом терминале — авто-сборка
```

#### Pre-commit проверки
При каждом `git commit` автоматически:
1. 🔍 Проверяется качество кода (линтинг)
2. 🧪 Запускаются тесты
3. ✅ Если всё ОК → коммит проходит
4. ❌ Если ошибки → коммит блокируется

---

# 🌍 English Version

## 🎯 For Users

### What is TimePlanner?

**TimePlanner** is a professional time optimization tool for developers. Based on productivity research, GTD principles, and scientific data about circadian rhythms.

### 🔥 Key Features

- **🧮 Mathematical precision** — algorithms for calculating time limits
- **⚡ Zero dependencies** — pure JavaScript, instant loading
- **🎨 Modern UI/UX** — responsive design with micro-animations  
- **💾 Offline-first** — works without internet, LocalStorage data
- **📊 Load analytics** — warnings about overwork and burnout
- **🏃 Sports integration** — physical activity accounting in plans
- **📱 PWA** — installs as native app

### 🚀 Quick Start

#### Online Usage
1. Open `index.html` file in browser
2. Allow notifications for timer
3. Configure your work schedule
4. Start planning tasks!

#### PWA Installation
1. Open site in Chrome/Safari/Yandex Browser
2. Click "📱 Install App" button
3. Or via browser menu: "Install TimePlanner"
4. Use as regular application!

### 📖 How to Use

1. **Schedule Setup** — set work hours, sleep, sports
2. **Adding Tasks** — create prioritized tasks
3. **Pomodoro Timer** — work focused 25/5 minutes
4. **Load Analysis** — monitor work-life balance
5. **Data Export** — save progress to JSON

---

## 👨‍💻 For Developers

### 🛠️ Technical Stack

- **Vanilla JavaScript** — no frameworks, maximum performance
- **Modern CSS** — Grid, Flexbox, CSS Custom Properties
- **Progressive Web App** — Service Worker, Web Manifest
- **LocalStorage API** — client-side data storage
- **Notification API** — system notifications
- **Responsive Design** — Mobile-first approach

### 🚀 Build System

```bash
# Install dependencies
make install

# Start development server
make dev

# If you see old version (cache clearing)
make dev-fresh

# Auto-rebuild on changes
make watch

# Full build
make build

# Run tests
make test

# Code quality check
make lint
```

### 🔧 Code Quality Tools

#### Linting
- **HTMLHint** — HTML structure validation
- **ESLint** — JavaScript code style (Standard)
- **Auto-fixing** — `make lint-fix`

#### Testing
- **Jest** — testing framework with JSDOM
- **9 tests** — DOM, themes, storage, calculations, notifications, PWA
- **Code coverage** — reports in `coverage/`

#### CI/CD
- **GitHub Actions** — automatic checks on push
- **Pre-commit hooks** — blocks bad commits

### 🔄 Workflow

#### Development Process
```bash
make dev        # Development server
make watch      # In another terminal — auto-build
```

#### Pre-commit Checks
On every `git commit` automatically:
1. 🔍 Code quality check (linting)
2. 🧪 Tests execution  
3. ✅ If OK → commit passes
4. ❌ If errors → commit blocked

---

## 📄 Лицензия

MIT License - используйте свободно в личных и коммерческих проектах.

---

## 🤝 Участие в разработке

1. Fork проекта
2. Создайте feature branch (`git checkout -b feature/amazing-feature`)
3. Commit изменения (`git commit -m 'Add amazing feature'`)
4. Push в branch (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

---

<div align="center">

**⭐ Поставьте звезду, если проект был полезен!**

Made with ❤️ for developers productivity

[⬆️ Наверх](#-timeplanner)

</div>
```

### 🔧 Инструменты качества кода

#### Линтинг
- **HTMLHint** — проверка HTML структуры
- **ESLint** — JavaScript код-стайл (Standard)
- **Автоисправление** — `make lint-fix`

#### Тестирование  
- **Jest** — фреймворк тестирования с JSDOM
- **9 тестов** — DOM, темы, хранилище, вычисления, уведомления, PWA
- **Покрытие кода** — отчёты в `coverage/`

#### CI/CD
- **GitHub Actions** — автоматическая проверка при push
- **Pre-commit хуки** — блокировка плохих коммитов
- **Мультиверсионность** — тесты на Node.js 16, 18, 20

### 📁 Структура проекта

```
├── index.html              # Основное приложение
├── manifest.json           # PWA манифест  
├── sw.js                   # Service Worker
├── package.json            # Зависимости и скрипты
├── Makefile               # Команды сборки
├── build.sh               # Скрипт сборки с watch режимом
├── jest.config.js         # Конфигурация тестов
├── .eslintrc.json         # Настройки ESLint
├── .htmlhintrc            # Настройки HTMLHint
├── .stylelintrc.json      # Настройки Stylelint
├── live-server.json       # Конфигурация dev-сервера
├── .github/workflows/     # GitHub Actions CI/CD
│   └── ci.yml            # Автоматическая проверка кода
├── .git/hooks/            # Git хуки
│   └── pre-commit        # Проверка перед коммитом
├── .vscode/               # Настройки VS Code
│   └── tasks.json        # Задачи для разработки
├── scripts/               # Вспомогательные скрипты
│   └── safe-remove-comments.sh  # Безопасное удаление комментариев
├── tests/                 # Тесты
│   ├── setup.js          # Настройка тестовой среды
│   └── planner.test.js   # Основные тесты
├── dist/                  # Собранные файлы (создаётся автоматически)
├── node_modules/          # Зависимости (создаётся автоматически)
├── coverage/              # Отчёты покрытия тестами (создаётся автоматически)
├── LICENSE                # Лицензия MIT
├── CONTRIBUTING.md        # Руководство для контрибьюторов
└── README.md              # Этот файл
```

#### Назначение ключевых файлов

**🎯 Основные файлы:**
- `index.html` — Single Page Application, содержит всю логику
- `manifest.json` — настройки PWA (иконки, название, тема)
- `sw.js` — Service Worker для оффлайн работы и кеширования

**⚙️ Конфигурация сборки:**
- `package.json` — зависимости для разработки и скрипты
- `Makefile` — удобные команды (`make dev`, `make build`, etc.)
- `build.sh` — скрипт с watch режимом для автоматической пересборки

**🧪 Тестирование и качество:**
- `jest.config.js` — настройки Jest тестирования
- `.eslintrc.json` — правила для JavaScript кода
- `.htmlhintrc` — проверка HTML структуры
- `tests/` — тесты функциональности

**🤖 Автоматизация:**
- `.github/workflows/ci.yml` — CI/CD pipeline в GitHub Actions
- `.git/hooks/pre-commit` — блокирует плохие коммиты
- `.vscode/tasks.json` — интеграция с VS Code

**📦 Генерируемые папки:**
- `dist/` — минифицированные файлы для продакшена
- `node_modules/` — зависимости npm
- `coverage/` — отчёты о покрытии тестами
```

### 🔄 Рабочий процесс

#### Разработка
1. **Запуск окружения:**
   ```bash
   make dev        # Сервер разработки
   make watch      # В другом терминале — авто-сборка
   ```

2. **Написание кода:**
   - Редактируете файлы
   - Сохраняете → автоматическая пересборка
   - Проверяете в браузере

3. **Если старая версия в браузере:**
   ```bash
   # В браузере
   Ctrl + Shift + R  # принудительное обновление
   
   # Или перезапуск сервера
   make dev-fresh
   ```

#### Pre-commit проверки
При каждом `git commit` автоматически:
1. 🔍 Проверяется качество кода (линтинг)
2. 🧪 Запускаются тесты
3. ✅ Если всё ОК → коммит проходит
4. ❌ Если ошибки → коммит блокируется

```bash
git add .
git commit -m "Добавил новую функцию"
# → Автоматически запустится линтинг и тесты
# → Коммит пройдёт только при успешных проверках
```

#### GitHub CI/CD
При `git push` автоматически запускается:
- Тестирование на Node.js 16, 18, 20
- Проверка качества кода
- Сборка проекта
- Отчёты о покрытии тестами

### 🐛 Решение проблем

| Проблема | Решение |
|----------|---------|
| Старая версия в браузере | `Ctrl+Shift+R` или `make dev-fresh` |
| Коммит заблокирован | `make lint-fix` → исправить ошибки → попробовать снова |
| Тесты не проходят | `make test` → посмотреть ошибки → исправить |
| Сборка не работает | `make clean` → `make install` → `make build` |

### 📊 Статистика проекта

- **~4000 строк кода** — компактное, но функциональное решение
- **9 автотестов** — покрытие основного функционала
- **0 зависимостей** — только dev-зависимости для сборки
- **PWA готово** — может работать оффлайн
- **Мультиязычность** — русский/английский

---

## 🌍 For English Users

### 🎯 What is TimePlanner?

**TimePlanner** is a professional time optimization tool for developers. Based on productivity research, GTD principles, and scientific data about circadian rhythms.

### 🔥 Key Features

- **🧮 Mathematical precision** — algorithms for calculating time limits
- **⚡ Zero dependencies** — pure JavaScript, instant loading
- **🎨 Modern UI/UX** — responsive design with micro-animations  
- **💾 Offline-first** — works without internet, LocalStorage data
- **📊 Load analytics** — warnings about overwork and burnout
- **🏃 Sports integration** — physical activity accounting in plans
- **📱 PWA** — installs as native app

### 🚀 Quick Start

#### Online Usage
1. Open `index.html` file in browser
2. Allow notifications for timer
3. Configure your work schedule
4. Start planning tasks!

#### PWA Installation
1. Open site in Chrome/Safari
2. Click "Install App" button
3. Or via browser menu: "Install TimePlanner"
4. Use as regular application!

### 📖 How to Use

1. **Schedule Setup** — set work hours, sleep, sports
2. **Adding Tasks** — create prioritized tasks
3. **Pomodoro Timer** — work focused 25/5 minutes
4. **Load Analysis** — monitor work-life balance
5. **Data Export** — save progress to JSON

---

## 👨‍💻 For Developers (English)

### 🛠️ Technical Stack

- **Vanilla JavaScript** — no frameworks, maximum performance
- **Modern CSS** — Grid, Flexbox, CSS Custom Properties
- **Progressive Web App** — Service Worker, Web Manifest
- **LocalStorage API** — client-side data storage
- **Notification API** — system notifications
- **Responsive Design** — Mobile-first approach

### 🚀 Build System

Modern build system with automated code quality:

#### Development Quick Start
```bash
# Install dependencies
make install

# Start development server
make dev

# If you see old version (cache clearing)
make dev-fresh

# Auto-rebuild on changes
make watch
```

#### Main Commands
```bash
make dev        # Development server (http://localhost:3000)
make dev-fresh  # Server with browser cache clearing
make build      # Full build (linting + tests + minification)
make watch      # Auto-rebuild on file changes
make test       # Run tests
make test-watch # Tests in watch mode
make lint       # Code quality check
make lint-fix   # Auto-fix code issues
make clean      # Clean build artifacts
```

### 🔧 Code Quality Tools

#### Linting
- **HTMLHint** — HTML structure validation
- **ESLint** — JavaScript code style (Standard)
- **Auto-fixing** — `make lint-fix`

#### Testing
- **Jest** — testing framework with JSDOM
- **9 tests** — DOM, themes, storage, calculations, notifications, PWA
- **Code coverage** — reports in `coverage/`

#### CI/CD
- **GitHub Actions** — automatic checks on push
- **Pre-commit hooks** — blocks bad commits
- **Multi-version** — tests on Node.js 16, 18, 20

### 🔄 Workflow

#### Development Process
1. **Start environment:**
   ```bash
   make dev        # Development server
   make watch      # In another terminal — auto-build
   ```

2. **Write code:**
   - Edit files
   - Save → automatic rebuild
   - Check in browser

3. **If browser shows old version:**
   ```bash
   # In browser
   Ctrl + Shift + R  # force refresh
   
   # Or restart server
   make dev-fresh
   ```

#### Pre-commit Checks
On every `git commit` automatically:
1. 🔍 Code quality check (linting)
2. 🧪 Tests execution  
3. ✅ If OK → commit passes
4. ❌ If errors → commit blocked

#### GitHub CI/CD
On `git push` automatically runs:
- Testing on Node.js 16, 18, 20
- Code quality verification
- Project build
- Test coverage reports

---

## 📄 Лицензия / License

MIT License - используйте свободно в личных и коммерческих проектах.

---

## 🤝 Участие в разработке / Contributing

1. Fork проекта
2. Создайте feature branch (`git checkout -b feature/amazing-feature`)
3. Commit изменения (`git commit -m 'Add amazing feature'`)
4. Push в branch (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

**Перед коммитом автоматически запустятся проверки качества кода!**

---

## ✨ Авторы / Authors

- **Разработчик:** [@WarLikeLaux](https://github.com/WarLikeLaux)
- **Система сборки:** автоматизированная разработка

---

<div align="center">

**⭐ Поставьте звезду, если проект был полезен!**

Made with ❤️ for developers productivity

</div>
