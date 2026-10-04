// Spelling word list from the orthographic dictionary
// Override with window.SPELLING_WORD_LIST before loading this script (e.g. 3 класс)
const defaultSpellingWordList = [
    { word: "язык", correct: "язык", wrong: ["езык"] },
    { word: "хорошо", correct: "хорошо", wrong: ["харашо", "харошо"] },
    { word: "машина", correct: "машина", wrong: ["машына"] },
    { word: "родина", correct: "родина", wrong: ["родена"] },
    { word: "здравствуй", correct: "здравствуй", wrong: ["здраствуй"] },
    { word: "прощай", correct: "прощай", wrong: ["пращай"] },
    { word: "иней", correct: "иней", wrong: ["иний"] },
    { word: "фамилия", correct: "фамилия", wrong: ["фомилия"] },
    { word: "морковь", correct: "морковь", wrong: ["марковь"] },
    { word: "корова", correct: "корова", wrong: ["карова"] },
    { word: "сорока", correct: "сорока", wrong: ["сарока"] },
    { word: "вдруг", correct: "вдруг", wrong: ["в друг", "вдрук", "в друк"] },
    { word: "одежда", correct: "одежда", wrong: ["адежда"] },
    { word: "сапоги", correct: "сапоги", wrong: ["сапаги"] },
    { word: "облако", correct: "облако", wrong: ["облоко", "облока"] },
    { word: "деревня", correct: "деревня", wrong: ["диревня"] },
    { word: "Россия", correct: "Россия", wrong: ["Рассия", "Росия", "Расия", "росия", "россия", "расия", "рассия"] },
    { word: "обед", correct: "обед", wrong: ["абед", "абет"] },
    { word: "метель", correct: "метель", wrong: ["митель"] },
    { word: "ноябрь", correct: "ноябрь", wrong: ["наябрь"] },
    { word: "пенал", correct: "пенал", wrong: ["пинал"] },
    { word: "народ", correct: "народ", wrong: ["нород", "нарот", "норот"] },
    { word: "декабрь", correct: "декабрь", wrong: ["дикабрь"] },
    { word: "тетрадь", correct: "тетрадь", wrong: ["титрадь", "тетрать", "титрать"] },
    { word: "лопата", correct: "лопата", wrong: ["лапата"] },
    { word: "платок", correct: "платок", wrong: ["плоток"] },
    { word: "лягушка", correct: "лягушка", wrong: ["лигушка", "легушка"] },
    { word: "ребята", correct: "ребята", wrong: ["рибята"] },
    { word: "ворона", correct: "ворона", wrong: ["варона"] },
    { word: "тарелка", correct: "тарелка", wrong: ["торелка"] },
    { word: "стакан", correct: "стакан", wrong: ["стокан"] },
    { word: "карандаш", correct: "карандаш", wrong: ["корандаш", "корондаш", "карондаш"] },
    { word: "осина", correct: "осина", wrong: ["асина"] },
    { word: "топор", correct: "топор", wrong: ["тапор"] },
    { word: "ученица", correct: "ученица", wrong: ["учиница"] },
    { word: "воробей", correct: "воробей", wrong: ["варабей", "ворабей", "варобей"] },
    { word: "снегирь", correct: "снегирь", wrong: ["снигирь"] },
    { word: "русский", correct: "русский", wrong: ["руский"] },
    { word: "молоток", correct: "молоток", wrong: ["малоток", "малаток", "молаток"] },
    { word: "щавель", correct: "щавель", wrong: ["щивель", "щевель", "щявель"] },
    { word: "улица", correct: "улица", wrong: ["улеца"] },
    { word: "обезьяна", correct: "обезьяна", wrong: ["абезьяна", "обизьяна", "абезьяна"] },
    { word: "январь", correct: "январь", wrong: ["енварь"] },
    { word: "картина", correct: "картина", wrong: ["кортина"] },
    { word: "молоко", correct: "молоко", wrong: ["малако", "малоко", "молако"] },
    { word: "земляника", correct: "земляника", wrong: ["зимляника", "земленика", "землиника", "зимлиника", "зимленика"] },
    { word: "пальто", correct: "пальто", wrong: ["польто"] },
    { word: "отец", correct: "отец", wrong: ["атец"] },
    { word: "сахар", correct: "сахар", wrong: ["сахор", "сахыр"] },
    { word: "ученик", correct: "ученик", wrong: ["учиник"] },
    { word: "яблоня", correct: "яблоня", wrong: ["ябланя", "яблыня"] },
    { word: "город", correct: "город", wrong: ["горад", "горат", "горот"] },
    { word: "извините", correct: "извините", wrong: ["извените", "изьвините", "изьвените", "извинити", "извенити", "изьвинити", "изьвенити"] },
    { word: "класс", correct: "класс", wrong: ["клас"] },
    { word: "магазин", correct: "магазин", wrong: ["могазин", "магозин", "могозин"] },
    { word: "Москва", correct: "Москва", wrong: ["Масква", "москва", "масква"] },
    { word: "петух", correct: "петух", wrong: ["питух"] },
    { word: "коньки", correct: "коньки", wrong: ["каньки"] },
    { word: "медведь", correct: "медведь", wrong: ["мидведь", "медветь", "мидветь"] },
    { word: "учитель", correct: "учитель", wrong: ["учитиль"] },
    { word: "метро", correct: "метро", wrong: ["митро"] },
    { word: "быстро", correct: "быстро", wrong: ["быстра"] },
    { word: "завод", correct: "завод", wrong: ["зовод", "завот", "зовот"] },
    { word: "берёза", correct: "берёза", wrong: ["бирёза"] },
    { word: "девочка", correct: "девочка", wrong: ["девачка"] },
    { word: "Родина", correct: "Родина", wrong: ["Родена"] },
    { word: "октябрь", correct: "октябрь", wrong: ["актябрь"] },
    { word: "дежурный", correct: "дежурный", wrong: ["дижурный"] },
    { word: "рисунок", correct: "рисунок", wrong: ["ресунок"] },
    { word: "посуда", correct: "посуда", wrong: ["пасуда"] },
    { word: "собака", correct: "собака", wrong: ["сабака"] },
    { word: "товарищ", correct: "товарищ", wrong: ["таварищ"] },
    { word: "работа", correct: "работа", wrong: ["робота"] },
    { word: "яблоко", correct: "яблоко", wrong: ["яблако"] },
    { word: "до свидания", correct: "до свидания", wrong: ["досвидания", "до свиданья", "досвиданья", "до сведания", "досведания", "до сведанья", "досведанья"] },
    { word: "скоро", correct: "скоро", wrong: ["скора"] },
    { word: "урожай", correct: "урожай", wrong: ["уражай"] },
    { word: "февраль", correct: "февраль", wrong: ["фивраль"] },
    { word: "дорога", correct: "дорога", wrong: ["дарога"] },
    { word: "рабочий", correct: "рабочий", wrong: ["робочий"] },
    { word: "алфавит", correct: "алфавит", wrong: ["олфавит", "олфовит", "алфовит"] },
    { word: "заяц", correct: "заяц", wrong: ["заец", "заиц"] },
    { word: "ягода", correct: "ягода", wrong: ["ягада", "ягыда"] },
    { word: "учительница", correct: "учительница", wrong: ["учитильница", "учительнеца", "учитильнеца"] },
    { word: "малина", correct: "малина", wrong: ["молина"] },
    { word: "ветер", correct: "ветер", wrong: ["ветир"] },
    { word: "спасибо", correct: "спасибо", wrong: ["спасиба", "спосибо", "спосиба"] },
    { word: "месяц", correct: "месяц", wrong: ["месец", "месиц"] },
    { word: "мороз", correct: "мороз", wrong: ["мароз", "морос", "марос"] },
    { word: "весело", correct: "весело", wrong: ["весило", "весела"] },
    { word: "суббота", correct: "суббота", wrong: ["субота"] },
    { word: "мебель", correct: "мебель", wrong: ["мебиль"] },
    { word: "капуста", correct: "капуста", wrong: ["копуста"] },
    { word: "апрель", correct: "апрель", wrong: ["опрель"] },
    { word: "сентябрь", correct: "сентябрь", wrong: ["синтябрь"] }
];

