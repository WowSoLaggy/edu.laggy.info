const TO_BE_PAIRS = [
    { pronoun: 'I', form: 'am' },
    { pronoun: 'He', form: 'is' },
    { pronoun: 'She', form: 'is' },
    { pronoun: 'It', form: 'is' },
    { pronoun: 'We', form: 'are' },
    { pronoun: 'You', form: 'are' },
    { pronoun: 'They', form: 'are' }
];

function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const t = a[i];
        a[i] = a[j];
        a[j] = t;
    }
    return a;
}

function normalizeAnswer(text) {
    // en-US so "I" → "i" (not Turkish dotless ı)
    var s = String(text || '').trim().toLocaleLowerCase('en-US');
    // strip zero-width chars
    s = s.replace(/[\u200B-\u200D\uFEFF]/g, '');
    var out = '';
    for (var i = 0; i < s.length; i++) {
        var code = s.charCodeAt(i);
        // Only real apostrophe / quote marks → '
        if (code === 0x27 || code === 0x60 || code === 0xB4 ||
            code === 0x2018 || code === 0x2019 || code === 0x201A || code === 0x201B ||
            code === 0x2032 || code === 0x2035 || code === 0x02BC || code === 0x02B9 || code === 0xFF07) {
            out += "'";
        } else {
            out += s.charAt(i);
        }
    }
    return out.replace(/\s+/g, ' ');
}

function cliticFor(form) {
    form = String(form || '').toLocaleLowerCase('en-US');
    if (form === 'am') return 'm';
    if (form === 'is') return 's';
    if (form === 'are') return 're';
    return null;
}

function isWriteCorrect(pair, rawEntered) {
    var raw = String(rawEntered || '').trim();
    if (!raw) return false;

    var entered = normalizeAnswer(raw);
    var form = pair.form.toLocaleLowerCase('en-US');
    var clitic = cliticFor(form);
    if (!clitic) return false;

    // Pronoun is already shown on the left — do NOT accept "He's" / "he is"
    // Only the verb form: is / am / are  or  's / 'm / 're
    if (entered === form) return true;
    if (entered === "'" + clitic) return true;

    // Tolerant: letters are only the clitic (s/m/re) and there is an apostrophe
    var letters = entered.replace(/[^a-z]/g, '');
    if (letters === clitic && entered.indexOf("'") !== -1) return true;

    return false;
}

function ToBeGame() {
    this.mode = 'match';
    this.correctCount = 0;
    this.incorrectCount = 0;
    this.selectedForm = null;
    this.matchOrder = [];
    this.matchSource = TO_BE_PAIRS.slice();
    this.matchMistakes = [];
    this.slotAnswers = [];
    this.writeOrder = [];
    this.writeIndex = 0;
    this.writeAnswered = false;
    this.writeResults = [];
    this.incorrectAnswers = [];
    this.bindEvents();
    this.setMode('match');
}

ToBeGame.prototype.bindEvents = function () {
    var self = this;
    document.getElementById('mode-match').onclick = function () { self.setMode('match'); };
    document.getElementById('mode-write').onclick = function () { self.setMode('write'); };
    document.getElementById('match-reset').onclick = function () { self.startMatch(); };
    document.getElementById('match-check').onclick = function () { self.checkMatch(); };
    document.getElementById('write-check').onclick = function () { self.checkWrite(); };
    document.getElementById('write-next').onclick = function () { self.nextWrite(); };
    document.getElementById('write-prev').onclick = function () { self.prevWrite(); };
    document.getElementById('write-input').onkeydown = function (e) {
        if (e.key === 'Enter') self.checkWrite();
    };
};

ToBeGame.prototype.setMode = function (mode) {
    this.mode = mode;
    document.getElementById('mode-match').classList.toggle('active-mode', mode === 'match');
    document.getElementById('mode-write').classList.toggle('active-mode', mode === 'write');
    document.getElementById('match-mode').style.display = mode === 'match' ? 'block' : 'none';
    document.getElementById('write-mode').style.display = mode === 'write' ? 'block' : 'none';
    this.clearFeedback();
    if (mode === 'match') this.startMatch();
    else this.startWrite();
};

