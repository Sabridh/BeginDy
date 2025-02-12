document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("greetButton").addEventListener("click", function() {
        this.innerText = this.innerText === "Hallo!" ? "Tot ziens!" : "Hallo!";
    });
});
