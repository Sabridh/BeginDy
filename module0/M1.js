"use strict";

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("bereken").addEventListener("click", function() {
        let getal1 = document.getElementById("getal1").value;
        let getal2 = document.getElementById("getal2").value;

        let nummer1 = parseFloat(getal1);
        let nummer2 = parseFloat(getal2);

        if (isNaN(nummer1) || isNaN(nummer2)) {
            alert("Voer alstublieft geldige getallen in!");
            return;
        }

        let som = nummer1 + nummer2;
        document.getElementById("resultaat").innerText = "Resultaat: " + som;
    });
});
