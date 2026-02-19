// Exam topics data
const examTopics = {
    1: {
        title: "Виды речи",
        text: "Речь бывает:\n\n1 Устная речь - это речь которую мы слышим и произносим\n\nПисьменная речь - это речь, которую мы читаем и пишем\n\nРечь про себя -это наша внутренняя речь, когда мы думаем, размышляем, читаем про себя"
    },
    2: {
        title: "Диалог и монолог",
        text: "Диалог – это речь двух или нескольких людей\n\nМонолог – это речь одного человека, обращенная к слушателям или самому себе."
    },
    3: {
        title: "Текст и части текста",
        text: "Текст состоит из нескольких предложений, которые объединены общей темой и связаны по смыслу. Текст можно озаглавить.\n\nСмысловые части текста\n\nНачало - готовит читателя к восприятию основного содержания\n\nОсновная часть -  раскрывается содержание текста\n\nКонцовка - завершает текст"
    },
    4: {
        title: "Тема и главная мысль текста",
        text: "Тема текста – это о ком или о чем говорится в тексте.\n\nОсновная мысль текста – это главное, о чем хотел сказать автор читателю."
    },
    5: {
        title: "Предложение + какие знаки препинания ставятся в конце предложения",
        text: "Предложение – это слово или несколько слов, которые связаны по смыслу и выражают законченную мысль. Слова в предложении пишутся раздельно.\n\nЗнаки препинания, которые ставятся в конце предложения:\n\nТочка (.) - ставится, если в предложении спокойно сообщается о чем-либо\n\nВопросительный знак (?) - ставится, если предложение содержит вопрос\n\nВосклицательный знак (!)- ставится, если предложение произносится с сильным чувством"
    },
    6: {
        title: "Предложения по цели высказывания",
        text: "Повествовательные предложения содержат сообщение о ком или о чём-либо.\n\nНаступила золотая осень.\n\nВопросительные предложения заключают в себе вопрос.\n\nКогда деревья сбрасывают листву?\n\nПобудительные предложения выражают побуждение к действию (приказ, совет, просьбу).\n\nНе хвались, пока люди не похвалят."
    },
    7: {
        title: "Предложения по эмоциональной окраске (интонации)",
        text: "Повествовательные, вопросительные и побудительные предложения по интонации могут быть восклицательными и невосклицательными.\n\nВосклицательные предложения выражают сильное чувство: восторг, радость, удивление, испуг. В конце восклицательных предложений ставится восклицательный знак (!).\n\nКак красиво в осеннем лесу!\n\nНевосклицательные предложения произносятся спокойно, без ярко выраженных чувств.\n\nВ лесу царствует золотая осень."
    },
    8: {
        title: "Главные члены предложения",
        text: "Главные члены предложения – это слова, которые составляют основу предложения. В ней заключается главный смысл предложения.\n\nГлавными членами предложения являются подлежащее и сказуемое.\n\nПодлежащее – это главный член предложения, который обозначает о ком или о чём говорится в предложении, отвечает на вопросы кто? или что? и подчеркивается одной чертой (________). Птицы летят.\n\nСказуемое – главный член предложения, который обозначает что говорится о подлежащем, отвечает на вопросы что делает? что делают? что делал? что сделал? что сделает? что сделают? и подчеркивается двумя чертами(======). Дети играют.\n\nПодлежащее и сказуемое составляют грамматическую основу предложения."
    },
    9: {
        title: "Второстепенные члены предложения",
        text: "Второстепенные члены предложения – это слова, которые не составляют основу предложения, а поясняют и уточняют главные члены предложения."
    },
    10: {
        title: "Распространённые и нераспространённые предложения",
        text: "Нераспространенное предложение состоит только из главных членов.\n\nРаспространенное предложение состоит из главных и второстепенных членов."
    },
    11: {
        title: "Однозначные и многозначные слова",
        text: "Однозначные слова имеют одно лексическое значение (ландыш, берёза, пальто).\n\nМногозначные слова имеют два и более лексических значения (язык, звезда, иглы)."
    },
    12: {
        title: "Прямое и переносное значение многозначных слов",
        text: "Прямое значение\n\n- прямо указывает на предмет, признак или действие\n\nдождевое облако\nзолотая цепочка\nстол стоит\n\nПереносное значение\n\n- переносит частичку прямого значения на другой предмет, признак или действие, по какому-либо сходству\n\nоблако пыли\nзолотые руки\nработа стоит"
    },
    13: {
        title: "Синонимы и антонимы",
        text: "Синонимы – слова, одинаковые или близкие по смыслу, но различные в произношении (метель –вьюга, пурга, буран, храбрый и смелый, родник и ключ).\n\nАнтонимы – слова, противоположные по смыслу (высокий – низкий, добрый – злой)."
    },
    14: {
        title: "Корень слова",
        text: "Корень слова – это главная часть в слове, в которой заключено общее лексическое значение всех однокоренных слов (лес, лесок, лесной, лесник).\n\nКорень в слове выделяется знаком \"дуга\"."
    },
    15: {
        title: "Окончание",
        text: "Окончание — изменяемая часть слова. Окончание обозначается знаком \"окошко\". Окончание служит для связи слов в предложении и для образования форм слова. Чтобы найти окончание, нужно изменить форму слова.\n\nЗвезда - звёзды, берёза - берёзы.\n\nКогда окончание не выражено звуками в устной речи и буквами в письменной речи, такое окончание называют нулевым. Дождь, торт."
    },
    16: {
        title: "Приставка",
        text: "Приставка — значимая часть слова, которая стоит перед корнем и служит для образования новых слов. Приставка обозначается знаком.\n\nлес — подлесок, вода — подводный, позвонит, перезвонит (заново сделает), зазвенели (начало действия)."
    },
    17: {
        title: "Суффикс",
        text: "Суффикс — значимая часть слова, которая стоит после корня и служит для образования новых слов. Суффикс обозначается знаком ^.\n\nдомик,  учитель, слонёнок."
    },
    18: {
        title: "Слог",
        text: "При произнесении слова в нём можно выделить слоги. Слог состоит из одного или нескольких звуков. В слоге обязательно есть гласный звук. В слове столько слогов, сколько гласных звуков. (а-ист, ру-ка, о-кунь)."
    },
    19: {
        title: "Ударение",
        text: "Ударение – это выделение голосом одного из слогов в слове, Ударный слог отличается от безударного тем, что он всегда произносится громче и тянется дольше.\n\nЗнак ударения в слове ставится над буквой, которая обозначает ударный гласный звук. (алфавИт, стАтуя)\n\nУдарение помогает различать одинаковые по написанию, но разные по значению слова (мОю-моЮ, Атлас - атлАс).\n\nУдарение в словах русского языка подвижно, оно может переходить с одного слога на другой (землЯ - зЕмли, горА - гОры)."
    },
    20: {
        title: "Правила переноса слов",
        text: "слово переносится с одной строки на другую по слогам (кни-га, ста-кан)\n\nодну букву не оставляют на строке и не переносят на другую строчку (шкаф, класс)\n\nне переносятся слова, которые имеют один слог и слог, состоящий из одной буквы гласного звука (кот, улей, змея)\n\nбуквы Й и Ь не отделяются от стоящей перед ними буквы (май-ка, конь-ки)\n\nпри переносе слов с удвоенными согласными одну букву оставляют на строке, а другую переносят (ван-на, кас-са)."
    },
    21: {
        title: "Однокоренные слова и формы слова",
        text: "Однокоренные слова – это родственные слова, близкие по значению и имеющие одинаковый корень (лес, лесной, лесочек, лесник).\n\nФорма слова -  это одно и то же слово, у которого общий корень, но изменили окончание (лесной, лесная, лесные, лесное; яблоко-яблоки)."
    },
    22: {
        title: "Звуки и буквы",
        text: "Звуки мы произносим и слышим. Звуки речи обозначаются на письме буквами.\n\nБуквы – это знаки письма, мы их видим, пишем, читаем, называем."
    },
    23: {
        title: "Алфавит",
        text: "Русский алфавит — это буквы русского языка, расположенные в определенном порядке. Каждая буква имеет своё место, начертание и название. В русском алфавите 33 буквы: 21 буква обозначает согласные звуки, 10 букв обозначают гласные звуки и 2 буквы, не обозначающие звука (ъ, ь)."
    },
    24: {
        title: "Отличия гласного звука от согласного",
        text: "гласный звук состоит только из голоса\n\nгласные звуки произносятся свободно, воздух не встречает преграды\n\nгласные образуют слоги: у-тя-та"
    },
    25: {
        title: "Проверяемое и проверочное слово",
        text: "Проверяемое слово – это слово, в котором проверяется написание буквы, обозначающей безударный гласный звук (лИса, пИсьмо, кОвёр)\n\nПроверочное слово – это слово, в котором проверяемая буква обозначает ударный гласный звук (лИсы, пИсьма, кОврик)"
    },
    26: {
        title: "Как проверить безударный гласный звук в корне слова?",
        text: "Чтобы подобрать проверочное слово для обозначения буквой безударного гласного звука в корне слова, надо:\n\nа) или изменить форму слова (моря – море)\n\nб) или подобрать однокоренное слово (трава – травка)\n\n- так, чтобы безударный гласный звук в корне слова стал ударным.\n\nВ проверяемом и проверочном словах гласные звуки в безударном и ударном слогах корня пишутся одинаково.\n\nБуква, обозначающая безударный гласный звук в корне слова – это орфограмма, ее написание надо проверить или запомнить.\n\nЕсть слова, в которых написание буквы безударного гласного звука в корне проверить нельзя: лопата, картина, пальто  и т.д.. Правописание таких слов надо запомнить или проверять по орфографическому словарю."
    },
    27: {
        title: "Отличия согласного звука от гласного",
        text: "Согласный звук:\n\nсостоит из голоса и шума или только из шума\n\nпри его произнесении воздух встречает преграду (язык, губы, зубы)\n\nобразует слог только вместе с гласным звуком (ма/ма, кни/га)"
    },
    28: {
        title: "Функции мягкого знака в русском языке",
        text: "Мягкий знак (Ь) выполняет две функции:\n\nуказывает на мягкость предыдущего согласного звука (пишется в конце слова или между согласными звуками)  (день, пальто)\n\nразделяет в слове согласный звук от гласного  (не даёт этим звукам слиться) (семья, воробьи)."
    },
    29: {
        title: "Как отличить звонкие согласные звуки от глухих?",
        text: "Положить ладонь на горло и попеременно произносите звонкий и глухой согласные звуки. При произнесении звонкого звука чувствуем дребезжание (вибрацию) голосовых связок; без вибрации - звук глухой. Звонкие произносятся с участием голоса и шума, а глухие с участием шума.",
        hasTable: true
    }
};

