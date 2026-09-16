// ==========================================
// BANCO COMPLETO DE PREGUNTAS (30 POR NIVEL)
// ==========================================
const QUESTIONS_DB = {
    "A1": [
        { category: "VERBS", question: "She ___ a student.", options: ["is", "are", "am", "be"], correct: "is" },
        { category: "VERBS", question: "They ___ in London.", options: ["live", "lives", "living", "lived"], correct: "live" },
        { category: "ARTICLES", question: "I have ___ apple.", options: ["an", "a", "the", "some"], correct: "an" },
        { category: "PRESENT SIMPLE", question: "He ___ like coffee.", options: ["doesn't", "don't", "isn't", "aren't"], correct: "doesn't" },
        { category: "PRONOUNS", question: "Where ___ you from?", options: ["are", "is", "am", "do"], correct: "are" },
        { category: "PREPOSITIONS", question: "I get up ___ 7 o'clock.", options: ["at", "in", "on", "for"], correct: "at" },
        { category: "COMPARATIVES", question: "My brother is ___ than me.", options: ["taller", "more tall", "tallest", "tall"], correct: "taller" },
        { category: "PLURALS", question: "There are two ___ on the table.", options: ["books", "book", "bookes", "bookies"], correct: "books" },
        { category: "POSSESSIVES", question: "What is ___ name?", options: ["your", "you", "yours", "yourself"], correct: "your" },
        { category: "PRESENT SIMPLE", question: "We ___ go to work on Sundays.", options: ["don't", "doesn't", "aren't", "isn't"], correct: "don't" },
        { category: "MODALS", question: "She can ___ the guitar.", options: ["play", "plays", "playing", "played"], correct: "play" },
        { category: "DEMONSTRATIVES", question: "Look at ___ birds over there.", options: ["those", "this", "that", "these"], correct: "those" },
        { category: "PREPOSITIONS", question: "I am interested ___ music.", options: ["in", "at", "on", "with"], correct: "in" },
        { category: "POSSESSIVES", question: "This is ___ house.", options: ["my", "me", "mine", "myself"], correct: "my" },
        { category: "QUANTIFIERS", question: "How ___ apples do you need?", options: ["many", "much", "long", "far"], correct: "many" },
        { category: "QUANTIFIERS", question: "How ___ milk is left?", options: ["much", "many", "long", "tall"], correct: "much" },
        { category: "PREPOSITIONS", question: "The cat is sleeping ___ the sofa.", options: ["on", "at", "into", "to"], correct: "on" },
        { category: "PAST SIMPLE", question: "Yesterday, it ___ rainy.", options: ["was", "were", "is", "be"], correct: "was" },
        { category: "PRONOUNS", question: "Can you help ___, please?", options: ["me", "I", "my", "mine"], correct: "me" },
        { category: "PRESENT CONTINUOUS", question: "They are ___ football right now.", options: ["playing", "play", "plays", "played"], correct: "playing" },
        { category: "COLLECTIVE NOUNS", question: "A ___ of crows landed on the roof.", options: ["murder", "gaggle", "pod", "pack"], correct: "murder" },
        { category: "PREPOSITIONS", question: "My birthday is ___ July.", options: ["in", "on", "at", "by"], correct: "in" },
        { category: "ADJECTIVES", question: "She has got ___ hair.", options: ["long", "length", "longer", "longest"], correct: "long" },
        { category: "QUANTIFIERS", question: "Is there ___ water in the bottle?", options: ["any", "some", "many", "a"], correct: "any" },
        { category: "POSSESSIVES", question: "We have ___ lunch at 1 PM.", options: ["our", "us", "we", "ours"], correct: "our" },
        { category: "PRESENT SIMPLE", question: "He ___ breakfast every morning.", options: ["eats", "eat", "eating", "ate"], correct: "eats" },
        { category: "ADJECTIVES", question: "These shoes are very ___.", options: ["expensive", "expensiver", "expensivest", "more expensive"], correct: "expensive" },
        { category: "QUANTIFIERS", question: "Do you want ___ tea?", options: ["some", "any", "an", "a"], correct: "some" },
        { category: "POSSESSIVES", question: "Peter is ___ best friend.", options: ["my", "me", "mine", "I"], correct: "my" },
        { category: "DEMONSTRATIVES", question: "Who is ___ boy over there?", options: ["that", "these", "those", "this"], correct: "that" }
    ],
    "A2": [
        { category: "PAST SIMPLE", question: "Yesterday, I ___ a new car.", options: ["bought", "buy", "buying", "buys"], correct: "bought" },
        { category: "COMPARATIVES", question: "Jupiter is ___ than Earth.", options: ["larger", "more large", "largest", "large"], correct: "larger" },
        { category: "FUTURE", question: "If it rains, we ___ at home.", options: ["will stay", "stay", "stayed", "staying"], correct: "will stay" },
        { category: "PAST CONTINUOUS", question: "While I was reading, he ___.", options: ["arrived", "arrives", "arrive", "arriving"], correct: "arrived" },
        { category: "MODALS", question: "You ___ wear a helmet when riding a bike.", options: ["should", "would", "might", "could"], correct: "should" },
        { category: "PRESENT PERFECT", question: "She hasn't finished her homework ___.", options: ["yet", "already", "just", "never"], correct: "yet" },
        { category: "SUPERLATIVES", question: "This movie is ___ than the last one.", options: ["better", "more good", "gooder", "best"], correct: "better" },
        { category: "PRESENT PERFECT", question: "They ___ to Spain three times.", options: ["have been", "go", "went", "going"], correct: "have been" },
        { category: "PAST CONTINUOUS", question: "What ___ you doing at 8 PM last night?", options: ["were", "was", "are", "did"], correct: "were" },
        { category: "FUTURE", question: "I am going ___ a new phone tomorrow.", options: ["to buy", "buying", "buy", "bought"], correct: "to buy" },
        { category: "ADVERBS", question: "He speaks English ___ than his sister.", options: ["more fluently", "fluenter", "fluent", "most fluent"], correct: "more fluently" },
        { category: "MODALS", question: "You ___ bring an umbrella, it looks like rain.", options: ["must", "couldn't", "mustn't", "wouldn't"], correct: "must" },
        { category: "PAST PARTICIPLE", question: "Have you ever ___ a horse?", options: ["ridden", "rode", "ride", "riding"], correct: "ridden" },
        { category: "CONNECTORS", question: "The food was cold, ___ we didn't eat it.", options: ["so", "because", "although", "but"], correct: "so" },
        { category: "GERUNDS", question: "She is looking forward to ___ you.", options: ["meeting", "meet", "met", "meets"], correct: "meeting" },
        { category: "PRESENT PERFECT", question: "How long ___ you lived here?", options: ["have", "do", "did", "are"], correct: "have" },
        { category: "GERUNDS", question: "He gave up ___ last year.", options: ["smoking", "smoke", "smoked", "smokes"], correct: "smoking" },
        { category: "PASSIVE VOICE", question: "This castle ___ built in 1500.", options: ["was", "is", "were", "had"], correct: "was" },
        { category: "VERB PATTERNS", question: "I don't mind ___ early on Mondays.", options: ["waking up", "wake up", "woke up", "woken up"], correct: "waking up" },
        { category: "REPORTED SPEECH", question: "She asked me ___ I lived.", options: ["where", "what", "who", "which"], correct: "where" },
        { category: "QUESTION TAGS", question: "I am taller than him, ___ I?", options: ["aren't", "am not", "don't", "isn't"], correct: "aren't" },
        { category: "INFINITIVES", question: "He promised ___ me tonight.", options: ["to call", "calling", "call", "called"], correct: "to call" },
        { category: "QUANTIFIERS", question: "There aren't ___ people in the room.", options: ["many", "much", "little", "lot"], correct: "many" },
        { category: "ADJECTIVES", question: "We stayed in a ___ hotel.", options: ["comfortable", "comfort", "comfortably", "comforting"], correct: "comfortable" },
        { category: "PURPOSE", question: "I opened the door ___ see who it was.", options: ["to", "for", "so", "because"], correct: "to" },
        { category: "PREPOSITIONS", question: "She left without ___ goodbye.", options: ["saying", "say", "said", "says"], correct: "saying" },
        { category: "PREPOSITIONS", question: "They have lived here ___ 2010.", options: ["since", "for", "from", "during"], correct: "since" },
        { category: "EXPRESSIONS", question: "I am not used to ___ early.", options: ["getting up", "get up", "got up", "gets up"], correct: "getting up" },
        { category: "VOCABULARY", question: "You don't have to pay, it's ___.", options: ["free", "cheap", "expensive", "costly"], correct: "free" },
        { category: "PHRASAL VERBS", question: "What time does the plane ___ off?", options: ["take", "go", "fly", "get"], correct: "take" }
    ],
    "B1": [
        { category: "CONDITIONALS", question: "If I ___ more time, I would travel.", options: ["had", "have", "will have", "would have"], correct: "had" },
        { category: "PASSIVE VOICE", question: "The museum ___ renovated right now.", options: ["is being", "is", "was", "had been"], correct: "is being" },
        { category: "SUBJUNCTIVE", question: "He talked as if he ___ everything.", options: ["knew", "knows", "has known", "will know"], correct: "knew" },
        { category: "PAST PERFECT", question: "By the time we arrived, the film ___.", options: ["had started", "started", "has started", "starts"], correct: "had started" },
        { category: "WISHES", question: "I wish I ___ more languages.", options: ["spoke", "speak", "can speak", "will speak"], correct: "spoke" },
        { category: "RELATIVE CLAUSES", question: "The man ___ lives next door is a doctor.", options: ["who", "which", "whose", "whom"], correct: "who" },
        { category: "MODALS OF DEDUCTION", question: "You ___ have seen him yesterday, he was in Paris.", options: ["couldn't", "mustn't", "wouldn't", "shouldn't"], correct: "couldn't" },
        { category: "GERUNDS", question: "She insisted on ___ for dinner.", options: ["paying", "to pay", "pay", "paid"], correct: "paying" },
        { category: "CONNECTORS", question: "Despite ___ hard, he failed the exam.", options: ["studying", "he studied", "study", "to study"], correct: "studying" },
        { category: "TIME CLAUSES", question: "I'll call you as soon as I ___.", options: ["arrive", "will arrive", "arrived", "am arriving"], correct: "arrive" },
        { category: "RELATIVE CLAUSES", question: "He's the student ___ project won first prize.", options: ["whose", "who", "which", "that"], correct: "whose" },
        { category: "CORRELATIVES", question: "Neither John ___ Mary came to the party.", options: ["nor", "or", "and", "but"], correct: "nor" },
        { category: "WOULD RATHER", question: "I'd rather you ___ smoke in here.", options: ["didn't", "don't", "won't", "haven't"], correct: "didn't" },
        { category: "PASSIVE VOICE", question: "The problem is being ___ by experts.", options: ["investigated", "investigate", "investigating", "investigates"], correct: "investigated" },
        { category: "HAD BETTER", question: "You had better ___ a doctor immediately.", options: ["see", "seeing", "to see", "saw"], correct: "see" },
        { category: "SO / SUCH", question: "It was ___ a cold day that we stayed inside.", options: ["such", "so", "very", "too"], correct: "such" },
        { category: "REPORTED SPEECH", question: "She suggested ___ to the cinema.", options: ["going", "to go", "go", "went"], correct: "going" },
        { category: "RELATIVE CLAUSES", question: "I am looking for a job ___ pays well.", options: ["that", "who", "where", "whose"], correct: "that" },
        { category: "CONDITIONALS", question: "Unless you ___ now, you will be late.", options: ["leave", "don't leave", "will leave", "left"], correct: "leave" },
        { category: "PREPOSITIONS", question: "He was accused of ___ money.", options: ["stealing", "to steal", "steal", "stole"], correct: "stealing" },
        { category: "INFINITIVES", question: "They managed ___ the summit before nightfall.", options: ["to reach", "reaching", "reach", "reached"], correct: "to reach" },
        { category: "VERB PATTERNS", question: "I can't afford ___ a new car this year.", options: ["to buy", "buying", "buy", "bought"], correct: "to buy" },
        { category: "REPORTED SPEECH", question: "He asked me how long I ___ English.", options: ["had been learning", "have learned", "learn", "will learn"], correct: "had been learning" },
        { category: "OBLIGATION", question: "We ought ___ help them with their bags.", options: ["to", "for", "should", "must"], correct: "to" },
        { category: "GERUNDS", question: "She regretted ___ him her secret.", options: ["telling", "to tell", "tell", "told"], correct: "telling" },
        { category: "CONNECTORS", question: "The flight was cancelled due ___ bad weather.", options: ["to", "for", "of", "by"], correct: "to" },
        { category: "INVERSION", question: "Hardly ___ entered the room when the phone rang.", options: ["had I", "I had", "did I", "I did"], correct: "had I" },
        { category: "PREPOSITIONS", question: "I am not accustomed to ___ treated like this.", options: ["being", "be", "been", "to be"], correct: "being" },
        { category: "PHRASAL VERBS", question: "He runs so fast that nobody can keep ___ with him.", options: ["up", "on", "in", "off"], correct: "up" },
        { category: "IN CASE", question: "You should take an umbrella in case it ___.", options: ["rains", "will rain", "rained", "raining"], correct: "rains" }
    ]
};

