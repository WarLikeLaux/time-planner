<?php

declare(strict_types=1);

if (file_exists(__DIR__ . '/.env')) {
    foreach (file(__DIR__ . '/.env', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) as $line) {
        if (strpos($line, '=') !== false) {
            [$key, $value] = explode('=', $line, 2);
            $_ENV[trim($key)] = trim($value);
        }
    }
}

$secret = $_ENV['GITHUB_SECRET'] ?? '';
$projectDir = $_ENV['PROJECT_DIR'] ?? '/var/www/time-planner';
$branch = $_ENV['GIT_BRANCH'] ?? 'main';

if ($_SERVER['REQUEST_METHOD'] !== 'POST' || !isset($_SERVER['HTTP_X_HUB_SIGNATURE_256'])) {
    http_response_code(400);
    exit;
}

$payload = file_get_contents('php://input');
$signature = 'sha256=' . hash_hmac('sha256', $payload, $secret);

if (!hash_equals($signature, $_SERVER['HTTP_X_HUB_SIGNATURE_256'])) {
    http_response_code(403);
    exit;
}

exec("cd $projectDir && /usr/bin/git pull origin $branch 2>&1", $output, $code);

if ($code === 0) {
    http_response_code(200);
    echo "OK";
} else {
    http_response_code(500);
    $errorOutput = !empty($output) ? implode("\n", $output) : 'Unknown error';
    echo "Failed (exit code $code):\n$errorOutput";
}
