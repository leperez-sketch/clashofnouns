// Banco de datos pedagógico por niveles
const database = {
    A1: [
        { noun: "car", correct: "blue", wrongs: ["blues", "slowly"], explanation: "Adjectives in English don't have plural form ('blues') and go before the noun." },
        { noun: "house", correct: "big", wrongs: ["beautifully", "run"], explanation: "We need a qualitative adjective like 'big' before the noun." }
    ],
    B1: [
        { noun: "watch", correct: "expensive Swiss", wrongs: ["Swiss expensive", "expensive and Swiss"], explanation: "According to OSASCOMP, Opinion (expensive) goes before Origin (Swiss)." },
        { noun: "table", correct: "round wooden", wrongs: ["wooden round", "round and wood"], explanation: "Shape (round) goes before Material (wooden)." }
    ],
    C1: [
        { noun: "disappointment", correct: "bitter", wrongs: ["heavy", "strong"], explanation: "In English collocations, we say 'bitter disappointment' to express a strong negative feeling." },
        { noun: "rain", correct: "heavy", wrongs: ["strong", "big"], explanation: "The correct high-level collocation for intense rain is 'heavy rain'." }
    ]
};

let currentLevel = "A1";
let currentQuestionIndex = 0;
let playerHP = 100;
let enemyHP = 100;

function loadQuestion() {
    const questions = database[currentLevel];
    if (currentQuestionIndex >= questions.length) {
        currentQuestionIndex = 0; // Reiniciar preguntas si se acaban
    }
    
    const item = questions[currentQuestionIndex];
    document.getElementById("target-noun").innerText = item.noun;
    document.getElementById("feedback").innerText = "";
    
    // Mezclar opciones
    let options = [item.correct, ...item.wrongs];
    options.sort(() => Math.random() - 0.5);
    
    const container = document.getElementById("options-container");
    container.innerHTML = "";
    
    options.forEach(opt => {
        let btn = document.createElement("button");
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(opt, item.correct, item.explanation);
        container.appendChild(btn);
    });
}

function checkAnswer(selected, correct, explanation) {
    const arrow = document.getElementById("arrow");
    const feedback = document.getElementById("feedback");

    if (selected === correct) {
        // Ataque del Jugador
        enemyHP -= 25;
        document.getElementById("enemy-hp").innerText = enemyHP;
        feedback.innerHTML = `<span style="color: #4cd137;">🎯 Correct! ${explanation}</span>`;
        
        // Animación de flecha
        arrow.className = "shooting";
        setTimeout(() => { arrow.className = "hidden"; }, 800);
    } else {
        // Contraataque Enemigo
        playerHP -= 20;
        document.getElementById("player-hp").innerText = playerHP;
        feedback.innerHTML = `<span style="color: #e84118;">❌ Ouch! Wrong choice. Correct answer: "${correct} ${document.getElementById("target-noun").innerText}".</span>`;
    }

    // Verificar fin de partida
    if (enemyHP <= 0) {
        alert("Victory! You destroyed the enemy clan!");
        resetGame();
    } else if (playerHP <= 0) {
        alert("Defeat! The enemy destroyed your castle.");
        resetGame();
    } else {
        currentQuestionIndex++;
        setTimeout(loadQuestion, 2500); // Carga la siguiente después de 2.5s para leer el feedback
    }
}

function changeLevel() {
    currentLevel = document.getElementById("level-select").value;
    resetGame();
}

function resetGame() {
    playerHP = 100;
    enemyHP = 100;
    currentQuestionIndex = 0;
    document.getElementById("player-hp").innerText = playerHP;
    document.getElementById("enemy-hp").innerText = enemyHP;
    loadQuestion();
}

// Iniciar juego por primera vez
loadQuestion();
