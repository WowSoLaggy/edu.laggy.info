// One-step math examples (addition and subtraction within 10-100)
const BATCH_SIZE = 10;
const TOTAL_EXAMPLES = 1000;
const MIN = 10;
const MAX = 99;

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

const RESULT_MAX = 100;

function generateOneStepExamples() {
    const examples = [];
    const seen = new Set();

    while (examples.length < TOTAL_EXAMPLES) {
        const isAdd = Math.random() < 0.5;
        let a, b, expr, answer;

        if (isAdd) {
            a = randInt(MIN, MAX);
            b = randInt(MIN, Math.min(RESULT_MAX - a, MAX));  // a+b <= 100
            expr = `${a}+${b}=`;
            answer = a + b;
        } else {
            a = randInt(MIN, MAX);
            b = randInt(MIN, a);  // b <= a so result is non-negative
            expr = `${a}-${b}=`;
            answer = a - b;
        }

        const key = expr;
        if (!seen.has(key) && answer <= RESULT_MAX) {
            seen.add(key);
            examples.push({ expr, answer });
        }
    }

    return shuffle(examples);
}

let allExamples = [];
let batchIndex = 0;
let wrongExamples = [];
let batchStates = {};  // { batchIndex: [{ value, feedback, isCorrect }] }

function ensureRetryHint() {
    let hint = document.getElementById('retry-hint');
    if (!hint) {
        hint = document.createElement('div');
        hint.id = 'retry-hint';
        hint.textContent = 'Попробуйте еще раз';
        hint.style.cssText = 'display:none;padding:12px 16px;margin-bottom:16px;text-align:center;background:#fff8e6;color:#8B0000;font-weight:bold;border-radius:12px;border:2px solid #8B0000;';
        const ga = document.querySelector('.game-area');
        if (ga) ga.insertBefore(hint, ga.firstElementChild);
    }
    return hint;
}

function updateRetryHint() {
    const hint = document.getElementById('retry-hint');
    if (!hint) return;
    const has = Array.from(document.querySelectorAll('.math-input')).some(inp =>
        inp.dataset.attempts === '1' && !inp.classList.contains('input-correct'));
    hint.style.display = has ? 'block' : 'none';
}

function saveBatchState() {
    const inputs = document.querySelectorAll('.math-input');
    const rows = document.querySelectorAll('.math-row');
    if (inputs.length === 0) return;
    const state = [];
    rows.forEach((row, i) => {
        const input = row.querySelector('.math-input');
        const fb = row.querySelector('.math-feedback');
        state.push({
            value: input.value,
            feedback: fb ? fb.textContent : '',
            isCorrect: input.classList.contains('input-correct'),
            isIncorrect: input.classList.contains('input-incorrect'),
            attempts: parseInt(input.dataset.attempts || '0', 10)
        });
    });
    batchStates[batchIndex] = state;
}

function updateButtonVisibility() {
    const prevBtn = document.getElementById('prev-btn');
    const wrongBtn = document.getElementById('wrong-btn');
    if (prevBtn) prevBtn.style.display = batchIndex > 0 ? 'inline-block' : 'none';
    if (wrongBtn) wrongBtn.style.display = wrongExamples.length > 0 ? 'inline-block' : 'none';
}

