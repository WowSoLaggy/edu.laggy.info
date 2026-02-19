// Word list from the orthoepic dictionary - only words with clear stress indicators
const wordList = [
    { word: "алфавит", stressed: "алфави́т" },
    { word: "арбуз", stressed: "арбу́з" },
    { word: "баловаться", stressed: "балова́ться" },
    { word: "ворота", stressed: "воро́та" },
    { word: "впереди", stressed: "впереди́" },
    { word: "дарить", stressed: "дари́ть" },
    { word: "директор", stressed: "дире́ктор" },
    { word: "задать", stressed: "зада́ть" },
    { word: "звонить", stressed: "звони́ть" },
    { word: "инженер", stressed: "инжене́р" },
    { word: "инструмент", stressed: "инструме́нт" },
    { word: "километр", stressed: "киломе́тр" },
    { word: "клеить", stressed: "кле́ить" },
    { word: "конечно", stressed: "коне́чно" },
    { word: "красивый", stressed: "краси́вый" },
    { word: "магазин", stressed: "магази́н" },
    { word: "музей", stressed: "музе́й" },
    { word: "нарочно", stressed: "наро́чно" },
    { word: "начать", stressed: "нача́ть" },
    { word: "облако", stressed: "о́блако" },
    { word: "повторить", stressed: "повтори́ть" },
    { word: "помощник", stressed: "помо́щник" },
    { word: "понять", stressed: "поня́ть" },
    { word: "понял", stressed: "по́нял" },
    { word: "поняла", stressed: "поняла́" },
    { word: "портфель", stressed: "портфе́ль" },
    { word: "простыня", stressed: "простыня́" },
    { word: "ракушка", stressed: "раку́шка" },
    { word: "ремень", stressed: "реме́нь" },
    { word: "сантиметр", stressed: "сантиме́тр" },
    { word: "сзади", stressed: "сза́ди" },
    { word: "скворечник", stressed: "скворе́чник" },
    { word: "скучный", stressed: "ску́чный" },
    { word: "случай", stressed: "слу́чай" },
    { word: "стакан", stressed: "стака́н" },
    { word: "статуя", stressed: "ста́туя" },
    { word: "столяр", stressed: "столя́р" },
    { word: "строчная", stressed: "строчна́я" },
    { word: "творог", stressed: "тво́рог" },
    { word: "творог", stressed: "творо́г" },
    { word: "туфля", stressed: "ту́фля" },
    { word: "цыган", stressed: "цыга́н" },
    { word: "шофёр", stressed: "шофё́р" },
    { word: "щавель", stressed: "щаве́ль" },
    { word: "яичница", stressed: "яи́чница" },
    // Extended list based on user request
    { word: "арбузы", stressed: "арбу́зы" },
    { word: "банты", stressed: "ба́нты" },
    { word: "была", stressed: "была́" },
    { word: "было", stressed: "бы́ло" },
    { word: "взяла", stressed: "взяла́" },
    { word: "взяли", stressed: "взя́ли" },
    { word: "взяло", stressed: "взя́ло" },
    { word: "гербы", stressed: "гербы́" },
    { word: "дарит", stressed: "да́рит" },
    { word: "дала", stressed: "дала́" },
    { word: "дали", stressed: "да́ли" },
    { word: "директора", stressed: "директора́" },
    { word: "задал", stressed: "за́дал" },
    { word: "задала", stressed: "задала́" },
    { word: "задали", stressed: "за́дали" },
    { word: "звала", stressed: "звала́" },
    { word: "звали", stressed: "зва́ли" },
    { word: "звонил", stressed: "звони́л" },
    { word: "звонит", stressed: "звони́т" },
    { word: "звонят", stressed: "звоня́т" },
    { word: "инженеры", stressed: "инжене́ры" },
    { word: "километры", stressed: "киломе́тры" },
    { word: "клею", stressed: "кле́ю" },
    { word: "клеит", stressed: "кле́ит" },
    { word: "краны", stressed: "кра́ны" },
    { word: "красивее", stressed: "краси́вее" },
    { word: "начала", stressed: "начала́" },
    { word: "начали", stressed: "на́чали" },
    { word: "облака", stressed: "облака́" },
    { word: "повторил", stressed: "повтори́л" },
    { word: "простыни", stressed: "про́стыни" },
    { word: "сантиметры", stressed: "сантиме́тры" },
    { word: "свёкла", stressed: "свё́кла" },
    { word: "стаканы", stressed: "стака́ны" },
    { word: "столяры", stressed: "столяры́" },
    { word: "торты", stressed: "то́рты" },
    { word: "туфли", stressed: "ту́фли" },
    { word: "шарфы", stressed: "ша́рфы" },
    { word: "шофёры", stressed: "шофё́ры" }
];