// Track visited cards
const visitedCards = new Set();

// Initialize the exam page
document.addEventListener('DOMContentLoaded', () => {
    const studyBtn = document.getElementById('study-btn');
    if (studyBtn) {
        studyBtn.addEventListener('click', () => {
            const cardsGrid = document.getElementById('cards-grid');
            const quizDisplay = document.getElementById('quiz-display');
            if (cardsGrid) {
                cardsGrid.style.display = 'grid';
                studyBtn.style.display = 'none';
                const quizBtn = document.getElementById('quiz-btn');
                if (quizBtn) quizBtn.style.display = 'none';
                if (quizDisplay) quizDisplay.style.display = 'none';
                createCards();
            }
        });
    }
    
    const quizBtn = document.getElementById('quiz-btn');
    if (quizBtn) {
        quizBtn.addEventListener('click', () => {
            startQuiz();
        });
    }
    
    const answerBtn = document.getElementById('answer-btn');
    if (answerBtn) {
        answerBtn.addEventListener('click', () => {
            showQuizAnswer();
        });
    }
    
    const spinAgainBtn = document.getElementById('spin-again-btn');
    if (spinAgainBtn) {
        spinAgainBtn.addEventListener('click', () => {
            startQuiz();
        });
    }
});

function createCards() {
    const grid = document.getElementById('cards-grid');
    if (!grid) return;
    grid.innerHTML = '';
    
    // Create cards for numbers 1-29 in correct order
    for (let num = 1; num <= 29; num++) {
        const card = document.createElement('div');
        card.className = 'card';
        card.textContent = num;
        card.addEventListener('click', () => showContent(num));
        
        // Mark as visited if already seen
        if (visitedCards.has(num)) {
            card.classList.add('visited');
        }
        
        grid.appendChild(card);
    }
}

