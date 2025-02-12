"use strict";

document.addEventListener("DOMContentLoaded", function () {
    let knop = document.getElementById("themaKnop");
    let body = document.body;

    knop.addEventListener("click", function () {
        // Toggle de klasse 'dark-mode' op het body-element
        body.classList.toggle("dark-mode");

        // Tekst van de knop aanpassen
        if (body.classList.contains("dark-mode")) {
            knop.innerText = "Licht thema";
        } else {
            knop.innerText = "Donker thema";
        }
    });
});