ToBeGame.prototype.clearFeedback = function () {
    var fb = document.getElementById('feedback');
    fb.textContent = '';
    fb.className = 'feedback';
    fb.style.display = '';
};

ToBeGame.prototype.updateStats = function () {
    document.getElementById('correct-count').textContent = this.correctCount;
    document.getElementById('incorrect-count').textContent = this.incorrectCount;
};

ToBeGame.prototype.showFeedback = function (isCorrect, text) {
    var fb = document.getElementById('feedback');
    fb.textContent = text || (isCorrect ? 'Правильно! Молодец!' : 'Неправильно. Попробуй ещё раз!');
    fb.className = 'feedback ' + (isCorrect ? 'correct' : 'incorrect');
};

ToBeGame.prototype.startMatch = function (pairs) {
    this.clearFeedback();
    var fb = document.getElementById('feedback');
    if (fb) fb.style.display = '';
    this.selectedForm = null;
    this.matchSource = pairs && pairs.length ? pairs.slice() : TO_BE_PAIRS.slice();
    this.matchOrder = shuffle(this.matchSource);
    this.slotAnswers = this.matchOrder.map(function () { return null; });
    this.matchMistakes = [];
    this.correctCount = 0;
    this.incorrectCount = 0;
    this.updateStats();
    this.renderFormBank();
    this.renderMatchGrid();
};

ToBeGame.prototype.renderFormBank = function () {
    var self = this;
    var bank = document.getElementById('form-bank');
    bank.innerHTML = '';
    var chips = shuffle(this.matchOrder.map(function (p) { return p.form; }));
    chips.forEach(function (form, idx) {
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'form-chip';
        btn.textContent = form;
        btn.setAttribute('data-form', form);
        btn.setAttribute('data-chip-id', String(idx));
        btn.onclick = function () { self.selectFormChip(btn); };
        bank.appendChild(btn);
    });
};

ToBeGame.prototype.renderMatchGrid = function () {
    var self = this;
    var grid = document.getElementById('match-grid');
    grid.innerHTML = '';
    this.matchOrder.forEach(function (pair, i) {
        var pronoun = document.createElement('div');
        pronoun.className = 'match-pronoun';
        pronoun.textContent = pair.pronoun;

        var dash = document.createElement('div');
        dash.className = 'match-dash';
        dash.textContent = '—';

        var slot = document.createElement('div');
        slot.className = 'match-slot';
        slot.setAttribute('data-index', String(i));
        var answer = self.slotAnswers[i];
        if (answer) {
            slot.textContent = answer.form;
            slot.className += ' filled';
        } else {
            slot.textContent = '?';
        }
        slot.onclick = function () { self.placeFormInSlot(i, slot); };
        grid.appendChild(pronoun);
        grid.appendChild(dash);
        grid.appendChild(slot);
    });
};

ToBeGame.prototype.selectFormChip = function (btn) {
    if (btn.className.indexOf('used') !== -1) return;
    var chips = document.querySelectorAll('.form-chip');
    for (var i = 0; i < chips.length; i++) chips[i].classList.remove('selected');
    btn.classList.add('selected');
    this.selectedForm = {
        form: btn.getAttribute('data-form'),
        chipId: btn.getAttribute('data-chip-id'),
        btn: btn
    };
};

