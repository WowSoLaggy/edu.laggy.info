// Spelling word list from the orthographic dictionary
const spellingWordList = [
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

class SpellingGame {
    constructor() {
        this.currentWordIndex = 0;
        this.correctCount = 0;
        this.incorrectCount = 0;
        this.currentWord = null;
        this.isAnswered = false;
        this.incorrectAnswers = [];
        this.activeWordList = [];
        this.gameMode = 'choice'; // 'choice' | 'missing'
        this.trainSize = 'all'; // 'all' | '15'
        
        this.initializeGame();
        this.bindEvents();
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
        if (choiceBtn && missingBtn) {
            choiceBtn.addEventListener('click', () => {
                this.setGameMode('choice');
            });
            missingBtn.addEventListener('click', () => {
                this.setGameMode('missing');
            });
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
        if (mode !== 'choice' && mode !== 'missing') return;
        this.gameMode = mode;
        
        // Toggle active mode button
        const choiceBtn = document.getElementById('mode-choice');
        const missingBtn = document.getElementById('mode-missing');
        if (choiceBtn && missingBtn) {
            choiceBtn.classList.toggle('active-mode', mode === 'choice');
            missingBtn.classList.toggle('active-mode', mode === 'missing');
        }
        
        this.loadWord();
    }

    setTrainSize(size) {
        if (size !== 'all' && size !== '15') return;
        this.trainSize = size;
        this.resetGameWithNewList();
    }

    resetGameWithNewList() {
        this.currentWordIndex = 0;
        this.correctCount = 0;
        this.incorrectCount = 0;
        this.incorrectAnswers = [];
        this.buildActiveList();
        this.shuffleWords();
        this.loadWord();
        this.updateStats();
        this.updateProgress();
    }

    updateModeUI() {
        const choiceMode = document.getElementById('multiple-choice-mode');
        const missingMode = document.getElementById('missing-letter-mode');
        const wordDisplay = document.getElementById('word-display');
        if (!choiceMode || !missingMode) return;
        choiceMode.style.display = this.gameMode === 'choice' ? 'block' : 'none';
        missingMode.style.display = this.gameMode === 'missing' ? 'block' : 'none';
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
        } else {
            this.loadMissingLetter();
        }

        this.updateProgress();
        this.updateButtonStates();
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

    loadMissingLetter() {
        const container = document.getElementById('missing-letter-container');
        container.innerHTML = '';

        // Find the position where the word differs from wrong options
        const correct = this.currentWord.correct;
        // Choose a wrong option that actually differs from correct
        const wrong = this.currentWord.wrong.find(w => w !== correct) || this.currentWord.wrong[0];
        
        let missingPosition = -1;
        let missingLetter = '';
        
        // Special cases for specific words
        if (correct === 'вдруг') {
            // positions are 1-based in the UI description; index 4 is the 5th letter 'г'
            missingPosition = 4;
            missingLetter = 'г';
        } else if (correct === 'до свидания') {
            // allow either 6th or 10th position (both 'и'); choose 10th as default gap
            missingPosition = 9;
            missingLetter = 'и';
        } else if (correct === 'щавель') {
            // 2nd letter 'а' per requirement
            missingPosition = 1;
            missingLetter = 'а';
        } else {
            // Find the first difference
            for (let i = 0; i < Math.min(correct.length, wrong.length); i++) {
                if (correct[i] !== wrong[i]) {
                    missingPosition = i;
                    missingLetter = correct[i];
                    break;
                }
            }

            if (missingPosition === -1) {
                // Fallback: use the last character
                missingPosition = correct.length - 1;
                missingLetter = correct[missingPosition];
            }
        }

        // Create word with missing letter - inline input
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

        // Split word into parts and create inline input
        const beforeGap = correct.substring(0, missingPosition);
        const afterGap = correct.substring(missingPosition + 1);
        
        if (beforeGap) {
            const beforeSpan = document.createElement('span');
            beforeSpan.textContent = beforeGap;
            wrapper.appendChild(beforeSpan);
        }

        const input = document.createElement('input');
        input.type = 'text';
        input.maxLength = 1;
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
        
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && input.value.trim()) {
                this.checkMissingLetter(input.value.trim().toLowerCase(), missingLetter.toLowerCase());
            }
        });

        input.addEventListener('input', (e) => {
            if (e.target.value.length === 1) {
                this.checkMissingLetter(e.target.value.toLowerCase(), missingLetter.toLowerCase());
            }
        });

        wrapper.appendChild(input);

        if (afterGap) {
            const afterSpan = document.createElement('span');
            afterSpan.textContent = afterGap;
            wrapper.appendChild(afterSpan);
        }

        container.appendChild(wrapper);

        // Store references for later use
        this.missingInput = input;
        this.expectedLetter = missingLetter.toLowerCase();
        this.missingPositionIndex = missingPosition; // store for reconstruction
    }

    checkMissingLetter(entered, expected) {
        if (this.isAnswered) return;
        
        this.isAnswered = true;
        const isCorrect = entered === expected;
        
        // Disable input
        this.missingInput.disabled = true;
        
        // Track incorrect answers for review
        if (!isCorrect) {
            this.incorrectAnswers.push({
                word: this.currentWord.correct,
                selected: entered,
                correct: expected
            });
        }
        
        // Show result
        this.missingInput.style.backgroundColor = isCorrect ? '#d4edda' : '#f8d7da';
        this.missingInput.style.borderColor = isCorrect ? '#28a745' : '#dc3545';
        
        this.showFeedback(isCorrect);
        this.updateStats(isCorrect);
    }

    checkAnswer(selectedOption) {
        if (this.isAnswered) return;
        
        this.isAnswered = true;
        const isCorrect = selectedOption === this.currentWord.correct;
        
        // Track incorrect answers for review
        if (!isCorrect) {
            this.incorrectAnswers.push({
                word: this.currentWord.correct,
                selected: selectedOption,
                correct: this.currentWord.correct
            });
        }
        
        // Update button styles
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.disabled = true;
            if (btn.textContent === this.currentWord.correct) {
                btn.classList.add('correct');
            } else if (btn.textContent === selectedOption && !isCorrect) {
                btn.classList.add('incorrect');
            }
        });

        this.showFeedback(isCorrect);
        this.updateStats(isCorrect);
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

    nextWord() {
        this.currentWordIndex++;
        this.loadWord();
    }

    prevWord() {
        if (this.currentWordIndex > 0) {
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
        } else {
            // Show correct letter
            if (this.missingInput) {
                this.missingInput.value = this.expectedLetter;
                this.missingInput.disabled = true;
                this.missingInput.style.backgroundColor = '#d4edda';
                this.missingInput.style.borderColor = '#28a745';
            }
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
            
            this.incorrectAnswers.forEach((item, index) => {
                // Show full student answer, not just the letter
                const fullAnswer = this.gameMode === 'missing' ? 
                    this.reconstructFullAnswer(item.word, item.selected, item.correct) : 
                    item.selected;
                
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