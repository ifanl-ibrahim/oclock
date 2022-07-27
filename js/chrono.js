// ********** CHRONOMETRE **********


let miliSeconde = 0 , seconde = 0, minute = 0;
let timer ;

let stopwatch = document.querySelector(".stopwatch");
let laps = document.querySelector(".laps");

function start() {
    if(!timer){
        timer = setInterval(run, 10);
    }
}

function run() {
    getTimer();
    miliSeconde++;
    if(miliSeconde == 100){
        miliSeconde = 0;
        seconde++;
    }

    if(seconde == 60){
        seconde = 0;
        minute++;
    }
}

function pause() {
    stopTimer();
}

function reset() {
    stopTimer();
    miliSeconde = 0 ;
    seconde = 0;
    minute = 0;
    getTimer()
}

function stopTimer() {
    clearInterval(timer);
    timer = false;
}

function getTimer() {
    return stopwatch.textContent = (minute < 10 ? "0"+minute : minute) + ":" + (seconde < 10 ? "0"+seconde : seconde ) + ":" + (miliSeconde < 10 ? "0"+miliSeconde: miliSeconde);
}

function lap() {
    if(timer) {
        let li = document.createElement("li");
        li.innerText = getTimer();
        laps.appendChild(li);
    }
}