function showContent(number) {
    const topic = examTopics[number];
    if (!topic) return;
    
    // Mark as visited
    visitedCards.add(number);
    
    // Update visited card appearance
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (card.textContent.trim() === number.toString()) {
            card.classList.add('visited');
        }
    });
    
    // Display content
    document.getElementById('content-number').textContent = `Тема ${number}`;
    document.getElementById('content-title').textContent = topic.title;
    
    const contentText = document.getElementById('content-text');
    contentText.innerHTML = '';
    
    // Add text content
    const textDiv = document.createElement('div');
    textDiv.style.whiteSpace = 'pre-line';
    textDiv.textContent = topic.text;
    contentText.appendChild(textDiv);
    
    // Add table for topic 29
    if (topic.hasTable && number === 29) {
        const table = createConsonantTable();
        contentText.appendChild(table);
    }
    
    const display = document.getElementById('content-display');
    display.classList.add('active');
    
    // Scroll to content
    display.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function createConsonantTable() {
    const table = document.createElement('table');
    table.className = 'consonant-table';
    
    // Header row
    const headerRow = document.createElement('tr');
    const header = document.createElement('th');
    header.colSpan = 2;
    header.textContent = 'Согласные звуки';
    headerRow.appendChild(header);
    table.appendChild(headerRow);
    
    // Sub-header row
    const subHeaderRow = document.createElement('tr');
    const voicedHeader = document.createElement('th');
    voicedHeader.textContent = 'Звонкие согласные';
    const voicelessHeader = document.createElement('th');
    voicelessHeader.textContent = 'Глухие согласные';
    subHeaderRow.appendChild(voicedHeader);
    subHeaderRow.appendChild(voicelessHeader);
    table.appendChild(subHeaderRow);
    
    // Hard row
    const hardRow = document.createElement('tr');
    const hardVoiced = document.createElement('td');
    hardVoiced.innerHTML = '<strong>Твёрдые</strong><br>[Б] [В] [Г] [Д] [Ж] [З] [Л] [М] [Н] [Р]';
    const hardVoiceless = document.createElement('td');
    hardVoiceless.innerHTML = '<strong>Твёрдые</strong><br>[П] [Ф] [К] [Т] [Ш] [С] [Х] [Ц]';
    hardRow.appendChild(hardVoiced);
    hardRow.appendChild(hardVoiceless);
    table.appendChild(hardRow);
    
    // Soft row
    const softRow = document.createElement('tr');
    const softVoiced = document.createElement('td');
    softVoiced.innerHTML = '<strong>Мягкие</strong><br>[Б\'] [В\'] [Г\'] [Д\'] [З\'] [Л\'] [М\'] [Н\'] [Р\'] [Й\']';
    const softVoiceless = document.createElement('td');
    softVoiceless.innerHTML = '<strong>Мягкие</strong><br>[П\'] [Ф\'] [К\'] [Т\'] [С\'] [Х\'] [Ч\'] [Щ\']';
    softRow.appendChild(softVoiced);
    softRow.appendChild(softVoiceless);
    table.appendChild(softRow);
    
    return table;
}