// CONFIGURACIÓN DE JUEGO Y DAÑOS
const DAMAGE_CORRECT = 10; // Daño al rival por acierto
const DAMAGE_WRONG = 12;   // Castigo por respuesta incorrecta
let p1Hp = 100, p2Hp = 100;
let currentLevel = "A1";
let p1Question = null, p2Question = null;
let timerSeconds = 120;
let timerInterval = null;
let musicOn = false;

// VARIABLES Y DIBUJO CANVAS 2D
let canvas, ctx;
let projectiles = [];

function initCanvas() {
    canvas = document.getElementById('battleCanvas');
    ctx = canvas.getContext('2d');
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    requestAnimationFrame(renderBattlefield);
}

function resizeCanvas() {
    if (!canvas) return;
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;
}

// DIBUJA LOS MUÑECOS DE PALITOS DEL SKETCH
function drawStickman(x, y, color, isLeader = false) {
    ctx.strokeStyle = color;
    ctx.lineWidth = isLeader ? 3 : 2;

    // Cabeza
    ctx.beginPath();
    ctx.arc(x, y - 20, isLeader ? 10 : 7, 0, Math.PI * 2);
    ctx.stroke();

    // Cuerpo
    ctx.beginPath();
    ctx.moveTo(x, y - 13);
    ctx.lineTo(x, y + 10);
    // Brazos
    ctx.moveTo(x - 8, y - 5);
    ctx.lineTo(x + 8, y - 5);
    // Piernas
    ctx.moveTo(x, y + 10);
    ctx.lineTo(x - 7, y + 25);
    ctx.moveTo(x, y + 10);
    ctx.lineTo(x + 7, y + 25);
    ctx.stroke();
}

