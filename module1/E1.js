"use strict";

// Wacht tot de pagina geladen is
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("startQuiz").addEventListener("click", function() {
        alert("Welkom bij de quiz!");

        // Vraag naam
        let naam;
        while (!naam) {
            naam = prompt("Wat is je naam?");
            if (naam === null) return; // Stop als de gebruiker annuleert
            naam = naam.trim();
        }

        alert("Hallo " + naam + ", beantwoord de vragen om je score te zien!");

        let score = 0;

        // Functie om een geldige invoer te krijgen
        function vraagStellen(vraag, correctAntwoord) {
            let antwoord;
            while (!antwoord) {
                antwoord = prompt(vraag);
                if (antwoord === null) return null; // Stop als de gebruiker annuleert
                antwoord = antwoord.trim().toLowerCase();
            }
            if (antwoord === correctAntwoord) {
                alert("Goed gedaan!");
                return 1;
            } else {
                alert("Fout! Het juiste antwoord is: " + correctAntwoord);
                return 0;
            }
        }

        // Vraag 1
        let punten1 = vraagStellen("Wat is de hoofdstad van Frankrijk?", "parijs");
        if (punten1 === null) return; // Stop als de gebruiker annuleert
        score += punten1;

        // Vraag 2
        let punten2 = vraagStellen("Wat is de waarde van 2 + 2 in JavaScript?", "4");
        if (punten2 === null) return;
        score += punten2;

        // Vraag 3
        let punten3 = vraagStellen("Welke bestandsuitbreiding wordt gebruikt voor een JavaScript-bestand?", ".js");
        if (punten3 === null) return;
        score += punten3;

        // Resultaat weergeven op de pagina
        let eindbericht = naam + ", je hebt " + score + " / 3 punten behaald.";
        alert(eindbericht);
        document.getElementById("resultaat").innerText = eindbericht;
    });
});