function closeContent() {
    const display = document.getElementById('content-display');
    display.classList.remove('active');
}

let currentQuizTopic = null;

function startQuiz() {
    // Hide study mode
    const cardsGrid = document.getElementById('cards-grid');
    const studyBtn = document.getElementById('study-btn');
    if (cardsGrid) cardsGrid.style.display = 'none';
    if (studyBtn) studyBtn.style.display = 'none';
    
    // Show quiz display
    const quizDisplay = document.getElementById('quiz-display');
    const quizResult = document.getElementById('quiz-result');
    const quizAnswer = document.getElementById('quiz-answer');
    const wheel = document.getElementById('wheel');
    
    if (quizDisplay) quizDisplay.style.display = 'block';
    if (quizResult) quizResult.style.display = 'none';
    if (quizAnswer) quizAnswer.style.display = 'none';
    
    // Create wheel numbers if not already created
    createWheelNumbers();
    
    // Reset wheel rotation
    if (wheel) {
        wheel.style.transform = 'rotate(0deg)';
    }
    
    // Spin the wheel
    setTimeout(() => {
        spinWheel();
    }, 100);
}

function createWheelNumbers() {
    const wheelNumbers = document.getElementById('wheel-numbers');
    if (!wheelNumbers || wheelNumbers.children.length > 0) return; // Already created
    
    const radius = 140; // Distance from center to numbers (well within segments)
    const centerX = 200; // Half of wheel width (400px)
    const centerY = 200; // Half of wheel height (400px)
    const anglePerNumber = 360 / 29; // Width of each segment
    
    for (let i = 1; i <= 29; i++) {
        // Calculate angle: number 1 starts at top (270 degrees in CSS)
        // Center each number in the middle of its segment
        // Start angle for segment i: 270 + (i-1) * anglePerNumber
        // Center of segment: add half the segment width
        const segmentStartAngle = 270 + (i - 1) * anglePerNumber;
        const segmentCenterAngle = segmentStartAngle + (anglePerNumber / 2);
        const radian = (segmentCenterAngle * Math.PI) / 180;
        
        const x = centerX + radius * Math.cos(radian);
        const y = centerY + radius * Math.sin(radian);
        
        const numberDiv = document.createElement('div');
        numberDiv.className = 'wheel-number';
        numberDiv.textContent = i;
        numberDiv.style.left = `${x}px`;
        numberDiv.style.top = `${y}px`;
        // Rotate number to be vertical (perpendicular to radius, pointing outward)
        // The number should be rotated to align with the radial direction
        numberDiv.style.transform = `translate(-50%, -50%) rotate(${segmentCenterAngle + 90}deg)`;
        
        wheelNumbers.appendChild(numberDiv);
    }
}

