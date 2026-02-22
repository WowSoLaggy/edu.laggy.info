// Multiplication/division turbo mode: 10 examples, 2-minute timer
const TURBO_TIME_SEC = 2 * 60;

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function generateTurboExamples() {
    const multExamples = [];
    const divExamples = [];
    for (let N = 2; N <= 9; N++) {
        for (let a = 1; a <= 10; a++) {
            multExamples.push({ expr: `${N}×${a}=`, answer: N * a });
            if (a !== N) multExamples.push({ expr: `${a}×${N}=`, answer: a * N });
        }
        for (let b = 1; b <= 10; b++) {
            divExamples.push({ expr: `${N * b}÷${N}=`, answer: b });
        }
    }

    const usedExpr = new Set();
    const examples = [];
    for (let i = 0; i < 5; i++) {
        let ex;
        do {
            ex = multExamples[randInt(0, multExamples.length - 1)];
        } while (usedExpr.has(ex.expr));
        usedExpr.add(ex.expr);
        examples.push(ex);
    }
    for (let i = 0; i < 5; i++) {
        let ex;
        do {
            ex = divExamples[randInt(0, divExamples.length - 1)];
        } while (usedExpr.has(ex.expr));
        usedExpr.add(ex.expr);
        examples.push(ex);
    }
    return shuffle(examples);
}

let examples = [];
let timerInterval = null;
let remainingSec = TURBO_TIME_SEC;
let timeUp = false;
let allCorrectAchieved = false;

function formatTime(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
}

function updateTimerDisplay() {
    const el = document.getElementById('timer-display');
    if (el) el.textContent = formatTime(remainingSec);
}

function onTimeUp() {
    timeUp = true;
    if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
    document.querySelectorAll('.math-input').forEach(input => input.disabled = true);
    if (!allCorrectAchieved) {
        const timerEl = document.getElementById('timer-display');
        if (timerEl) {
            timerEl.textContent = 'Время вышло!';
            timerEl.classList.add('time-up');
        }
    }
}

function startTimer() {
    remainingSec = TURBO_TIME_SEC;
    timeUp = false;
    const timerEl = document.getElementById('timer-display');
    if (timerEl) {
        timerEl.classList.remove('time-up', 'time-success');
    }
    updateTimerDisplay();
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        remainingSec--;
        updateTimerDisplay();
        if (remainingSec <= 0) onTimeUp();
    }, 1000);
}

function renderExamples() {
    allCorrectAchieved = false;
    examples = generateTurboExamples();
    const container = document.getElementById('examples-container');
    container.innerHTML = '';
    examples.forEach((ex, i) => {
        const row = document.createElement('div');
        row.className = 'math-row';
        row.innerHTML = `
            <span class="math-expr">${ex.expr}</span>
            <input type="number" class="math-input" data-answer="${ex.answer}" data-idx="${i + 1}" placeholder="?">
            <span class="math-feedback" data-idx="${i + 1}"></span>
        `;
        container.appendChild(row);
    });
    startTimer();
}

function checkAnswers() {
    if (timeUp) return;
    document.querySelectorAll('.math-input').forEach(input => {
        const row = input.closest('.math-row');
        const fb = row.querySelector('.math-feedback');
        const userAnswer = parseInt(input.value, 10);
        const correct = parseInt(input.dataset.answer, 10);
        if (input.value === '') {
            fb.textContent = '';
            fb.className = 'math-feedback';
            return;
        }
        if (userAnswer === correct) {
            fb.textContent = '✓';
            fb.className = 'math-feedback correct';
            input.classList.add('input-correct');
            input.classList.remove('input-incorrect');
        } else {
            fb.textContent = `✗ (${correct})`;
            fb.className = 'math-feedback incorrect';
            input.classList.add('input-incorrect');
            input.classList.remove('input-correct');
        }
    });
    const inputs = document.querySelectorAll('.math-input');
    const correctCount = Array.from(inputs).filter(inp => inp.classList.contains('input-correct')).length;
    const totalAnswered = Array.from(inputs).filter(inp => inp.value !== '').length;
    if (totalAnswered === 10 && correctCount === 10) {
        allCorrectAchieved = true;
        if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
        document.querySelectorAll('.math-input').forEach(input => input.disabled = true);
        const timerEl = document.getElementById('timer-display');
        if (timerEl) {
            timerEl.textContent = '🎉 Это 10 из 10! 🎉';
            timerEl.classList.remove('time-up');
            timerEl.classList.add('time-success');
        }
        showFanfare();
    }
}

function showFanfare() {
    let banner = document.getElementById('fanfare-banner');
    if (!banner) {
        banner = document.createElement('div');
        banner.id = 'fanfare-banner';
        banner.className = 'fanfare-banner';
        banner.innerHTML = '🎉 Это 10 из 10! 🎉';
        document.body.appendChild(banner);
    }
    banner.style.display = 'flex';
    banner.classList.add('fanfare-show');
    setTimeout(() => {
        banner.classList.remove('fanfare-show');
        setTimeout(() => { banner.style.display = 'none'; }, 500);
    }, 3000);
}

document.addEventListener('DOMContentLoaded', () => {
    renderExamples();
    document.getElementById('check-btn').addEventListener('click', checkAnswers);
    document.getElementById('again-btn').addEventListener('click', () => {
        if (timerInterval) clearInterval(timerInterval);
        renderExamples();
    });
});
