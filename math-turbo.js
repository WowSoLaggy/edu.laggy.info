// Turbo mode: 10 mixed examples, 5-minute timer
const MIN = 10;
const MAX = 99;
const RESULT_MAX = 100;
const TURBO_TIME_SEC = 5 * 60;  // 5 minutes

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

// One-step generators
const oneStepGens = [
    () => {
        const a = randInt(MIN, MAX);
        const b = randInt(MIN, Math.min(RESULT_MAX - a, MAX));
        return { expr: `${a}+${b}=`, answer: a + b };
    },
    () => {
        const a = randInt(MIN, MAX);
        const b = randInt(MIN, a);
        return { expr: `${a}-${b}=`, answer: a - b };
    }
];

// Two-step generators
const twoStepGens = [
    () => {
        const a = randInt(MIN, MAX);
        const b = randInt(MIN, Math.min(RESULT_MAX - a, MAX));
        const c = randInt(MIN, Math.min(a + b - 1, MAX));
        const ans = a + b - c;
        if (ans < 0 || a + b > RESULT_MAX) return null;
        return { expr: `${a}+${b}-${c}=`, answer: ans };
    },
    () => {
        const a = randInt(MIN, MAX);
        const b = randInt(MIN, a);
        const c = randInt(MIN, Math.min(RESULT_MAX - (a - b), MAX));
        const ans = a - b + c;
        if (ans > RESULT_MAX) return null;
        return { expr: `${a}-${b}+${c}=`, answer: ans };
    },
    () => {
        const a = randInt(MIN, MAX);
        const b = randInt(MIN, Math.min(RESULT_MAX - a - MIN, MAX));
        const c = randInt(MIN, RESULT_MAX - a - b);
        const ans = a + b + c;
        if (ans > RESULT_MAX) return null;
        return { expr: `${a}+${b}+${c}=`, answer: ans };
    },
    () => {
        const a = randInt(MIN + 30, MAX);
        const b = randInt(MIN, Math.min(a - 15, MAX));
        const c = randInt(MIN, Math.min(a - b - 10, MAX));
        const ans = a - (b + c);
        if (ans < 0) return null;
        return { expr: `${a}-(${b}+${c})=`, answer: ans };
    },
    () => {
        const a = randInt(MIN + 30, MAX);
        const b = randInt(MIN, Math.min(a - 15, MAX));
        const c = randInt(MIN, b - 5);
        if (c >= b) return null;
        const ans = a - (b - c);
        if (ans < 0 || ans > RESULT_MAX) return null;
        return { expr: `${a}-(${b}-${c})=`, answer: ans };
    }
];

// Three-step generators
const threeStepGens = [
    () => {
        const a = randInt(MIN, MAX);
        const b = randInt(MIN, a);
        const c = randInt(MIN, Math.min(RESULT_MAX - (a - b) - MIN, MAX));
        const d = randInt(MIN, RESULT_MAX - (a - b + c));
        const ans = a - b + (c + d);
        if (ans < 0 || ans > RESULT_MAX || c + d > RESULT_MAX) return null;
        return { expr: `${a}-${b}+(${c}+${d})=`, answer: ans };
    },
    () => {
        const a = randInt(MIN, MAX);
        const b = randInt(MIN, MAX);
        const c = randInt(MIN, b);
        const d = randInt(MIN, Math.min(RESULT_MAX - (a - (b - c)), MAX));
        const ans = a - (b - c) + d;
        if (ans < 0 || ans > RESULT_MAX) return null;
        return { expr: `${a}-(${b}-${c})+${d}=`, answer: ans };
    },
    () => {
        const a = randInt(MIN, MAX);
        const b = randInt(MIN, Math.min(RESULT_MAX - a - MIN, MAX));
        const sum = a + b;
        if (sum > RESULT_MAX || sum < MIN + MIN) return null;
        const c = randInt(MIN, Math.min(sum - MIN, MAX));
        const d = randInt(MIN, sum - c);
        const ans = sum - (c + d);
        if (ans < 0 || c + d > sum) return null;
        return { expr: `${a}+${b}-(${c}+${d})=`, answer: ans };
    },
    () => {
        const a = randInt(MIN, MAX);
        const b = randInt(MIN, Math.min(RESULT_MAX - a - MIN, MAX));
        const c = randInt(MIN, RESULT_MAX - a - b);
        const d = randInt(MIN, Math.min(a + b + c - 10, MAX));
        const ans = a + b + c - d;
        if (ans < 0 || a + b + c > RESULT_MAX) return null;
        return { expr: `${a}+${b}+${c}-${d}=`, answer: ans };
    },
    () => {
        const a = randInt(MIN, MAX);
        const b = randInt(MIN, a);
        const c = randInt(MIN, Math.min(RESULT_MAX - (a - b) - MIN, MAX));
        const d = randInt(MIN, RESULT_MAX - (a - b) - c);
        const ans = a - b + c + d;
        if (ans > RESULT_MAX) return null;
        return { expr: `${a}-${b}+${c}+${d}=`, answer: ans };
    }
];

function generateTurboExamples() {
    const examples = [];
    const seen = new Set();
    const allGens = [...oneStepGens, ...twoStepGens, ...threeStepGens];

    let attempts = 0;
    while (examples.length < 10 && attempts < 500) {
        attempts++;
        const gen = allGens[randInt(0, allGens.length - 1)];
        const ex = gen();
        if (ex && ex.answer >= 0 && ex.answer <= RESULT_MAX && !seen.has(ex.expr)) {
            seen.add(ex.expr);
            examples.push(ex);
        }
    }

    return shuffle(examples);
}

let examples = [];
let timerInterval = null;
let remainingSec = TURBO_TIME_SEC;
let timeUp = false;

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
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    document.querySelectorAll('.math-input').forEach(input => input.disabled = true);
    const timerEl = document.getElementById('timer-display');
    if (timerEl) {
        timerEl.textContent = 'Время вышло!';
        timerEl.classList.add('time-up');
    }
}

function startTimer() {
    remainingSec = TURBO_TIME_SEC;
    timeUp = false;
    updateTimerDisplay();
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        remainingSec--;
        updateTimerDisplay();
        if (remainingSec <= 0) {
            onTimeUp();
        }
    }, 1000);
}

function renderExamples() {
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
}

document.addEventListener('DOMContentLoaded', () => {
    renderExamples();

    document.getElementById('check-btn').addEventListener('click', checkAnswers);
    document.getElementById('again-btn').addEventListener('click', () => {
        if (timerInterval) clearInterval(timerInterval);
        renderExamples();
    });
});