function spinWheel() {
    const wheel = document.getElementById('wheel');
    const quizResult = document.getElementById('quiz-result');
    const quizAnswer = document.getElementById('quiz-answer');
    
    if (!wheel) return;
    
    // Generate random number 1-29
    const randomNumber = Math.floor(Math.random() * 29) + 1;
    currentQuizTopic = randomNumber;
    
    // Calculate rotation to bring selected number's center to top (pointer position)
    // In CSS: 0° = right, 90° = bottom, 180° = left, 270° = top (pointer)
    const anglePerNumber = 360 / 29;
    
    // Current center angle of the selected number's segment (where it is at 0 rotation)
    // Number 1's segment center is at: 270 + anglePerNumber/2
    // Number N's segment center is at: 270 + (N-1) * anglePerNumber + anglePerNumber/2
    const selectedNumberCenterAngle = 270 + (randomNumber - 1) * anglePerNumber + (anglePerNumber / 2);
    
    // We want the selected number's center to end up at 270° (top where pointer is)
    // After rotating by R degrees, the center will be at: (selectedNumberCenterAngle + R) mod 360
    // We want: (selectedNumberCenterAngle + R) mod 360 = 270
    // So: R = 270 - selectedNumberCenterAngle (mod 360)
    let targetRotation = 270 - selectedNumberCenterAngle;
    
    // Normalize to positive rotation (0 to 360)
    targetRotation = ((targetRotation % 360) + 360) % 360;
    
    // Add multiple full rotations for visual effect
    const baseRotations = 5; // Number of full rotations
    const totalRotation = (baseRotations * 360) + targetRotation;
    
    // Apply rotation
    wheel.style.transform = `rotate(${totalRotation}deg)`;
    
    // After animation completes, show the result
    setTimeout(() => {
        if (quizResult) {
            const topic = examTopics[currentQuizTopic];
            if (topic) {
                document.getElementById('quiz-number').textContent = currentQuizTopic;
                document.getElementById('quiz-title').textContent = topic.title;
                quizResult.style.display = 'block';
                if (quizAnswer) quizAnswer.style.display = 'none';
            }
        }
    }, 3000); // Match the CSS transition duration
}

function showQuizAnswer() {
    if (!currentQuizTopic) return;
    
    const topic = examTopics[currentQuizTopic];
    if (!topic) return;
    
    const quizAnswer = document.getElementById('quiz-answer');
    const quizAnswerContent = document.getElementById('quiz-answer-content');
    
    if (!quizAnswer || !quizAnswerContent) return;
    
    // Clear previous content
    quizAnswerContent.innerHTML = '';
    
    // Add text content
    const textDiv = document.createElement('div');
    textDiv.style.whiteSpace = 'pre-line';
    textDiv.style.fontSize = '1.2em';
    textDiv.style.lineHeight = '1.8';
    textDiv.style.color = '#333';
    textDiv.textContent = topic.text;
    quizAnswerContent.appendChild(textDiv);
    
    // Add table for topic 29
    if (topic.hasTable && currentQuizTopic === 29) {
        const table = createConsonantTable();
        quizAnswerContent.appendChild(table);
    }
    
    quizAnswer.style.display = 'block';
}

