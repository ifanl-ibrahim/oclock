<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../index.css">
    <title>Réveil</title>
</head>
<body>
    <main id="rev">
        <h1>RÉVEIL</h1>
        <div id="myBox">
            <div id="time"></div>

            <h3>Configurez votre réveil :</h3>
            <select id="alarmHrs"></select>
            <select id="alarmMins"></select>
            <select id="alarmSecs"></select>

            <div id ="myDiv">
                <select id="mySelect"></select>
            </div>

            <div class="activ">
                <button id="mySetButton">ACTIVER</button>	
                <button id="myClearButton">SUPPRIMER</button>
            </div>
        </div>
        <a href="index.php"><img src="https://img.icons8.com/wired/70/000000/home.png"/></a>
    </main>
    <script src="../js/reveil.js"></script>
</body>
</html>