ToBeGame.prototype.placeFormInSlot = function (index, slotEl) {
    if (slotEl.className.indexOf('correct') !== -1) return;
    if (!this.selectedForm) {
        var prev = this.slotAnswers[index];
        if (prev) {
            var chip = document.querySelector('.form-chip[data-chip-id="' + prev.chipId + '"]');
            if (chip) chip.classList.remove('used');
            this.slotAnswers[index] = null;
            this.renderMatchGrid();
        }
        return;
    }

    var old = this.slotAnswers[index];
    if (old) {
        var oldChip = document.querySelector('.form-chip[data-chip-id="' + old.chipId + '"]');
        if (oldChip) oldChip.classList.remove('used');
    }

    this.slotAnswers[index] = {
        form: this.selectedForm.form,
        chipId: this.selectedForm.chipId
    };
    this.selectedForm.btn.classList.add('used');
    this.selectedForm.btn.classList.remove('selected');
    this.selectedForm = null;
    this.renderMatchGrid();
    this.clearFeedback();
};

ToBeGame.prototype.recordMatchMistake = function (pair) {
    for (var i = 0; i < this.matchMistakes.length; i++) {
        if (this.matchMistakes[i].pronoun === pair.pronoun) return;
    }
    this.matchMistakes.push({ pronoun: pair.pronoun, form: pair.form });
};

ToBeGame.prototype.refreshMatchStats = function () {
    // Count by pronouns: wrong at least once vs never wrong
    this.incorrectCount = this.matchMistakes.length;
    this.correctCount = Math.max(0, this.matchOrder.length - this.matchMistakes.length);
    this.updateStats();
};

ToBeGame.prototype.checkMatch = function () {
    var self = this;
    for (var a = 0; a < this.slotAnswers.length; a++) {
        if (!this.slotAnswers[a]) {
            this.showFeedback(false, 'Сначала заполни все пропуски.');
            return;
        }
    }

    var allCorrect = true;
    var slots = document.querySelectorAll('.match-slot');
    this.matchOrder.forEach(function (pair, i) {
        var ok = self.slotAnswers[i].form === pair.form;
        slots[i].classList.remove('incorrect', 'correct');
        if (ok) {
            slots[i].classList.add('correct', 'filled');
        } else {
            allCorrect = false;
            slots[i].classList.add('incorrect', 'filled');
            self.recordMatchMistake(pair);
        }
    });

    this.refreshMatchStats();

    if (allCorrect) {
        this.showMatchComplete();
    } else {
        this.showFeedback(false, 'Попробуй снова');
        this.matchOrder.forEach(function (pair, i) {
            if (self.slotAnswers[i].form !== pair.form) {
                var chip = document.querySelector('.form-chip[data-chip-id="' + self.slotAnswers[i].chipId + '"]');
                if (chip) chip.classList.remove('used');
                self.slotAnswers[i] = null;
            }
        });
        setTimeout(function () { self.renderMatchGrid(); }, 600);
    }
};

ToBeGame.prototype.showMatchComplete = function () {
    var self = this;
    this.refreshMatchStats();
    var fb = document.getElementById('feedback');
    fb.className = 'feedback';
    fb.style.display = 'block';

    var revisionBtn = this.matchMistakes.length > 0
        ? '<button type="button" id="match-revise" class="action-btn" style="margin:10px;background:linear-gradient(45deg,#ff6b35,#f7931e);">Повторить с ошибками</button>'
        : '';

    fb.innerHTML =
        '<div style="text-align:center;padding:12px;font-size:0.75em;font-weight:normal;width:100%;">' +
        '<p style="margin:0 0 8px;font-size:1.2em;font-weight:bold;">Отлично! Все пары верные!</p>' +
        '<p>Правильных ответов: ' + this.correctCount + '</p>' +
        '<p>Неправильных ответов: ' + this.incorrectCount + '</p>' +
        '<div>' +
        '<button type="button" id="match-again" class="action-btn" style="margin:10px;">Играть снова</button>' +
        revisionBtn +
        '</div></div>';

    var again = document.getElementById('match-again');
    if (again) again.onclick = function () { self.startMatch(); };
    var revise = document.getElementById('match-revise');
    if (revise) revise.onclick = function () { self.reviseMatchMistakes(); };
};