const spellingWordList = (typeof window !== 'undefined' && Array.isArray(window.SPELLING_WORD_LIST) && window.SPELLING_WORD_LIST.length)
    ? window.SPELLING_WORD_LIST
    : defaultSpellingWordList;

class SpellingGame {
    constructor() {
        this.currentWordIndex = 0;
        this.correctCount = 0;
        this.incorrectCount = 0;
        this.currentWord = null;
        this.isAnswered = false;
        this.incorrectAnswers = [];
        this.activeWordList = [];
        this.gameMode = 'choice'; // 'choice' | 'missing' | 'dictate'
        this.trainSize = 'all'; // 'all' | '15'
        this.russianVoice = null;
        
        this.prepareSpeechVoices();
        this.initializeGame();
        this.bindEvents();
    }

    prepareSpeechVoices() {
        if (!window.speechSynthesis) return;
        const pickVoice = () => {
            const voices = window.speechSynthesis.getVoices();
            this.russianVoice = voices.find(v => v.lang && v.lang.toLowerCase().startsWith('ru')) || null;
        };
        pickVoice();
        if (typeof window.speechSynthesis.onvoiceschanged !== 'undefined') {
            window.speechSynthesis.onvoiceschanged = pickVoice;
        }
    }

    initializeGame() {
        this.buildActiveList();
        this.shuffleWords();
        this.loadWord();
        this.updateStats();
        this.updateProgress();
    }

