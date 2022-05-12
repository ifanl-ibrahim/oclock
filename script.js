"use strict";

// Crée une instance d'un objet JavaScript Date qui représente un instant donné de façon indépendante de la plateforme. Les objets Date contiennent un nombre (Number)
// La méthode getTime() renvoie la valeur numérique correspondant au temps pour la date renseignée, d'après le temps universel (c'est-à-dire relative à UTC, une mesure donnée par getTime() sera indépendante du fuseau horaire sur lequel on se trouve).

document.addEventListener('DOMContentLoaded', function loaded() {
    var ouvert = document.querySelector('.btn-ouvre');
    var fermer = document.querySelector('.btn-ferme');
    var nav = document.querySelector('.form-pop');
    var horloge = document.querySelector('#horloge');
    var chronometre = document.querySelector('#chronometre');
    var minuteur = document.querySelector('#minuteur');
    var reveil = document.querySelector('#reveil');
    var btnHorloge = document.querySelector('.horloge');
    var btnChronometre = document.querySelector('.chronometre');
    var btnMinuteur = document.querySelector('.minuteur');
    var btnReveil = document.querySelector('.reveil');
    var audio = new Audio('sons/Dearly_Beloved.mp3')

    // afficher les heures, minutes et secondes toujours avec deux chiffres
    var deuxZero = function(element) {
        if(element < 10) {
            return element = "0" + element;
        } else {
            return element;
        }
    }

    function ouvreToi() {
        nav.style.display = "flex";
    }

    function fermeToi() {
        nav.style.display = "none";
    }

    function afficheHorloge() {
        horloge.style.display = "block";
        chronometre.style.display = "none";
        minuteur.style.display = "none";
        reveil.style.display = "none";
    }

    function afficheChrono() {
        horloge.style.display = "none";
        chronometre.style.display = "block";
        minuteur.style.display = "none";
        reveil.style.display = "none";
    }

    function afficheMinuteur() {
        horloge.style.display = "none";
        chronometre.style.display = "none";
        minuteur.style.display = "block";
        reveil.style.display = "none";
    }

    function afficheRev() {
        horloge.style.display = "none";
        chronometre.style.display = "none";
        minuteur.style.display = "none";
        reveil.style.display = "block";
    }

    ouvert.addEventListener("click", ouvreToi);
    fermer.addEventListener("click", fermeToi);
    btnHorloge.addEventListener("click", afficheHorloge);
    btnChronometre.addEventListener("click", afficheChrono);
    btnMinuteur.addEventListener("click", afficheMinuteur);
    btnReveil.addEventListener("click", afficheRev);
    
/*//////////// Horloge ////////////////////////////////////////*/

    var heuresDiv = document.querySelector('#heures');
    var dateDiv = document.querySelector('#date');

    var affichageHeure = function() {
        // déclaration des variables qui seront utilisiées
        var today, annee, listeMois,  mois, listeJours, jourNumeros, JourNom, heures, minutes, secondes;

        // récupérer la date actuelle
        today = new Date();

        // récupérer l'année
        annee = today.getFullYear();

        // récupérer les mois
        listeMois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
        mois = listeMois[today.getMonth()];

        // récupérer le numéros du jour du mois
        jourNumeros = today.getDate();

        //récupérer ke jour: sachant que la semaine commence Dimanche et non  lundi
        listeJours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
        JourNom = listeJours[today.getDay()];

        // récupérer les heures
        heures = deuxZero(today.getHours());

        // récupérer les minutes
        minutes = deuxZero(today.getMinutes());

        // récupérer les secondes
        secondes = deuxZero(today.getSeconds());

        //affichage dasn nos div du html
        heuresDiv.textContent = heures + ":" + minutes + ":" + secondes;
        dateDiv.textContent = JourNom + "," + jourNumeros + " " + mois + " " + annee;

        //lancer la fonction affichage heure toutes les 1000 ms, soit toute les seconde
        setTimeout(affichageHeure, 1000);
    }

    // lancer la fonction une fois au debut
    affichageHeure();

/*//////////// Chronomètre ////////////////////////////////////////*/

    let chrono = document.querySelector('#chrono');
    let liste = document.querySelector('#tours');
    let resetBtn = document.querySelector('#reset');
    let stopBtn = document.querySelector('#stop');
    let startBtn = document.querySelector('#start');
    let tourBtn = document.querySelector('#temps');

    // definie les valeur de temps par défault
    let heures = 0; 
    let minutes = 0;
    let secondes = 0;

    let timeout;

    // par défautl le chrono de tourn pas = true
    let estArrete = true;

    const demarrer = () => {
        if(estArrete) {
            estArrete = false;
            deliferTemps();
        }
    };

    const arreter = () => {
        if(!estArrete) {
            estArrete = true;
            clearTimeout(timeout) // anunle le timeout en cours pour reprendre de 0 ce qui va evité les décalage
        }
    };

    const deliferTemps = () => {
        if(estArrete) return; // par sécurité si le chrono est arreté le function de s'active pas

        // convertie les chaine de charactère en int
        secondes = parseInt(secondes);
        minutes = parseInt(minutes);
        heures = parseInt(heures);

        secondes++;

        if(secondes == 60) {
            minutes++;
            secondes = 0;
        }

        if(minutes == 60) {
            heures++;
            minutes = 0;
        }

        // afficher un 0 devants en chaine de charactère
        if(secondes < 10) {
            secondes = "0" + secondes;
        }

        if(minutes < 10) {
            minutes = "0" + minutes;
        }

        if(heures < 10) {
            heures = "0" + heures;
        }

        chrono.textContent = `${heures}:${minutes}:${secondes}` // intergre en chaine de charactère dynamique les valeur dans le html

        timeout = setTimeout(deliferTemps, 1000); // rappel la fonction toute les mili-seconde
    };

    const reset = () => {
        chrono.textContent = "00:00:00";
        estArrete = true;
        heures = 0;
        minutes = 0;
        secondes = 0;
        liste.innerHTML = "";
        clearTimeout(timeout);
    };

    const tour = () => {
        var li = document.createElement('li');

        li.innerHTML =chrono.textContent;
        liste.append(li);
    }

    startBtn.addEventListener("click", demarrer);
    stopBtn.addEventListener("click", arreter);
    resetBtn.addEventListener("click", reset);
    tourBtn.addEventListener("click", tour);

/*//////////// Minuteur ////////////////////////////////////////*/

    var heur = document.querySelector('#heur');
    var min = document.querySelector('#min');
    var sec = document.querySelector('#sec');
    var alerte = document.querySelector('#alerte');
    var isStarted = true;
    var stopBtn2 = document.querySelector('#stop2');
    var startBtn2 = document.querySelector('#start2');

    var interval = 0;
    // function minuteur(){

    function start(event) {

         if (sec.value != 0) {
            sec.value--;
        } else if (min.value != 0 && sec.value == 0) {
            sec.value = 59;
            min.value--;
        } else if (heur.value != 0 && min.value == 0) {
            min.value = 59;
            heur.value--;
        } else if(heur.value == 0 && min.value == 0 && sec.value == 0 && isStarted == true) {
            alerte.innerHTML = "fin";
            audio.play();
        }
    interval = setInterval(start, 1000);
    }
// }

    function stop() {
        clearInterval(interval)
        heur.value = 0;
        min.value = 0;
        sec.value = 0;
        alerte.innerHTML = "";
        audio.pause();
        isStarted = false;
    }


    startBtn2.addEventListener("click", start);
    stopBtn2.addEventListener("click", stop);



/*//////////// Réveil ////////////////////////////////////////*/

    var reveil2 = document.querySelector('#heure');
    var text = document.querySelector('input[type=text]');
    var h = document.querySelector('.heur');
    var m = document.querySelector('.min');
    var s = document.querySelector('.sec');
    var alarme = document.querySelector('#alarme');
    var supprimer = document.querySelector('#supprimer');
    var alert = document.querySelector('#alert');
    var span = document.querySelector('span:last-child')
    var table = [];

    var afficheHeure = function() {
        var day, heure, minute, seconde;
        day = new Date()

        heure = deuxZero(day.getHours());
        minute = deuxZero(day.getMinutes());
        seconde = deuxZero(day.getSeconds());
        reveil2.textContent = heure + ":" + minute + ":" + seconde;

        //lancer la fonction affichage heure toutes les 1000 ms, soit toute les seconde
        setTimeout(afficheHeure, 1000);

        if(reveil2.textContent == table) {
            audio.play();
            console.log("fin");
        }
    }

    var afficheReveil = function() {
        if(text.value.length != 0) {
            h = deuxZero(h.value);
            m = deuxZero(m.value);
            s = deuxZero(s.value);

            table.push(`${h}:${m}:${s}`);
            alert.textContent = `${text.value} programmer pour: ${table}`;
            console.log(table)
        }
    }

    var effaceReveil = function() {
        text.value = "";
        h.value = 0;
        m.value = 0;
        s.value = 0;
        alert.value = "";
        table.remove();
        audio.pause();
    }

    afficheHeure();
    alarme.addEventListener("click", afficheReveil);
    supprimer.addEventListener("click", effaceReveil);
})