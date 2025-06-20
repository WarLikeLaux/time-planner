#!/bin/bash

# TimePlanner v2.0 Setup and Test Script
echo "🚀 TimePlanner v2.0 - Enhanced Features Setup"
echo "============================================="

# Function to check if command exists
command_exists() {
	command -v "$1" >/dev/null 2>&1
}

# Check for required tools
echo "🔍 Checking system requirements..."

if command_exists python3; then
	echo "✅ Python3 found"
	SERVER_CMD="python3 -m http.server 8080"
elif command_exists python; then
	echo "✅ Python found"
	SERVER_CMD="python -m SimpleHTTPServer 8080"
elif command_exists node; then
	echo "✅ Node.js found"
	if command_exists npx; then
		SERVER_CMD="npx http-server -p 8080"
	else
		echo "⚠️  npx not found, install http-server globally: npm install -g http-server"
		SERVER_CMD="http-server -p 8080"
	fi
else
	echo "❌ No suitable web server found. Please install Python or Node.js"
	exit 1
fi

echo ""
echo "🌐 Starting local web server..."
echo "📍 URL: http://localhost:8080"
echo "🔧 Server: $SERVER_CMD"
echo ""
echo "📝 Test the new features:"
echo "  • PWA Installation - Look for install button in header"
echo "  • Dark Theme - Toggle with moon button"
echo "  • Export/Import - Use data management buttons"
echo "  • Enhanced Timer - Try the Pomodoro functionality"
echo "  • Accessibility - Navigate with keyboard (Tab key)"
echo ""
echo "⚠️  Note: For PWA features, use HTTPS or localhost"
echo "💡 Tip: Open browser dev tools to see Service Worker logs"
echo ""
echo "Press Ctrl+C to stop the server"
echo "========================================"

# Change to script directory
cd "$(dirname "$0")"

# Start the server
$SERVER_CMD