function renderBattlefield() {
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const centerY = canvas.height * 0.65;

    // DIBUJAR CLAN ROJO (P1 - Izquierda)
    drawStickman(canvas.width * 0.15, centerY, '#ef4444');
    drawStickman(canvas.width * 0.22, centerY - 10, '#ef4444');
    drawStickman(canvas.width * 0.28, centerY, '#ff7777', true); // Líder

    // DIBUJAR CLAN AZUL (P2 - Derecha)
    drawStickman(canvas.width * 0.85, centerY, '#3b82f6');
    drawStickman(canvas.width * 0.78, centerY - 10, '#3b82f6');
    drawStickman(canvas.width * 0.72, centerY, '#60a5fa', true); // Líder

    // ANIMACIÓN DE ATAQUES / FLECHAS (Arcos en el aire)
    projectiles.forEach((p, index) => {
        p.progress += 0.03;
        const currentX = p.startX + (p.targetX - p.startX) * p.progress;
        const arcY = p.startY - Math.sin(p.progress * Math.PI) * 50;

        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(currentX, arcY, 5, 0, Math.PI * 2);
        ctx.fill();

        if (p.progress >= 1) projectiles.splice(index, 1);
    });

    requestAnimationFrame(renderBattlefield);
}

function triggerAttackAnimation(fromPlayer) {
    const startX = fromPlayer === 1 ? canvas.width * 0.28 : canvas.width * 0.72;
    const targetX = fromPlayer === 1 ? canvas.width * 0.72 : canvas.width * 0.28;
    const y = canvas.height * 0.65;

    projectiles.push({
        startX, startY: y, targetX, progress: 0,
        color: fromPlayer === 1 ? '#ef4444' : '#3b82f6'
    });
}