    buildActiveList() {
        const uniqueWords = Array.from(new Set(spellingWordList.map(w => w.word)));
        let chosenWords = uniqueWords;
        if (this.trainSize === '15' && uniqueWords.length > 15) {
            chosenWords = this.sampleArray(uniqueWords, 15);
        }
        // For each base word, pick the first entry as the prompt
        this.activeWordList = chosenWords.map(base => spellingWordList.find(w => w.word === base));
    }

    sampleArray(arr, n) {
        const copy = [...arr];
        for (let i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy.slice(0, n);
    }

    shuffleWords() {
        for (let i = this.activeWordList.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.activeWordList[i], this.activeWordList[j]] = [this.activeWordList[j], this.activeWordList[i]];
        }
    }

    bindEvents() {
        // Previous word button
        document.getElementById('prev-word').addEventListener('click', () => {
            this.prevWord();
        });

        // Next word button
        document.getElementById('next-word').addEventListener('click', () => {
            this.nextWord();
        });

        // Show answer button
        document.getElementById('show-answer').addEventListener('click', () => {
            this.showAnswer();
        });

        // Mode buttons
        const choiceBtn = document.getElementById('mode-choice');
        const missingBtn = document.getElementById('mode-missing');
        const dictateBtn = document.getElementById('mode-dictate');
        if (choiceBtn) {
            choiceBtn.addEventListener('click', () => this.setGameMode('choice'));
        }
        if (missingBtn) {
            missingBtn.addEventListener('click', () => this.setGameMode('missing'));
        }
        if (dictateBtn) {
            dictateBtn.addEventListener('click', () => this.setGameMode('dictate'));
        }

        // Train size radios
        const trainAll = document.getElementById('train-all');
        const train15 = document.getElementById('train-15');
        if (trainAll && train15) {
            trainAll.addEventListener('change', () => {
                if (trainAll.checked) this.setTrainSize('all');
            });
            train15.addEventListener('change', () => {
                if (train15.checked) this.setTrainSize('15');
            });
        }
    }

    setGameMode(mode) {
        if (mode !== 'choice' && mode !== 'missing' && mode !== 'dictate') return;
        this.gameMode = mode;
        
        // Toggle active mode button
        const choiceBtn = document.getElementById('mode-choice');
        const missingBtn = document.getElementById('mode-missing');
        const dictateBtn = document.getElementById('mode-dictate');
        if (choiceBtn) choiceBtn.classList.toggle('active-mode', mode === 'choice');
        if (missingBtn) missingBtn.classList.toggle('active-mode', mode === 'missing');
        if (dictateBtn) dictateBtn.classList.toggle('active-mode', mode === 'dictate');
        
        // After "игра завершена" index is past the end — restart so mode can switch
        this.resetGameWithNewList();
    }

    setTrainSize(size) {
        if (size !== 'all' && size !== '15') return;
        this.trainSize = size;
        this.resetGameWithNewList();
    }

    showNavButtons() {
        const prev = document.getElementById('prev-word');
        const next = document.getElementById('next-word');
        const show = document.getElementById('show-answer');
        if (prev) prev.style.display = 'inline-block';
        if (next) next.style.display = 'inline-block';
        if (show) show.style.display = 'inline-block';
    }

    resetGameWithNewList() {
        this.stopSpeech();
        this.currentWordIndex = 0;
        this.correctCount = 0;
        this.incorrectCount = 0;
        this.incorrectAnswers = [];
        this.showNavButtons();
        this.buildActiveList();
        this.shuffleWords();
        this.loadWord();
        this.updateStats();
        this.updateProgress();
    }

