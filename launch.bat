@echo off
echo.
echo ========================================
echo        THE PORTFOLIO LAUNCHER
echo ========================================
echo.
echo Starting local development server...
echo.

REM Check if Python is available
python --version >nul 2>&1
if %errorlevel% == 0 (
    echo Using Python HTTP server...
    echo Portfolio will be available at: http://localhost:8000
    echo Press Ctrl+C to stop the server
    echo.
    python -m http.server 8000
) else (
    REM Check if Node.js is available
    node --version >nul 2>&1
    if %errorlevel% == 0 (
        echo Using Node.js HTTP server...
        echo Installing http-server globally...
        npm install -g http-server
        echo Portfolio will be available at: http://localhost:8080
        echo Press Ctrl+C to stop the server
        echo.
        http-server -p 8080
    ) else (
        echo No suitable server found.
        echo Please install Python or Node.js to run a local server.
        echo.
        echo Alternatively, you can open index.html directly in your browser.
        echo.
        pause
        start index.html
    )
)

pause