function renderBatch() {
    const start = batchIndex * BATCH_SIZE;
    const batch = allExamples.slice(start, start + BATCH_SIZE);
    const container = document.getElementById('examples-container');
    container.innerHTML = '';

    const savedState = batchStates[batchIndex];
    batch.forEach((ex, i) => {
        const idx = start + i + 1;
        const row = document.createElement('div');
        row.className = 'math-row';
        const s = savedState && savedState[i] ? savedState[i] : null;
        const attempts = s ? (s.attempts || 0) : 0;
        row.innerHTML = `
            <span class="math-expr">${ex.expr}</span>
            <input type="number" class="math-input" data-answer="${ex.answer}" data-idx="${idx}" data-attempts="${attempts}" placeholder="?">
            <span class="math-feedback" data-idx="${idx}"></span>
        `;
        container.appendChild(row);
        const input = row.querySelector('.math-input');
        const fb = row.querySelector('.math-feedback');
        if (s) {
            input.value = s.value || '';
            fb.textContent = s.feedback || '';
            input.dataset.attempts = String(s.attempts || 0);
            if (s.isCorrect) { input.classList.add('input-correct'); fb.className = 'math-feedback correct'; }
            if (s.isIncorrect) { input.classList.add('input-incorrect'); fb.className = 'math-feedback incorrect'; }
        }
    });

    const moreBtn = document.getElementById('more-btn');

    if (start + BATCH_SIZE >= allExamples.length) {
        moreBtn.textContent = 'Начать заново';
        moreBtn.onclick = () => {
            allExamples = generateOneStepExamples();
            batchIndex = 0;
            batchStates = {};
            renderBatch();
            moreBtn.textContent = 'Следующие примеры';
            moreBtn.onclick = showNextBatch;
        };
    } else {
        moreBtn.textContent = 'Следующие примеры';
        moreBtn.onclick = showNextBatch;
    }

    ensureRetryHint();
    updateRetryHint();
    updateButtonVisibility();
}

function showNextBatch() {
    saveBatchState();
    batchIndex++;
    renderBatch();
}

function showPrevBatch() {
    saveBatchState();
    if (batchIndex > 0) {
        batchIndex--;
        renderBatch();
    }
}

function checkAnswers() {
    document.querySelectorAll('.math-input').forEach(input => {
        const row = input.closest('.math-row');
        const expr = row.querySelector('.math-expr').textContent;
        const fb = row.querySelector('.math-feedback');
        const userAnswer = parseInt(input.value, 10);
        const correct = parseInt(input.dataset.answer, 10);

        if (input.value === '') {
            fb.textContent = '';
            fb.className = 'math-feedback';
            return;
        }

        const attempts = parseInt(input.dataset.attempts || '0', 10);

        if (userAnswer === correct) {
            fb.textContent = '✓';
            fb.className = 'math-feedback correct';
            input.classList.add('input-correct');
            input.classList.remove('input-incorrect');
        } else {
            if (attempts === 0) {
                fb.textContent = '✗';
                fb.className = 'math-feedback incorrect';
                input.classList.add('input-incorrect');
                input.classList.remove('input-correct');
                input.dataset.attempts = '1';
            } else {
                fb.textContent = `✗ (${correct})`;
                fb.className = 'math-feedback incorrect';
                input.classList.add('input-incorrect');
                input.classList.remove('input-correct');
                input.dataset.attempts = '2';
                wrongExamples.push({ expr, answer: correct });
            }
        }
    });

    const inputs = document.querySelectorAll('.math-input');
    const correctCount = Array.from(inputs).filter(inp => inp.classList.contains('input-correct')).length;
    const totalAnswered = Array.from(inputs).filter(inp => inp.value !== '').length;
    if (totalAnswered === BATCH_SIZE && correctCount === BATCH_SIZE) {
        showFanfare();
    }
    ensureRetryHint();
    updateRetryHint();
    updateButtonVisibility();
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

function loadWrongExamples() {
    if (wrongExamples.length === 0) return;
    allExamples = shuffle([...wrongExamples]);
    wrongExamples = [];
    batchIndex = 0;
    batchStates = {};
    renderBatch();
}

document.addEventListener('DOMContentLoaded', () => {
    allExamples = generateOneStepExamples();
    renderBatch();

    document.getElementById('check-btn').addEventListener('click', checkAnswers);
    document.getElementById('prev-btn').addEventListener('click', showPrevBatch);
    document.getElementById('wrong-btn').addEventListener('click', loadWrongExamples);
});
