document.getElementById("rock").addEventListener("click", function() {
    playGame("Piedra");
});

document.getElementById("paper").addEventListener("click", function() {
    playGame("Papel");
});

document.getElementById("scissors").addEventListener("click", function() {
    playGame("Tijera");
});

function playGame(playerChoice) {
    const choices = ["Piedra", "Papel", "Tijera"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    document.getElementById("player-choice").querySelector("span").textContent = playerChoice;
    document.getElementById("computer-choice").querySelector("span").textContent = computerChoice;

    let result = "";
    if (playerChoice === computerChoice) {
        result = "¡Es un empate!";
    } else if (
        (playerChoice === "Piedra" && computerChoice === "Tijera") ||
        (playerChoice === "Papel" && computerChoice === "Piedra") ||
        (playerChoice === "Tijera" && computerChoice === "Papel")
    ) {
        result = "¡Ganaste!";
    } else {
        result = "¡Perdiste!";
    }

    document.getElementById("winner").textContent = "Resultado: " + result;
}