ToBeGame.prototype.reviseMatchMistakes = function () {
    var pairs = this.matchMistakes.slice();
    if (pairs.length === 0) return;
    this.startMatch(pairs);
};

ToBeGame.prototype.setWriteControlsVisible = function (visible) {
    var display = visible ? '' : 'none';
    var ids = ['write-check', 'write-next', 'write-prev'];
    for (var i = 0; i < ids.length; i++) {
        var el = document.getElementById(ids[i]);
        if (el) el.style.display = visible ? 'inline-block' : 'none';
    }
    var row = document.querySelector('#write-mode .write-row');
    var hint = document.querySelector('#write-mode .hint');
    var progress = document.getElementById('write-progress');
    if (row) row.style.display = visible ? 'flex' : 'none';
    if (hint) hint.style.display = visible ? 'block' : 'none';
    if (progress) progress.style.display = visible ? 'block' : 'none';
};

ToBeGame.prototype.startWrite = function (pairs) {
    this.writeOrder = shuffle(pairs && pairs.length ? pairs : TO_BE_PAIRS);
    this.writeIndex = 0;
    this.correctCount = 0;
    this.incorrectCount = 0;
    this.incorrectAnswers = [];
    this.writeResults = this.writeOrder.map(function () { return null; });
    this.updateStats();
    this.setWriteControlsVisible(true);
    this.loadWriteItem();
};

ToBeGame.prototype.recountWriteStats = function () {
    var correct = 0;
    var incorrect = 0;
    var mistakes = [];
    for (var i = 0; i < this.writeResults.length; i++) {
        var r = this.writeResults[i];
        if (!r) continue;
        if (r.ok) {
            correct++;
        } else {
            incorrect++;
            mistakes.push({
                pronoun: r.pronoun,
                form: r.form,
                selected: r.selected
            });
        }
    }
    this.correctCount = correct;
    this.incorrectCount = incorrect;
    this.incorrectAnswers = mistakes;
    this.updateStats();
};

ToBeGame.prototype.loadWriteItem = function () {
    if (this.writeIndex >= this.writeOrder.length) {
        this.showWriteComplete();
        return;
    }
    this.writeAnswered = false;
    this.clearFeedback();
    var pair = this.writeOrder[this.writeIndex];
    document.getElementById('write-pronoun').textContent = pair.pronoun;
    var input = document.getElementById('write-input');
    input.disabled = false;
    input.value = '';
    input.style.backgroundColor = '#fff';
    input.style.borderColor = '#8B0000';
    document.getElementById('write-progress').textContent = (this.writeIndex + 1) + ' / ' + this.writeOrder.length;
    var prevBtn = document.getElementById('write-prev');
    if (prevBtn) prevBtn.disabled = this.writeIndex === 0;
    input.focus();
};

ToBeGame.prototype.checkWrite = function () {
    if (this.writeAnswered || this.writeIndex >= this.writeOrder.length) return;
    var self = this;
    var input = document.getElementById('write-input');
    var raw = input.value;
    if (!normalizeAnswer(raw)) return;
    var pair = this.writeOrder[this.writeIndex];
    var ok = isWriteCorrect(pair, raw);
    var isLast = this.writeIndex >= this.writeOrder.length - 1;

    this.writeResults[this.writeIndex] = {
        ok: ok,
        pronoun: pair.pronoun,
        form: pair.form,
        selected: String(raw).trim()
    };
    this.recountWriteStats();

    if (!ok) {
        input.style.backgroundColor = '#f8d7da';
        input.style.borderColor = '#dc3545';
        this.showFeedback(false, 'Попробуй снова');
        this.writeAnswered = true;
        if (isLast) {
            setTimeout(function () {
                self.writeIndex = self.writeOrder.length;
                self.showWriteComplete();
            }, 700);
        } else {
            input.focus();
        }
        return;
    }

    this.writeAnswered = true;
    input.disabled = true;
    input.style.backgroundColor = '#d4edda';
    input.style.borderColor = '#28a745';
    this.showFeedback(true);
    if (isLast) {
        setTimeout(function () {
            self.writeIndex = self.writeOrder.length;
            self.showWriteComplete();
        }, 700);
    }
};

