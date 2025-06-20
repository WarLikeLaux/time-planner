# ⏰ TimePlanner

<div align="center">

[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![PWA](https://img.shields.io/badge/PWA-Enabled-purple)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)

> **Intelligent time planner for developers**  
> Science-based time management system with mathematical work-life balance calculations

🇷🇺 [Русский](README.md) | 🇬🇧 [English](#-english-version)

</div>

---

# 🇬🇧 English Version

## 📋 Table of Contents

- [🎯 For Users](#-for-users)
  - [What is TimePlanner?](#what-is-timeplanner)
  - [Key Features](#-key-features)
  - [Quick Start](#-quick-start)
  - [How to Use](#-how-to-use)
- [👨‍💻 For Developers](#-for-developers)
  - [Technical Stack](#️-technical-stack)
  - [Development Quick Start](#-development-quick-start)
  - [Build System](#-build-system)
  - [Code Quality Tools](#-code-quality-tools)
  - [Project Structure](#-project-structure)
  - [Workflow](#-workflow)
- [📄 License](#-license)
- [🤝 Contributing](#-contributing)

---

## 🎯 For Users

### What is TimePlanner?

**TimePlanner** is a professional time optimization tool for developers. Based on productivity research, GTD principles, and scientific data about circadian rhythms.

[⬆️ Back to contents](#-table-of-contents)

### 🔥 Key Features

- **🧮 Mathematical precision** — algorithms for calculating time limits
- **⚡ Zero dependencies** — pure JavaScript, instant loading
- **🎨 Modern UI/UX** — responsive design with micro-animations  
- **💾 Offline-first** — works without internet, LocalStorage data
- **📊 Load analytics** — warnings about overwork and burnout
- **🏃 Sports integration** — physical activity accounting in plans
- **📱 PWA** — installs as native app

[⬆️ Back to contents](#-table-of-contents)

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

[⬆️ Back to contents](#-table-of-contents)

### 📖 How to Use

1. **Schedule Setup** — set work hours, sleep, sports
2. **Adding Tasks** — create prioritized tasks
3. **Pomodoro Timer** — work focused 25/5 minutes
4. **Load Analysis** — monitor work-life balance
5. **Data Export** — save progress to JSON

[⬆️ Back to contents](#-table-of-contents)

---

## 👨‍💻 For Developers

### 🛠️ Technical Stack

- **Vanilla JavaScript** — no frameworks, maximum performance
- **Modern CSS** — Grid, Flexbox, CSS Custom Properties
- **Progressive Web App** — Service Worker, Web Manifest
- **LocalStorage API** — client-side data storage
- **Notification API** — system notifications
- **Responsive Design** — Mobile-first approach

[⬆️ Back to contents](#-table-of-contents)

### 🚀 Development Quick Start

```bash
# Install dependencies
make install

# Start development server
make dev

# Auto-rebuild on changes
make watch
```

[⬆️ Back to contents](#-table-of-contents)

### 🔧 Build System

#### Main Commands
```bash
make dev        # Development server (http://localhost:3000)
make dev-fresh  # Server with browser cache clearing
make build      # Full build (linting + tests + minification)
make watch      # Auto-rebuild on file changes
make test       # Run tests
make lint       # Code quality check
make lint-fix   # Auto-fix code issues
make clean      # Clean build artifacts
```

#### If you see old version in browser
```bash
# In browser: Ctrl + Shift + R
# Or restart server:
make dev-fresh
```

[⬆️ Back to contents](#-table-of-contents)

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

[⬆️ Back to contents](#-table-of-contents)

### 📁 Project Structure

```
├── index.html              # Main application (SPA)
├── manifest.json           # PWA manifest  
├── sw.js                   # Service Worker for offline
├── package.json            # Dependencies and scripts
├── Makefile               # Build commands
├── build.sh               # Build script with watch
├── jest.config.js         # Test configuration
├── .eslintrc.json         # ESLint settings
├── .github/workflows/     # GitHub Actions CI/CD
├── tests/                 # Test files
└── scripts/               # Helper scripts
```

#### Key Files for Developers

**🎯 Main:**
- `index.html` — Single Page Application, all logic
- `manifest.json` — PWA settings (icons, name, theme)
- `sw.js` — Service Worker for offline and caching

**⚙️ Build:**
- `Makefile` — convenient commands (`make dev`, `make build`)
- `build.sh` — script with watch for auto-rebuild
- `package.json` — dev dependencies and scripts

**🧪 Quality:**
- `jest.config.js` — Jest settings
- `.eslintrc.json` — JavaScript rules
- `tests/` — functional tests

[⬆️ Back to contents](#-table-of-contents)

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

#### GitHub CI/CD
On `git push` automatically runs:
- Testing on Node.js 16, 18, 20
- Code quality verification
- Project build
- Test coverage reports

[⬆️ Back to contents](#-table-of-contents)

---

## 📄 License

MIT License - use freely in personal and commercial projects.

[⬆️ Back to contents](#-table-of-contents)

---

## 🤝 Contributing

1. Fork the project
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

**Code quality checks will run automatically before commit!**

[⬆️ Back to contents](#-table-of-contents)

---

<div align="center">

**⭐ Star if the project was helpful!**

Made with ❤️ for developers productivity

[⬆️ Back to top](#-timeplanner)

</div>