// LÓGICA DEL JUEGO
function getRandomQuestion() {
    const list = QUESTIONS_DB[currentLevel] || QUESTIONS_DB["A1"];
    return list[Math.floor(Math.random() * list.length)];
}

function loadPlayerQuestion(playerNum) {
    const q = getRandomQuestion();
    if (playerNum === 1) p1Question = q;
    else p2Question = q;

    const prefix = playerNum === 1 ? 'p1' : 'p2';
    document.getElementById(`${prefix}-category`).textContent = q.category;
    document.getElementById(`${prefix}-question`).textContent = q.question;

    const grid = document.getElementById(`${prefix}-options`);
    grid.innerHTML = '';

    const shuffled = [...q.options].sort(() => Math.random() - 0.5);
    shuffled.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'btn-option';
        btn.textContent = opt;

        const onTouch = (e) => {
            e.preventDefault();
            handleAnswer(playerNum, opt);
        };
        btn.addEventListener('touchstart', onTouch, { passive: false });
        btn.addEventListener('click', () => handleAnswer(playerNum, opt));

        grid.appendChild(btn);
    });
}

function handleAnswer(playerNum, selectedOpt) {
    if (p1Hp <= 0 || p2Hp <= 0) return;

    const currentQ = playerNum === 1 ? p1Question : p2Question;

    if (selectedOpt === currentQ.correct) {
        // ACIERTO: Aplica -10 HP al oponente
        triggerAttackAnimation(playerNum);
        if (playerNum === 1) p2Hp = Math.max(0, p2Hp - DAMAGE_CORRECT);
        else p1Hp = Math.max(0, p1Hp - DAMAGE_CORRECT);
    } else {
        // FALLO: Castigo de -12 HP al propio jugador
        if (playerNum === 1) p1Hp = Math.max(0, p1Hp - DAMAGE_WRONG);
        else p2Hp = Math.max(0, p2Hp - DAMAGE_WRONG);
    }

    updateHpBars();

    if (p1Hp <= 0 || p2Hp <= 0) {
        endGame(p1Hp > 0 ? 1 : 2);
    } else {
        loadPlayerQuestion(playerNum);
    }
}