ToBeGame.prototype.showWriteComplete = function () {
    var self = this;
    this.recountWriteStats();
    document.getElementById('write-pronoun').textContent = '';
    document.getElementById('write-input').value = '';
    document.getElementById('write-input').disabled = true;
    document.getElementById('write-progress').textContent = this.writeOrder.length + ' / ' + this.writeOrder.length;
    this.setWriteControlsVisible(false);

    var listHtml = '';
    if (this.incorrectAnswers.length > 0) {
        listHtml = '<div style="margin-top:20px;text-align:left;background:#f8f9fa;padding:15px;border-radius:10px;font-size:0.7em;font-weight:normal;">' +
            '<h3 style="margin-top:0;">Слова для повторения:</h3><ul style="list-style:none;padding:0;">';
        this.incorrectAnswers.forEach(function (item) {
            var shortForm = cliticFor(item.form);
            listHtml += '<li style="margin:10px 0;padding:10px;background:white;border-radius:5px;border-left:4px solid #e74c3c;">' +
                '<strong>' + item.pronoun + '</strong><br>' +
                '<span style="color:#e74c3c;">Ваш ответ: ' + item.selected + '</span><br>' +
                '<span style="color:#27ae60;">Правильно: ' + item.form + (shortForm ? " или '" + shortForm : '') + '</span>' +
                '</li>';
        });
        listHtml += '</ul></div>';
    }

    var revisionBtn = this.incorrectAnswers.length > 0
        ? '<button type="button" id="write-revise" class="action-btn" style="margin:10px;background:linear-gradient(45deg,#ff6b35,#f7931e);">Повторить слова с ошибками</button>'
        : '';

    var fb = document.getElementById('feedback');
    fb.className = 'feedback';
    fb.style.display = 'block';
    fb.innerHTML =
        '<div style="text-align:center;padding:20px;font-size:0.75em;font-weight:normal;width:100%;">' +
        '<h2 style="margin:0 0 10px;">Готово!</h2>' +
        '<p>Правильных ответов: ' + this.correctCount + '</p>' +
        '<p>Неправильных ответов: ' + this.incorrectCount + '</p>' +
        listHtml +
        '<div>' +
        '<button type="button" id="write-again" class="action-btn" style="margin:10px;">Играть снова</button>' +
        revisionBtn +
        '</div></div>';

    var again = document.getElementById('write-again');
    if (again) again.onclick = function () { self.startWrite(); };
    var revise = document.getElementById('write-revise');
    if (revise) revise.onclick = function () { self.reviseMistakes(); };
};

ToBeGame.prototype.reviseMistakes = function () {
    var pairs = this.incorrectAnswers.map(function (item) {
        return { pronoun: item.pronoun, form: item.form };
    });
    if (pairs.length === 0) return;
    this.startWrite(pairs);
};

ToBeGame.prototype.nextWrite = function () {
    if (this.writeIndex >= this.writeOrder.length) {
        this.startWrite();
        return;
    }
    // Can go next after any check (correct or wrong), or skip
    this.writeIndex++;
    this.loadWriteItem();
};

ToBeGame.prototype.prevWrite = function () {
    if (this.writeIndex <= 0) return;
    this.writeIndex--;
    this.loadWriteItem();
};

function startToBeGame() {
    try {
        window.toBeGame = new ToBeGame();
    } catch (err) {
        var fb = document.getElementById('feedback');
        if (fb) {
            fb.style.display = 'block';
            fb.textContent = 'Ошибка загрузки: ' + err.message;
        }
        // eslint-disable-next-line no-console
        console.error(err);
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startToBeGame);
} else {
    startToBeGame();
}
