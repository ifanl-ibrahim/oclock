<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../index.css">
    <link href="https://fonts.googleapis.com/css?family=Nunito+Sans|Orbitron:700&display=swap" rel="stylesheet">
    <title>Minuteur</title>
</head>
<body>
    <main id="minute">
        <h1>MINUTEUR</h1>
            <div class="countdown-clock">
                <div class="timer">
                    <div class="time">
                        <input id="hours" placeholder="HRS" type="text"/>
                        <span>:</span>
                        <input id="minutes" placeholder="MIN" type="text"/>
                        <span>:</span>
                        <input id="seconds" placeholder="SEC" type="text"/>
                    </div>
                    <button id="start">Commencer</button>
                </div>

                <div class="countdown">
                    <div id="counter" class="counter">
                        <div>
                            <div id="display-hours" class="count">00</div>
                            <div class="small-text">Heures</div>
                        </div>
                        <div>
                            <div id="display-minutes"class="count">00</div>
                            <div class="small-text">Minutes</div>
                        </div>
                        <div>
                            <div id="display-seconds" class="count">00</div>
                            <div class="small-text">Secondes</div>
                        </div>
                    </div>
                    <button id="pause">Pause</button>
                    <button id="resume">Reprendre</button>
                </div>
            </div>

            <a href="index.php"><img src="https://img.icons8.com/wired/70/000000/home.png"/></a>

        <script src="../js/minuteur.js"></script>
    </main>
</body>
</html>