function updateHpBars() {
    document.getElementById('p1-hp').style.width = `${p1Hp}%`;
    document.getElementById('p2-hp').style.width = `${p2Hp}%`;
}

function startTimer() {
    clearInterval(timerInterval);
    timerSeconds = 120;
    timerInterval = setInterval(() => {
        timerSeconds--;
        const mins = Math.floor(timerSeconds / 60);
        const secs = timerSeconds % 60;
        document.getElementById('timer-text').textContent = `${mins}:${secs < 10 ? '0' : ''}${secs}`;

        if (timerSeconds <= 0) {
            clearInterval(timerInterval);
            endGame(p1Hp >= p2Hp ? 1 : 2);
        }
    }, 1000);
}

window.changeLevel = function() {
    const select = document.getElementById('cefr-select');
    if (select) {
        currentLevel = select.value;
        loadPlayerQuestion(1);
        loadPlayerQuestion(2);
    }
};

window.toggleMusic = function() {
    musicOn = !musicOn;
    document.getElementById('music-btn').textContent = `music ${musicOn ? 'ON' : 'OFF'}`;
};

function endGame(winnerNum) {
    clearInterval(timerInterval);
    document.getElementById('winner-text').textContent = `¡GANA JUGADOR ${winnerNum}! 🏆`;
    document.getElementById('game-over-modal').classList.remove('hidden');
}

window.restartGame = function() {
    p1Hp = 100; p2Hp = 100;
    updateHpBars();
    document.getElementById('game-over-modal').classList.add('hidden');
    startTimer();
    loadPlayerQuestion(1);
    loadPlayerQuestion(2);
};

// INICIALIZACIÓN
document.addEventListener("DOMContentLoaded", () => {
    initCanvas();
    startTimer();
    loadPlayerQuestion(1);
    loadPlayerQuestion(2);
});
