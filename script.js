"use strict";

// Crée une instance d'un objet JavaScript Date qui représente un instant donné de façon indépendante de la plateforme. Les objets Date contiennent un nombre (Number)
// La méthode getTime() renvoie la valeur numérique correspondant au temps pour la date renseignée, d'après le temps universel (c'est-à-dire relative à UTC, une mesure donnée par getTime() sera indépendante du fuseau horaire sur lequel on se trouve).

document.addEventListener('DOMContentLoaded', function loaded() {

/*//////////// Horloge ////////////////////////////////////////*/

    // var heuresDiv = document.querySelector('#heures');
    // var dateDiv = document.querySelector('#date');

    // var affichageHeure = function() {
    //     // déclaration des variables qui seront utilisiées
    //     var today, annee, listeMois,  mois, listeJours, jourNumeros, JourNom, heures, minutes, secondes, deuxChiffres;

    //     // récupérer la date actuelle
    //     today = new Date();

    //     // récupérer l'année
    //     annee = today.getFullYear();

    //     // récupérer les mois
    //     listeMois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    //     mois = listeMois[today.getMonth()];

    //     // récupérer le numéros du jour du mois
    //     jourNumeros = today.getDate();

    //     //récupérer ke jour: sachant que la semaine commence Dimanche et non  lundi
    //     listeJours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    //     JourNom = listeJours[today.getDay()];

    //     // afficher les heures, minutes et secondes toujours avec deux chiffres
    //     deuxChiffres = function(element) {
    //         if(element < 10) {
    //             return element = "0" + element;
    //         } else {
    //             return element;
    //         }
    //     }

    //     // récupérer les heures
    //     heures = deuxChiffres(today.getHours());

    //     // récupérer les minutes
    //     minutes = deuxChiffres(today.getMinutes());

    //     // récupérer les secondes
    //     secondes = deuxChiffres(today.getSeconds());

    //     //affichage dasn nos div du html
    //     heuresDiv.textContent = heures + ":" + minutes + ":" + secondes;
    //     dateDiv.textContent = JourNom + "," + jourNumeros + " " + mois + " " + annee;

    //     //lancer la fonction affichage heure toutes les 1000 ms, soit toute les seconde
    //     setTimeout(affichageHeure, 1000);
    // }

    // // lancer la fonction une fois au debut
    // affichageHeure();

/*//////////// Chronomètre ////////////////////////////////////////*/

    // let chrono = document.querySelector('#chrono');
    // let liste = document.querySelector('#tours');
    // let resetBtn = document.querySelector('#reset');
    // let stopBtn = document.querySelector('#stop');
    // let startBtn = document.querySelector('#start');
    // let tourBtn = document.querySelector('#temps');

    // // definie les valeur de temps par défault
    // let heures = 0; 
    // let minutes = 0;
    // let secondes = 0;

    // let timeout;

    // // par défautl le chrono de tourn pas = true
    // let estArrete = true;

    // const demarrer = () => {
    //     if(estArrete) {
    //         estArrete = false;
    //         deliferTemps();
    //     }
    // };

    // const arreter = () => {
    //     if(!estArrete) {
    //         estArrete = true;
    //         clearTimeout(timeout) // anunle le timeout en cours pour reprendre de 0 ce qui va evité les décalage
    //     }
    // };

    // const deliferTemps = () => {
    //     if(estArrete) return; // par sécurité si le chrono est arreté le function de s'active pas

    //     // convertie les chaine de charactère en int
    //     secondes = parseInt(secondes);
    //     minutes = parseInt(minutes);
    //     heures = parseInt(heures);

    //     secondes++;

    //     if(secondes == 60) {
    //         minutes++;
    //         secondes = 0;
    //     }

    //     if(minutes == 60) {
    //         heures++;
    //         minutes = 0;
    //     }

    //     // afficher un 0 devants en chaine de charactère
    //     if(secondes < 10) {
    //         secondes = "0" + secondes;
    //     }

    //     if(minutes < 10) {
    //         minutes = "0" + minutes;
    //     }

    //     if(heures < 10) {
    //         heures = "0" + heures;
    //     }

    //     chrono.textContent = `${heures}:${minutes}:${secondes}` // intergre en chaine de charactère dynamique les valeur dans le html

    //     timeout = setTimeout(deliferTemps, 1000); // rappel la fonction toute les mili-seconde
    // };

    // const reset = () => {
    //     chrono.textContent = "00:00:00";
    //     estArrete = true;
    //     heures = 0;
    //     minutes = 0;
    //     secondes = 0;
    //     liste.innerHTML = "";
    //     clearTimeout(timeout);
    // };

    // const tour = () => {
    //     var li = document.createElement('li');

    //     li.innerHTML =chrono.textContent;
    //     liste.append(li);
    // }

    // startBtn.addEventListener("click", demarrer);
    // stopBtn.addEventListener("click", arreter);
    // resetBtn.addEventListener("click", reset);
    // tourBtn.addEventListener("click", tour);

/*//////////// Minuteur ////////////////////////////////////////*/

    var heur = document.querySelector('#heur');
    var min = document.querySelector('#min');
    var sec = document.querySelector('#sec');
    var alerte = document.querySelector('#alerte')
    let stopBtn2 = document.querySelector('#stop2');
    let startBtn2 = document.querySelector('#start2');

    var timeout;

    function start() {
        if(heur.value == 0 && min.value == 0 && sec.value ==0) {
            heur.value = 0;
            min.value = 0;
            sec.value = 0;
            alerte.innerHTML = "fin";
            clearInterval(start);
        } else if (sec.value != 0) {
            sec.value--;
        } else if (min.value != 0 && sec.value == 0) {
            sec.value = 59;
            min.value--;
        } else if (heur.value != 0 && min.value == 0) {
            min.value = 60;
            heur.value--;
        } return;
    }

    function stop() {
        heur.value = 0;
        min.value = 0;
        sec.value = 0;
        alerte.innerHTML = "";
        clearInterval(start);
    }

    setTimeout(start, 1000)

    startBtn2.addEventListener("click", start);
    stopBtn2.addEventListener("click", stop);
})