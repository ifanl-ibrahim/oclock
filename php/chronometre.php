<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../index.css">
    <title>Chronomètre</title>
</head>
<body>
    <main id="chrono">
        <h1>CHRONOMETRE</h1>
        <div class="container">
            <div class="stopwatch">
                <span id="minute">00</span>:
                <span id="second">00</span>:
                <span id="milli-second">00</span>
            </div>
        </div>

        <ul class="laps"></ul>

        <div class="controls">
            <button onclick="start()" id="start">Start</button>
            <button onclick="stopTimer()" id="stop">Pause</button>
            <button onclick="lap()" id="lap">Lap</button>
            <button onclick="reset()" id="reset">Restart</button>
        </div>

        <a href="index.php"><img src="https://img.icons8.com/wired/70/000000/home.png"/></a>
    </main>
    <script src="../js/chrono.js"></script>
</body>
</html>