    updateModeUI() {
        const choiceMode = document.getElementById('multiple-choice-mode');
        const missingMode = document.getElementById('missing-letter-mode');
        const dictateMode = document.getElementById('dictate-mode');
        const wordDisplay = document.getElementById('word-display');
        if (!choiceMode || !missingMode) return;
        choiceMode.style.display = this.gameMode === 'choice' ? 'block' : 'none';
        missingMode.style.display = this.gameMode === 'missing' ? 'block' : 'none';
        if (dictateMode) dictateMode.style.display = this.gameMode === 'dictate' ? 'block' : 'none';
        if (wordDisplay) {
            wordDisplay.style.display = 'block'; // Always show word display
        }
    }

    loadWord() {
        if (this.currentWordIndex >= this.activeWordList.length) {
            this.showGameComplete();
            return;
        }

        this.currentWord = this.activeWordList[this.currentWordIndex];
        this.isAnswered = false;

        // Don't show word to avoid revealing correct spelling
        // document.getElementById('current-word').textContent = this.currentWord.word;

        // Clear feedback
        const feedback = document.getElementById('feedback');
        feedback.textContent = '';
        feedback.className = 'feedback';

        // Load content by mode
        this.updateModeUI();
        if (this.gameMode === 'choice') {
            this.loadMultipleChoice();
        } else if (this.gameMode === 'missing') {
            this.loadMissingLetter();
        } else {
            this.loadDictateMode();
        }

        this.updateProgress();
        this.updateButtonStates();
    }

    normalizeSpelling(text) {
        return (text || '')
            .trim()
            .toLowerCase()
            .replace(/\s+/g, ' ');
    }

    slugifyWord(word) {
        const map = {
            а: 'a', б: 'b', в: 'v', г: 'g', д: 'd', е: 'e', ё: 'yo', ж: 'zh', з: 'z', и: 'i', й: 'y',
            к: 'k', л: 'l', м: 'm', н: 'n', о: 'o', п: 'p', р: 'r', с: 's', т: 't', у: 'u', ф: 'f',
            х: 'h', ц: 'ts', ч: 'ch', ш: 'sh', щ: 'sch', ъ: '', ы: 'y', ь: '', э: 'e', ю: 'yu', я: 'ya',
            ' ': '-', '-': '-'
        };
        const slug = String(word || '')
            .toLowerCase()
            .split('')
            .map(ch => (Object.prototype.hasOwnProperty.call(map, ch) ? map[ch] : (/[a-z0-9]/.test(ch) ? ch : '')))
            .join('')
            .replace(/-+/g, '-')
            .replace(/^-|-$/g, '');
        return slug || 'word';
    }

    audioPathForWord(word) {
        if (this.currentWord && this.currentWord.audio) return this.currentWord.audio;
        return `audio/${this.slugifyWord(word)}.mp3`;
    }

    speakCurrentWord() {
        if (!this.currentWord) return;

        // Natural pre-recorded dictation for all words (Chrome TTS is often unnatural)
        if (window.speechSynthesis) window.speechSynthesis.cancel();
        if (this.currentAudio) {
            this.currentAudio.pause();
            this.currentAudio = null;
        }
        const path = this.audioPathForWord(this.currentWord.correct);
        const audio = new Audio(path);
        this.currentAudio = audio;
        audio.play().catch(() => {
            this.speakWithSynthesis(this.currentWord.speak || this.currentWord.correct);
        });
    }

    speakWithSynthesis(text) {
        if (!text) return;
        if (!window.speechSynthesis) {
            const feedback = document.getElementById('feedback');
            if (feedback) {
                feedback.textContent = 'Озвучка не поддерживается в этом браузере. Попросите взрослого продиктовать слово.';
                feedback.className = 'feedback';
            }
            return;
        }
        window.speechSynthesis.cancel();
        if (this.currentAudio) {
            this.currentAudio.pause();
            this.currentAudio = null;
        }
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ru-RU';
        utterance.rate = 0.85;
        if (this.russianVoice) utterance.voice = this.russianVoice;
        window.speechSynthesis.speak(utterance);
    }

