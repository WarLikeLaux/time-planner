.PHONY: install lint test build dev clean open help watch dev-fresh status tree

install:
	npm install

lint:
	npm run lint

lint-fix:
	npm run lint:fix

test:
	npm run test

test-watch:
	npm run test:watch

build:
	npm run build

watch:
	./build.sh watch

dev:
	@echo "🚀 Запуск сервера разработки на http://localhost:3000"
	@echo "💡 Если видите старую версию, нажмите Ctrl+Shift+R для принудительного обновления"
	npm run dev

dev-fresh:
	@echo "🧹 Очистка кеша и запуск сервера..."
	@echo "💡 Откройте браузер в режиме инкогнито или нажмите Ctrl+Shift+R"
	@pkill -f live-server || true
	@sleep 1
	npm run dev

start:
	npm run start

clean:
	rm -rf dist/ coverage/ node_modules/

tree:
	@echo "📁 Структура проекта:"
	@if command -v tree > /dev/null; then \
		tree -a -I 'node_modules|.git|coverage' --dirsfirst; \
	else \
		find . -not -path "./node_modules/*" -not -path "./.git/*" -not -path "./coverage/*" | head -20; \
	fi

status:
	@echo "📊 Статус проекта TimePlanner:"
	@echo "🗂️  Основные файлы:"
	@echo "   ✅ index.html    ($(wc -l < index.html) строк)"
	@echo "   ✅ manifest.json (PWA манифест)"
	@echo "   ✅ sw.js         (Service Worker)"
	@echo ""
	@echo "🧪 Тестирование:"
	@if [ -f "tests/planner.test.js" ]; then \
		echo "   ✅ $(grep -c "test\|it" tests/planner.test.js) тестов"; \
	fi
	@echo ""
	@echo "⚙️  Сборка:"
	@if [ -d "dist" ]; then \
		echo "   ✅ dist/ ($(ls dist/ | wc -l) файлов)"; \
	else \
		echo "   📦 dist/ не создан (запустите make build)"; \
	fi
	@if [ -d "node_modules" ]; then \
		echo "   ✅ node_modules/ установлен"; \
	else \
		echo "   📦 node_modules/ не установлен (запустите make install)"; \
	fi

help:
	@echo "Available targets:"
	@echo "  install    - Install dependencies"
	@echo "  lint       - Run linting"
	@echo "  lint-fix   - Fix linting issues"
	@echo "  test       - Run tests"
	@echo "  test-watch - Run tests in watch mode"
	@echo "  build      - Full build process"
	@echo "  watch      - Build with file watching"
	@echo "  dev        - Start development server"
	@echo "  dev-fresh  - Start development server with cache clearing"
	@echo "  start      - Build and start production server"
	@echo "  clean      - Clean build artifacts"
	@echo "  tree       - Show project structure"
	@echo "  status     - Show project status"
	@echo "  help       - Show this help"

all: install lint test build