class WordStressGame {
    constructor() {
        this.currentWordIndex = 0;
        this.correctCount = 0;
        this.incorrectCount = 0;
        this.currentWord = null;
        this.isAnswered = false;
        this.incorrectAnswers = [];
        this.activeWordList = [];
        this.gameMode = 'mc'; // 'mc' | 'place'
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
        // Ensure mode highlight reflects current mode on load
        this.setGameMode(this.gameMode);
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
        const mcBtn = document.getElementById('mode-mc');
        const placeBtn = document.getElementById('mode-place');
        if (mcBtn && placeBtn) {
            mcBtn.addEventListener('click', () => {
                this.setGameMode('mc');
            });
            placeBtn.addEventListener('click', () => {
                this.setGameMode('place');
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


    loadWord() {
        if (this.currentWordIndex >= this.activeWordList.length) {
            this.showGameComplete();
            return;
        }

        this.currentWord = this.activeWordList[this.currentWordIndex];
        this.isAnswered = false;

        // Update word display (optional; element may not exist if hidden/removed)
        const currentWordEl = document.getElementById('current-word');
        if (currentWordEl) {
            currentWordEl.textContent = this.currentWord.word;
        }

        // Clear feedback
        const feedback = document.getElementById('feedback');
        feedback.textContent = '';
        feedback.className = 'feedback';

        // Load content by mode
        this.updateModeUI();
        if (this.gameMode === 'mc') {
            this.loadMultipleChoice();
        } else {
            this.loadPlaceStress();
        }

        this.updateProgress();
        this.updateButtonStates();
    }

    loadMultipleChoice() {
        const container = document.getElementById('options-container');
        container.innerHTML = '';

        // Generate wrong options from the same word with different stress positions
        const wrongOptions = this.generateWrongOptions();
        const allOptions = [...wrongOptions, this.currentWord.stressed];
        
        // Shuffle options
        for (let i = allOptions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [allOptions[i], allOptions[j]] = [allOptions[j], allOptions[i]];
        }

        // Create option buttons
        allOptions.forEach(option => {
            const button = document.createElement('button');
            button.className = 'option-btn';
            button.textContent = option;
            button.addEventListener('click', () => {
                this.checkMultipleChoiceAnswer(option);
            });
            container.appendChild(button);
        });
    }

    generateWrongOptions() {
        const wrongOptions = [];
        const currentWord = this.currentWord.word;
        const stressedWord = this.currentWord.stressed;
        
        // Randomly choose number of options (2-4 wrong options + 1 correct = 3-5 total)
        const numWrongOptions = Math.floor(Math.random() * 3) + 2; // 2, 3, or 4 wrong options
        
        // Generate wrong options by moving stress to different syllables of the same word
        const syllables = this.getSyllables(currentWord);
        
        for (let i = 0; i < syllables.length && wrongOptions.length < numWrongOptions; i++) {
            const wrongStressed = this.addStressToSyllable(currentWord, i);
            if (wrongStressed !== stressedWord && !wrongOptions.includes(wrongStressed) && wrongStressed.includes('́')) {
                wrongOptions.push(wrongStressed);
            }
        }

        // If we don't have enough wrong options, try different stress positions
        if (wrongOptions.length < numWrongOptions) {
            // Try placing stress on each vowel position
            for (let i = 0; i < currentWord.length && wrongOptions.length < numWrongOptions; i++) {
                if (this.isVowel(currentWord[i])) {
                    const wrongStressed = this.addStressToVowel(currentWord, i);
                    if (wrongStressed !== stressedWord && !wrongOptions.includes(wrongStressed) && wrongStressed.includes('́')) {
                        wrongOptions.push(wrongStressed);
                    }
                }
            }
        }

        return wrongOptions.slice(0, numWrongOptions);
    }

    loadPlaceStress() {
        const container = document.getElementById('place-stress-container');
        container.innerHTML = '';
        const base = this.currentWord.word;
        const wrapper = document.createElement('div');
        wrapper.style.fontSize = '3em';
        wrapper.style.fontWeight = 'bold';
        wrapper.style.color = '#8B0000';
        wrapper.style.userSelect = 'none';

        for (let i = 0; i < base.length; i++) {
            const ch = base[i];
            const span = document.createElement('span');
            span.textContent = ch;
            span.style.cursor = this.isVowel(ch) ? 'pointer' : 'default';
            span.style.padding = '0 2px';
            if (this.isVowel(ch)) {
                span.addEventListener('click', () => {
                    if (this.isAnswered) return;
                    // highlight clicked
                    wrapper.querySelectorAll('span').forEach(s => s.style.background = '');
                    span.style.background = 'rgba(139,0,0,0.15)';
                    const withStress = this.addStressToVowel(base, this.getVowelIndexAt(base, i));
                    this.checkPlaceStressAnswer(withStress);
                });
            }
            wrapper.appendChild(span);
        }
        container.appendChild(wrapper);
    }

    getVowelIndexAt(word, position) {
        let vowelIndex = 0;
        for (let i = 0; i < word.length; i++) {
            if (this.isVowel(word[i])) {
                if (i === position) return vowelIndex;
                vowelIndex++;
            }
        }
        return -1;
    }

    checkPlaceStressAnswer(stressedCandidate) {
        this.isAnswered = true;
        const correctAnswers = this.getCorrectAnswersForWord(this.currentWord.word);
        const isCorrect = correctAnswers.includes(stressedCandidate);
        this.showFeedback(isCorrect);
        this.updateStats(isCorrect);
        if (!isCorrect) {
            this.incorrectAnswers.push({
                word: this.currentWord.word,
                selected: stressedCandidate,
                correct: correctAnswers.join(' или ')
            });
        }
        // Disable further clicks
        const cont = document.getElementById('place-stress-container');
        cont.querySelectorAll('span').forEach(s => s.style.pointerEvents = 'none');
    }

    getSyllables(word) {
        // Simple syllable detection for Russian words
        const vowels = 'аеёиоуыэюя';
        const syllables = [];
        let currentSyllable = '';
        
        for (let i = 0; i < word.length; i++) {
            currentSyllable += word[i];
            if (vowels.includes(word[i].toLowerCase())) {
                syllables.push(currentSyllable);
                currentSyllable = '';
            }
        }
        
        if (currentSyllable) {
            syllables[syllables.length - 1] += currentSyllable;
        }
        
        return syllables;
    }

    addStressToSyllable(word, syllableIndex) {
        const syllables = this.getSyllables(word);
        if (syllableIndex >= syllables.length) return word;
        
        let result = '';
        let currentSyllable = 0;
        
        for (let i = 0; i < word.length; i++) {
            result += word[i];
            if (this.isVowel(word[i])) {
                if (currentSyllable === syllableIndex) {
                    result += '́';
                }
                currentSyllable++;
            }
        }
        
        return result;
    }

    addStressToVowel(word, vowelIndex) {
        let result = '';
        let vowelCount = 0;
        
        for (let i = 0; i < word.length; i++) {
            result += word[i];
            if (this.isVowel(word[i])) {
                if (vowelCount === vowelIndex) {
                    result += '́';
                }
                vowelCount++;
            }
        }
        
        return result;
    }

    isVowel(char) {
        const vowels = 'аеёиоуыэюя';
        return vowels.includes(char.toLowerCase());
    }

    getCorrectAnswersForWord(word) {
        return wordList
            .filter(item => item.word === word)
            .map(item => item.stressed);
    }


    checkMultipleChoiceAnswer(selectedOption) {
        if (this.isAnswered) return;
        
        this.isAnswered = true;
        const correctAnswers = this.getCorrectAnswersForWord(this.currentWord.word);
        const isCorrect = correctAnswers.includes(selectedOption);
        
        // Track incorrect answers for review
        if (!isCorrect) {
            this.incorrectAnswers.push({
                word: this.currentWord.word,
                selected: selectedOption,
                correct: correctAnswers.join(' или ')
            });
        }
        
        // Update button styles
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.disabled = true;
            if (correctAnswers.includes(btn.textContent)) {
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
        document.getElementById('total-count').textContent = this.correctCount + this.incorrectCount;
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
        const correctAnswers = this.getCorrectAnswersForWord(this.currentWord.word);
        if (this.gameMode === 'mc') {
            document.querySelectorAll('.option-btn').forEach(btn => {
                btn.disabled = true;
                if (correctAnswers.includes(btn.textContent)) {
                    btn.classList.add('correct');
                }
            });
        } else {
            // Place-stress mode: just show answers text
        }
        const feedback = document.getElementById('feedback');
        feedback.textContent = `Правильный ответ: ${correctAnswers.join(' или ')}`;
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
                incorrectAnswersHtml += `
                    <li style="margin: 10px 0; padding: 10px; background: white; border-radius: 5px; border-left: 4px solid #e74c3c;">
                        <strong>${item.word}</strong><br>
                        <span style="color: #e74c3c;">❌ Ваш ответ: ${item.selected}</span><br>
                        <span style="color: #27ae60;">✅ Правильно: ${item.correct}</span>
                    </li>
                `;
            });
            
            incorrectAnswersHtml += `
                    </ul>
                </div>
            `;
        }
        
        const revisionButton = this.incorrectAnswers.length > 0 ? 
            `<button onclick="stressGame.reviseMistakes()" style="margin: 10px; padding: 10px 20px; font-size: 1.2em; background: linear-gradient(45deg, #ff6b35, #f7931e); color: white; border: none; border-radius: 10px; cursor: pointer;">
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

    reviseMistakes() {
        // Create new word list with only incorrect answers
        const mistakeWords = this.incorrectAnswers.map(item => 
            wordList.find(w => w.word === item.word)
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

    setGameMode(mode) {
        if (mode !== 'mc' && mode !== 'place') return;
        this.gameMode = mode;
        // Toggle active mode button
        const mcBtn = document.getElementById('mode-mc');
        const placeBtn = document.getElementById('mode-place');
        if (mcBtn && placeBtn) {
            mcBtn.classList.toggle('active-mode', mode === 'mc');
            placeBtn.classList.toggle('active-mode', mode === 'place');
        }
        this.loadWord();
    }

    updateModeUI() {
        const mc = document.getElementById('multiple-choice-mode');
        const place = document.getElementById('place-stress-mode');
        const wordDisplay = document.getElementById('word-display');
        if (!mc || !place) return;
        mc.style.display = this.gameMode === 'mc' ? 'block' : 'none';
        place.style.display = this.gameMode === 'place' ? 'block' : 'none';
        // wordDisplay may not exist anymore; no toggling needed
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

    buildActiveList() {
        const uniqueWords = Array.from(new Set(wordList.map(w => w.word)));
        let chosenWords = uniqueWords;
        if (this.trainSize === '15' && uniqueWords.length > 15) {
            chosenWords = this.sampleArray(uniqueWords, 15);
        }
        // For each base word, pick the first stressed variant as the prompt
        this.activeWordList = chosenWords.map(base => wordList.find(w => w.word === base));
    }

    sampleArray(arr, n) {
        const copy = [...arr];
        for (let i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy.slice(0, n);
    }
}

// Initialize the game when the page loads
let stressGame;
document.addEventListener('DOMContentLoaded', () => {
    stressGame = new WordStressGame();
});