// ==========================================
// BANCO DE PREGUNTAS EMBEBIDO (Evita error 404)
// ==========================================
const QUESTIONS_DATABASE = {
    "A1": [
        { category: "PRONOUNS", question: "She ___ a teacher.", options: ["is", "are", "am", "be"], correct: "is" },
        { category: "VERBS", question: "They ___ to school every day.", options: ["go", "goes", "going", "gone"], correct: "go" },
        { category: "ARTICLES", question: "I want to eat ___ apple.", options: ["an", "a", "the", "some"], correct: "an" },
        { category: "PRESENT SIMPLE", question: "Do you ___ English?", options: ["speak", "speaks", "speaking", "spoke"], correct: "speak" },
        { category: "PLURALS", question: "I have two ___.", options: ["cats", "cat", "cates", "caties"], correct: "cats" }
    ],
    "A2": [
        { category: "PAST SIMPLE", question: "Yesterday, I ___ a movie.", options: ["watched", "watch", "watching", "watches"], correct: "watched" },
        { category: "COMPARATIVES", question: "An elephant is ___ than a dog.", options: ["bigger", "more big", "biggest", "big"], correct: "bigger" },
        { category: "FUTURE", question: "We are going to ___ Paris.", options: ["visit", "visited", "visiting", "visits"], correct: "visit" },
        { category: "PREPOSITIONS", question: "The book is ___ the table.", options: ["on", "at", "in", "to"], correct: "on" }
    ],
    "B1": [
        { category: "PRESENT PERFECT", question: "I have ___ in Spain for 3 years.", options: ["lived", "live", "living", "lives"], correct: "lived" },
        { category: "CONDITIONALS", question: "If it rains, I ___ stay home.", options: ["will", "would", "had", "did"], correct: "will" },
        { category: "MODALS", question: "You ___ study hard to pass.", options: ["must", "would", "could", "might"], correct: "must" }
    ]
};

// ==========================================
// ESTADO DEL JUEGO
// ==========================================
let currentLevel = "A1";
let currentQuestion = null;
let p1Hp = 100;
let p2Hp = 100;
let combo = 0;

// ==========================================
// FUNCIONES GLOBALES
// ==========================================

// Excursión global para que el HTML detecte el evento onchange
window.changeLevel = function() {
    const levelSelect = document.getElementById("level-select") || document.getElementById("cefr-select") || document.querySelector("select");
    if (levelSelect) {
        currentLevel = levelSelect.value;
        combo = 0;
        loadNextQuestion();
    }
};

window.restartGame = function() {
    p1Hp = 100;
    p2Hp = 100;
    combo = 0;
    updateHPUI();
    
    const modal = document.getElementById("game-over-modal") || document.querySelector(".modal");
    if (modal) modal.classList.add("hidden");
    
    loadNextQuestion();
};

// ==========================================
// LÓGICA DEL JUEGO Y PREGUNTAS
// ==========================================

function getDOMElement(selectors) {
    for (let selector of selectors) {
        const el = document.querySelector(selector);
        if (el) return el;
    }
    return null;
}

function loadNextQuestion() {
    const questionsList = QUESTIONS_DATABASE[currentLevel] || QUESTIONS_DATABASE["A1"];
    const randomIndex = Math.floor(Math.random() * questionsList.length);
    currentQuestion = questionsList[randomIndex];

    // Actualizar Categoría Gramatical
    const categoryEl = getDOMElement([".grammar-category", "#grammar-category", ".category-box", "[data-category]"]);
    if (categoryEl) {
        categoryEl.textContent = currentQuestion.category;
    }

    // Actualizar Texto de la Pregunta (Quita el "Loading question...")
    const questionEl = getDOMElement([".question-box", "#question-text", "#question", ".question"]);
    if (questionEl) {
        // Si el contenedor tiene estructura interna, busca o reemplaza directamente
        const textSpan = questionEl.querySelector("span, p, h2") || questionEl;
        textSpan.textContent = currentQuestion.question;
    }

    // Actualizar Combo
    const comboEl = getDOMElement([".combo-text", "#combo", ".combo"]);
    if (comboEl) {
        comboEl.textContent = `COMBO: ${combo}x`;
    }

    renderOptions();
}

function renderOptions() {
    const optionsContainer = getDOMElement([".options-grid", "#options-container", ".options-box", "#options"]);
    
    if (!optionsContainer) return;
    optionsContainer.innerHTML = "";

    // Mezclar opciones
    const shuffledOptions = [...currentQuestion.options].sort(() => Math.random() - 0.5);

    shuffledOptions.forEach(optionText => {
        const btn = document.createElement("button");
        btn.className = "btn-option";
        btn.textContent = optionText;

        // Soporte táctil inmediato
        const processClick = (e) => {
            e.preventDefault();
            checkAnswer(optionText, 1); // Asignado a P1 por defecto en interacciones generales
        };

        btn.addEventListener("touchstart", processClick, { passive: false });
        btn.addEventListener("click", processClick);

        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(selectedOption, playerNum) {
    if (p1Hp <= 0 || p2Hp <= 0) return;

    if (selectedOption === currentQuestion.correct) {
        // RESPUESTA CORRECTA: Daño al oponente + Aumento de Combo
        combo++;
        if (playerNum === 1) {
            p2Hp = Math.max(0, p2Hp - 25);
        } else {
            p1Hp = Math.max(0, p1Hp - 25);
        }
        updateHPUI();

        if (p1Hp <= 0 || p2Hp <= 0) {
            endGame(playerNum);
        } else {
            loadNextQuestion();
        }
    } else {
        // RESPUESTA INCORRECTA: Pierde vida + Reinicia Combo (Sin pausas)
        combo = 0;
        if (playerNum === 1) {
            p1Hp = Math.max(0, p1Hp - 20);
        } else {
            p2Hp = Math.max(0, p2Hp - 20);
        }
        
        flashRedBackground();
        updateHPUI();

        if (p1Hp <= 0 || p2Hp <= 0) {
            endGame(playerNum === 1 ? 2 : 1);
        } else {
            loadNextQuestion();
        }
    }
}

function updateHPUI() {
    const p1Bar = getDOMElement(["#p1-hp", ".p1-hp-bar", ".hero-hp"]);
    const p2Bar = getDOMElement(["#p2-hp", ".p2-hp-bar", ".boss-hp"]);

    if (p1Bar) p1Bar.style.width = `${p1Hp}%`;
    if (p2Bar) p2Bar.style.width = `${p2Hp}%`;
}

function flashRedBackground() {
    document.body.style.backgroundColor = "#5c1d1d";
    setTimeout(() => {
        document.body.style.backgroundColor = "";
    }, 150);
}

function endGame(winnerNum) {
    const modal = getDOMElement(["#game-over-modal", ".modal"]);
    const winnerText = getDOMElement(["#winner-text", ".winner-title"]);

    if (winnerText) {
        winnerText.textContent = `¡JUGADOR ${winnerNum} GANA! 🏆`;
    }
    if (modal) {
        modal.classList.remove("hidden");
    }
}

// ==========================================
// INICIALIZACIÓN
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    // Sincronizar el nivel actual con el select inicial
    const levelSelect = getDOMElement(["#level-select", "#cefr-select", "select"]);
    if (levelSelect) {
        currentLevel = levelSelect.value || "A1";
        levelSelect.addEventListener("change", window.changeLevel);
    }

    loadNextQuestion();
});