    loadDictateMode() {
        const container = document.getElementById('dictate-container');
        if (!container) return;
        container.innerHTML = '';

        const hint = document.createElement('div');
        hint.style.color = '#666';
        hint.style.marginBottom = '16px';
        hint.textContent = 'Послушай слово и напиши его правильно.';
        container.appendChild(hint);

        const listenBtn = document.createElement('button');
        listenBtn.type = 'button';
        listenBtn.className = 'action-btn';
        listenBtn.textContent = '🔊 Послушать';
        listenBtn.style.marginBottom = '20px';
        listenBtn.addEventListener('click', () => this.speakCurrentWord());
        container.appendChild(listenBtn);

        const input = document.createElement('input');
        input.type = 'text';
        input.id = 'dictate-input';
        input.autocomplete = 'off';
        input.autocapitalize = 'off';
        input.spellcheck = false;
        input.placeholder = 'Напиши слово здесь';
        input.style.fontSize = '1.8em';
        input.style.fontWeight = 'bold';
        input.style.color = '#8B0000';
        input.style.textAlign = 'center';
        input.style.padding = '12px 16px';
        input.style.border = '3px solid #8B0000';
        input.style.borderRadius = '12px';
        input.style.width = 'min(420px, 90%)';
        input.style.display = 'block';
        input.style.margin = '0 auto 16px';
        input.style.backgroundColor = 'white';
        container.appendChild(input);
        this.dictateInput = input;

        const checkBtn = document.createElement('button');
        checkBtn.type = 'button';
        checkBtn.className = 'action-btn';
        checkBtn.textContent = 'Проверить';
        checkBtn.addEventListener('click', () => this.checkDictateAnswer());
        container.appendChild(checkBtn);

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.checkDictateAnswer();
            }
        });
        input.addEventListener('input', () => {
            if (this.isAnswered) return;
            input.style.backgroundColor = 'white';
            input.style.borderColor = '#8B0000';
        });

        // Auto-play once when the word appears
        setTimeout(() => this.speakCurrentWord(), 250);
        input.focus();
    }

    checkDictateAnswer() {
        if (this.isAnswered || !this.dictateInput) return;
        const entered = this.normalizeSpelling(this.dictateInput.value);
        if (!entered) return;

        const expected = this.normalizeSpelling(this.currentWord.correct);
        const isCorrect = entered === expected;

        if (!isCorrect) {
            this.dictateInput.style.backgroundColor = '#f8d7da';
            this.dictateInput.style.borderColor = '#dc3545';
            this.dictateInput.disabled = false;
            if (!this.incorrectAnswers.some(a => a.word === this.currentWord.correct)) {
                this.incorrectAnswers.push({
                    word: this.currentWord.correct,
                    selected: this.dictateInput.value.trim(),
                    correct: this.currentWord.correct
                });
                this.updateStats(false);
            }
            this.showFeedback(false);
            this.dictateInput.focus();
            return;
        }

        this.isAnswered = true;
        this.dictateInput.disabled = true;
        this.dictateInput.style.backgroundColor = '#d4edda';
        this.dictateInput.style.borderColor = '#28a745';
        this.showFeedback(true);
        this.updateStats(true);
    }

    loadMultipleChoice() {
        const container = document.getElementById('options-container');
        container.innerHTML = '';

        // Generate options: correct + wrong (remove duplicates)
        const wrongOptions = [...new Set(this.currentWord.wrong)]; // Remove duplicates
        const allOptions = [...wrongOptions, this.currentWord.correct];
        
        // Remove duplicates from all options
        const uniqueOptions = [...new Set(allOptions)];
        
        // Shuffle options
        for (let i = uniqueOptions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [uniqueOptions[i], uniqueOptions[j]] = [uniqueOptions[j], uniqueOptions[i]];
        }

        // Create option buttons
        uniqueOptions.forEach(option => {
            const button = document.createElement('button');
            button.className = 'option-btn';
            button.textContent = option;
            button.addEventListener('click', () => {
                this.checkAnswer(option);
            });
            container.appendChild(button);
        });
    }

    getMissingPositions(correct) {
        if (Array.isArray(this.currentWord.gaps) && this.currentWord.gaps.length) {
            return [...this.currentWord.gaps].sort((a, b) => a - b);
        }

        const wrong = (this.currentWord.wrong || []).find(w => w !== correct) || (this.currentWord.wrong || [])[0] || '';
        let missingPosition = -1;

        if (correct === 'вдруг') {
            missingPosition = 4;
        } else if (correct === 'до свидания') {
            missingPosition = 9;
        } else if (correct === 'щавель') {
            missingPosition = 1;
        } else {
            for (let i = 0; i < Math.min(correct.length, wrong.length); i++) {
                if (correct[i] !== wrong[i]) {
                    missingPosition = i;
                    break;
                }
            }
            if (missingPosition === -1) missingPosition = correct.length - 1;
        }
        return [missingPosition];
    }

    createLetterInput() {
        const input = document.createElement('input');
        input.type = 'text';
        input.maxLength = 1;
        input.className = 'missing-letter-input';
        input.style.fontSize = '1em';
        input.style.width = '30px';
        input.style.height = '30px';
        input.style.textAlign = 'center';
        input.style.border = '2px solid #8B0000';
        input.style.borderRadius = '8px';
        input.style.fontWeight = 'bold';
        input.style.color = '#8B0000';
        input.style.margin = '0 3px';
        input.style.backgroundColor = 'white';
        return input;
    }

    loadMissingLetter() {
        const container = document.getElementById('missing-letter-container');
        container.innerHTML = '';

        const correct = this.currentWord.correct;
        const positions = this.getMissingPositions(correct);
        const posSet = new Set(positions);

        const wrapper = document.createElement('div');
        wrapper.style.fontSize = '2.5em';
        wrapper.style.fontWeight = 'bold';
        wrapper.style.color = '#8B0000';
        wrapper.style.textAlign = 'center';
        wrapper.style.marginBottom = '20px';
        wrapper.style.display = 'flex';
        wrapper.style.justifyContent = 'center';
        wrapper.style.alignItems = 'center';
        wrapper.style.flexWrap = 'wrap';

        this.missingInputs = [];
        this.missingPositions = positions;
        this.expectedLetters = positions.map(i => correct[i].toLowerCase());
        // keep legacy single-input refs for older helpers
        this.missingInput = null;
        this.expectedLetter = this.expectedLetters[0] || '';
        this.missingPositionIndex = positions[0];

        for (let i = 0; i < correct.length; i++) {
            if (posSet.has(i)) {
                const input = this.createLetterInput();
                input.dataset.gapIndex = String(this.missingInputs.length);
                input.addEventListener('input', (e) => {
                    if (this.isAnswered) return;
                    const val = e.target.value;
                    if (val.length > 1) e.target.value = val.slice(-1);
                    // Reset red/green while child edits after a mistake
                    e.target.style.backgroundColor = 'white';
                    e.target.style.borderColor = '#8B0000';
                    if (e.target.value.length === 1) {
                        const next = this.missingInputs.find((inp, idx) => {
                            return idx > this.missingInputs.indexOf(e.target) && !inp.value;
                        }) || this.missingInputs.find(inp => !inp.value);
                        if (next && next !== e.target) next.focus();
                        this.tryCheckMissingLetters();
                    }
                });
                input.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter') this.tryCheckMissingLetters(true);
                });
                wrapper.appendChild(input);
                this.missingInputs.push(input);
                if (!this.missingInput) this.missingInput = input;
            } else {
                const span = document.createElement('span');
                span.textContent = correct[i] === ' ' ? '\u00A0' : correct[i];
                if (correct[i] === ' ') span.style.width = '0.4em';
                wrapper.appendChild(span);
            }
        }

        container.appendChild(wrapper);
        if (this.missingInputs[0]) this.missingInputs[0].focus();
    }

    tryCheckMissingLetters(force = false) {
        if (this.isAnswered) return;
        const values = this.missingInputs.map(inp => inp.value.trim().toLowerCase());
        if (!force && values.some(v => !v)) return;

        const allFilled = values.every(v => v.length === 1);
        if (!allFilled) return;

        const isCorrect = values.every((v, i) => v === this.expectedLetters[i]);
        if (!isCorrect) {
            // Keep wrong letters — child must erase them; mark fields and allow retry
            this.missingInputs.forEach((inp, i) => {
                const ok = values[i] === this.expectedLetters[i];
                inp.style.backgroundColor = ok ? '#d4edda' : '#f8d7da';
                inp.style.borderColor = ok ? '#28a745' : '#dc3545';
                inp.disabled = false;
            });
            const wrongWord = this.buildWordFromGaps(values);
            if (!this.incorrectAnswers.some(a => a.word === this.currentWord.correct)) {
                this.incorrectAnswers.push({
                    word: this.currentWord.correct,
                    selected: wrongWord,
                    correct: this.currentWord.correct
                });
                this.updateStats(false);
            }
            this.showFeedback(false);
            const firstWrong = this.missingInputs.find((inp, i) => values[i] !== this.expectedLetters[i]);
            if (firstWrong) firstWrong.focus();
            return;
        }

        this.isAnswered = true;
        this.missingInputs.forEach(inp => {
            inp.disabled = true;
            inp.style.backgroundColor = '#d4edda';
            inp.style.borderColor = '#28a745';
        });
        // If previously marked wrong but then fixed — keep in review list, count as correct now
        this.showFeedback(true);
        this.updateStats(true);
    }

    buildWordFromGaps(letters) {
        const correct = this.currentWord.correct;
        let out = '';
        let gi = 0;
        const posSet = new Set(this.missingPositions);
        for (let i = 0; i < correct.length; i++) {
            if (posSet.has(i)) {
                out += letters[gi] || '_';
                gi++;
            } else {
                out += correct[i];
            }
        }
        return out;
    }

    checkAnswer(selectedOption) {
        if (this.isAnswered) return;

        const isCorrect = selectedOption === this.currentWord.correct;

        if (!isCorrect) {
            // Allow another try: mark only this option wrong, keep others clickable
            document.querySelectorAll('.option-btn').forEach(btn => {
                if (btn.textContent === selectedOption) {
                    btn.classList.add('incorrect');
                    btn.disabled = true;
                }
            });
            if (!this.incorrectAnswers.some(a => a.word === this.currentWord.correct)) {
                this.incorrectAnswers.push({
                    word: this.currentWord.correct,
                    selected: selectedOption,
                    correct: this.currentWord.correct
                });
                this.updateStats(false);
            }
            this.showFeedback(false);
            return;
        }

        this.isAnswered = true;
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.disabled = true;
            if (btn.textContent === this.currentWord.correct) {
                btn.classList.add('correct');
            }
        });
        this.showFeedback(true);
        this.updateStats(true);
    }

    showFeedback(isCorrect) {
        const feedback = document.getElementById('feedback');
        feedback.textContent = isCorrect ? '🎉 Правильно! Молодец!' : '😔 Неправильно. Попробуй ещё раз!';
        feedback.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
    }

    updateStats(isCorrect) {
        if (isCorrect === true) {
            this.correctCount++;
        } else if (isCorrect === false) {
            this.incorrectCount++;
        }
        
        document.getElementById('correct-count').textContent = this.correctCount;
        document.getElementById('incorrect-count').textContent = this.incorrectCount;
        // Show total unique words in the active session (95 for 'all', or 15 if sampled)
        document.getElementById('total-count').textContent = this.activeWordList.length;
    }

    updateProgress() {
        const total = this.activeWordList.length;
        const current = this.currentWordIndex + 1;
        const percentage = (current / total) * 100;
        
        document.getElementById('progress-fill').style.width = `${percentage}%`;
        document.getElementById('progress-text').textContent = `${current}/${total}`;
    }

    updateButtonStates() {
        const prevBtn = document.getElementById('prev-word');
        prevBtn.disabled = this.currentWordIndex === 0;
    }

    stopSpeech() {
        if (window.speechSynthesis) window.speechSynthesis.cancel();
        if (this.currentAudio) {
            this.currentAudio.pause();
            this.currentAudio = null;
        }
    }

    nextWord() {
        this.stopSpeech();
        this.currentWordIndex++;
        this.loadWord();
    }

    prevWord() {
        if (this.currentWordIndex > 0) {
            this.stopSpeech();
            this.currentWordIndex--;
            this.loadWord();
        }
    }

    showAnswer() {
        if (this.isAnswered) return;
        
        this.isAnswered = true;
        
        if (this.gameMode === 'choice') {
            // Show correct answer
            document.querySelectorAll('.option-btn').forEach(btn => {
                btn.disabled = true;
                if (btn.textContent === this.currentWord.correct) {
                    btn.classList.add('correct');
                }
            });
        } else if (this.gameMode === 'dictate' && this.dictateInput) {
            this.dictateInput.value = this.currentWord.correct;
            this.dictateInput.disabled = true;
            this.dictateInput.style.backgroundColor = '#d4edda';
            this.dictateInput.style.borderColor = '#28a745';
        } else if (this.missingInputs && this.missingInputs.length) {
            this.missingInputs.forEach((inp, i) => {
                inp.value = this.expectedLetters[i] || '';
                inp.disabled = true;
                inp.style.backgroundColor = '#d4edda';
                inp.style.borderColor = '#28a745';
            });
        } else if (this.missingInput) {
            this.missingInput.value = this.expectedLetter;
            this.missingInput.disabled = true;
            this.missingInput.style.backgroundColor = '#d4edda';
            this.missingInput.style.borderColor = '#28a745';
        }
        
        const feedback = document.getElementById('feedback');
        feedback.textContent = `Правильный ответ: ${this.currentWord.correct}`;
        feedback.className = 'feedback';
    }

    showGameComplete() {
        const feedback = document.getElementById('feedback');
        let incorrectAnswersHtml = '';
        
        if (this.incorrectAnswers.length > 0) {
            incorrectAnswersHtml = `
                <div style="margin-top: 20px; text-align: left; background: #f8f9fa; padding: 15px; border-radius: 10px;">
                    <h3>📝 Слова для повторения:</h3>
                    <ul style="list-style: none; padding: 0;">
            `;
            
            this.incorrectAnswers.forEach((item) => {
                const fullAnswer = item.selected;
                
                incorrectAnswersHtml += `
                    <li style="margin: 10px 0; padding: 10px; background: white; border-radius: 5px; border-left: 4px solid #e74c3c;">
                        <strong>${item.word}</strong><br>
                        <span style="color: #e74c3c;">❌ Ваш ответ: ${fullAnswer}</span><br>
                        <span style="color: #27ae60;">✅ Правильно: ${item.correct}</span>
                    </li>
                `;
            });
            
            incorrectAnswersHtml += `
                    </ul>
                </div>
            `;
        }
        
        const totalWords = this.activeWordList.length;
        const revisionButton = this.incorrectAnswers.length > 0 ? 
            `<button onclick="game.reviseMistakes()" style="margin: 10px; padding: 10px 20px; font-size: 1.2em; background: linear-gradient(45deg, #ff6b35, #f7931e); color: white; border: none; border-radius: 10px; cursor: pointer;">
                Повторить слова с ошибками
            </button>` : '';
        
        feedback.innerHTML = `
            <div style="text-align: center; padding: 20px;">
                <h2>🎊 Игра завершена! 🎊</h2>
                <p>Правильных ответов: ${this.correctCount}</p>
                <p>Неправильных ответов: ${this.incorrectCount}</p>
                <p>Точность: ${Math.round((this.correctCount / (this.correctCount + this.incorrectCount)) * 100)}%</p>
                ${incorrectAnswersHtml}
                <div>
                    <button onclick="location.reload()" style="margin: 10px; padding: 10px 20px; font-size: 1.2em; background: linear-gradient(45deg, #8B0000, #DC143C); color: white; border: none; border-radius: 10px; cursor: pointer;">
                        Играть снова
                    </button>
                    ${revisionButton}
                </div>
            </div>
        `;
        feedback.className = 'feedback';
        
        // Hide navigation buttons
        document.getElementById('prev-word').style.display = 'none';
        document.getElementById('next-word').style.display = 'none';
        document.getElementById('show-answer').style.display = 'none';
    }

    reconstructFullAnswer(word, enteredLetter, correctLetter) {
        // Find the position where the letter should be
        const correct = word;
        // Choose a wrong option that actually differs
        const wrong = this.currentWord.wrong.find(w => w !== correct) || this.currentWord.wrong[0];
        
        let missingPosition = -1;
        
        // Use stored position if available
        if (typeof this.missingPositionIndex === 'number' && this.missingPositionIndex >= 0) {
            missingPosition = this.missingPositionIndex;
        } else if (correct === 'вдруг') {
            missingPosition = 4;
        } else if (correct === 'до свидания') {
            // default to the 10th letter index
            missingPosition = 9;
        } else if (correct === 'щавель') {
            missingPosition = 1;
        } else {
            // Find the first difference
            for (let i = 0; i < Math.min(correct.length, wrong.length); i++) {
                if (correct[i] !== wrong[i]) {
                    missingPosition = i;
                    break;
                }
            }
        }
        
        if (missingPosition === -1) return enteredLetter;
        
        // Reconstruct the full word with the student's letter
        return correct.substring(0, missingPosition) + enteredLetter + correct.substring(missingPosition + 1);
    }

    reviseMistakes() {
        // Create new word list with only incorrect answers
        const mistakeWords = this.incorrectAnswers.map(item => 
            spellingWordList.find(w => w.word === item.word)
        ).filter(Boolean);
        
        if (mistakeWords.length === 0) return;
        
        // Reset game with mistake words
        this.activeWordList = mistakeWords;
        this.currentWordIndex = 0;
        this.correctCount = 0;
        this.incorrectCount = 0;
        this.incorrectAnswers = [];
        
        // Show navigation buttons again
        document.getElementById('prev-word').style.display = 'inline-block';
        document.getElementById('next-word').style.display = 'inline-block';
        document.getElementById('show-answer').style.display = 'inline-block';
        
        this.shuffleWords();
        this.loadWord();
        this.updateStats();
        this.updateProgress();
    }
}

// Initialize the game when the page loads
let game;
document.addEventListener('DOMContentLoaded', () => {
    game = new SpellingGame();
});