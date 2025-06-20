set -e

echo "🔧 Starting build process..."

run_build() {
	echo "📋 Running linter..."
	if npm run lint; then
		echo "✅ Linting passed"
	else
		echo "❌ Linting failed"
		return 1
	fi

	echo "🧪 Running tests..."
	if npm test; then
		echo "✅ Tests passed"
	else
		echo "❌ Tests failed"
		return 1
	fi

	echo "📦 Building production files..."
	if npm run minify; then
		echo "✅ Build completed successfully"
	else
		echo "❌ Build failed"
		return 1
	fi

	echo "🎉 Build process completed!"
}

if [ "$1" = "watch" ]; then
	echo "👀 Starting watch mode..."

	if ! command -v inotifywait &>/dev/null; then
		echo "Installing inotify-tools..."
		sudo apt-get update && sudo apt-get install -y inotify-tools
	fi

	run_build

	while true; do
		echo "👁️  Watching for changes..."
		inotifywait -e modify,create,delete index.html manifest.json sw.js
		echo "📁 Changes detected, rebuilding..."
		run_build
	done
else
	run_build
fi
