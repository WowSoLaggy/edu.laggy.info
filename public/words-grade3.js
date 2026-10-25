// 3 класс — орфоэпический словарь
// 1 столбик — левая колонка учебника
// 2 столбик — правая колонка учебника
// Односложные формы без выбора ударения (что, торт, шарф, шкаф) не включены,
// как «брать», «кран» в 1 столбике. Пометы [тэ], [шн] и т.п. — о произношении, не об ударении.

window.ORTHOEPIC_COLUMN_1 = [
    { word: "алфавит", stressed: "алфави́т" },
    { word: "антенна", stressed: "анте́нна" },
    { word: "брала", stressed: "брала́" },
    { word: "брали", stressed: "бра́ли" },
    { word: "брало", stressed: "бра́ло" },
    { word: "взяла", stressed: "взяла́" },
    { word: "взяли", stressed: "взя́ли" },
    { word: "взяло", stressed: "взя́ло" },
    { word: "взяло", stressed: "взяло́" },
    { word: "договор", stressed: "догово́р" },
    { word: "договоры", stressed: "догово́ры" },
    { word: "досуг", stressed: "досу́г" },
    { word: "жаворонок", stressed: "жа́воронок" },
    { word: "жаворонки", stressed: "жа́воронки" },
    { word: "ждала", stressed: "ждала́" },
    { word: "ждали", stressed: "жда́ли" },
    { word: "ждало", stressed: "жда́ло" },
    { word: "звала", stressed: "звала́" },
    { word: "звали", stressed: "зва́ли" },
    { word: "звало", stressed: "зва́ло" },
    { word: "звонить", stressed: "звони́ть" },
    { word: "звонишь", stressed: "звони́шь" },
    { word: "звонит", stressed: "звони́т" },
    { word: "звонят", stressed: "звоня́т" },
    { word: "инструмент", stressed: "инструме́нт" },
    { word: "инструменты", stressed: "инструме́нты" },
    { word: "километр", stressed: "киломе́тр" },
    { word: "километры", stressed: "киломе́тры" },
    { word: "конечно", stressed: "коне́чно" },
    { word: "краны", stressed: "кра́ны" },
    { word: "красивее", stressed: "краси́вее" },
    { word: "красивей", stressed: "краси́вей" },
    { word: "лёгкий", stressed: "лё́гкий" },
    { word: "легко", stressed: "легко́" },
    { word: "магазин", stressed: "магази́н" },
    { word: "магазины", stressed: "магази́ны" },
    { word: "месяц", stressed: "ме́сяц" },
    { word: "месяцы", stressed: "ме́сяцы" },
    { word: "музей", stressed: "музе́й" },
    { word: "начать", stressed: "нача́ть" },
    { word: "начал", stressed: "на́чал" },
    { word: "начала", stressed: "начала́" },
    { word: "начали", stressed: "на́чали" },
    { word: "начало", stressed: "на́чало" },
    { word: "повторить", stressed: "повтори́ть" },
    { word: "повторю", stressed: "повторю́" },
    { word: "повторишь", stressed: "повтори́шь" },
    { word: "повторит", stressed: "повтори́т" },
    { word: "положить", stressed: "положи́ть" },
    { word: "положу", stressed: "положу́" },
    { word: "положишь", stressed: "поло́жишь" },
    { word: "положит", stressed: "поло́жит" }
];

window.ORTHOEPIC_COLUMN_2 = [
    { word: "понять", stressed: "поня́ть" },
    { word: "понял", stressed: "по́нял" },
    { word: "поняла", stressed: "поняла́" },
    { word: "поняли", stressed: "по́няли" },
    { word: "поняло", stressed: "по́няло" },
    { word: "простыня", stressed: "простыня́" },
    { word: "простыни", stressed: "про́стыни" },
    { word: "сантиметр", stressed: "сантиме́тр" },
    { word: "сантиметры", stressed: "сантиме́тры" },
    { word: "свёкла", stressed: "свё́кла" },
    { word: "свитер", stressed: "сви́тер" },
    { word: "сегодня", stressed: "сего́дня" },
    { word: "скворечник", stressed: "скворе́чник" },
    { word: "скучный", stressed: "ску́чный" },
    { word: "статуя", stressed: "ста́туя" },
    { word: "столяр", stressed: "столя́р" },
    { word: "столяры", stressed: "столяры́" },
    { word: "счастье", stressed: "сча́стье" },
    { word: "счётчик", stressed: "счё́тчик" },
    { word: "творог", stressed: "тво́рог" },
    { word: "творог", stressed: "творо́г" },
    { word: "теннис", stressed: "те́ннис" },
    { word: "термос", stressed: "те́рмос" },
    { word: "торты", stressed: "то́рты" },
    { word: "трактор", stressed: "тра́ктор" },
    { word: "трактора", stressed: "трактора́" },
    { word: "тракторы", stressed: "тра́кторы" },
    { word: "туфля", stressed: "ту́фля" },
    { word: "туфли", stressed: "ту́фли" },
    { word: "фанера", stressed: "фане́ра" },
    { word: "форзац", stressed: "фо́рзац" },
    { word: "хвоя", stressed: "хво́я" },
    { word: "чтобы", stressed: "что́бы" },
    { word: "шарфы", stressed: "ша́рфы" },
    { word: "шкафы", stressed: "шкафы́" },
    { word: "шоссе", stressed: "шоссе́" },
    { word: "шофёр", stressed: "шофё́р" },
    { word: "шофёры", stressed: "шофё́ры" },
    { word: "щавель", stressed: "щаве́ль" },
    { word: "яичница", stressed: "яи́чница" }
];

(function () {
    var set = '1';
    try {
        var raw = new URLSearchParams(window.location.search).get('set');
        if (raw === '2' || raw === 'all') set = raw;
    } catch (e) {}

    var titles = {
        '1': '1 столбик',
        '2': '2 столбик',
        'all': 'Оба столбика'
    };

    window.ORTHOEPIC_SET = set;
    window.ORTHOEPIC_SET_TITLE = titles[set];

    if (set === '2') {
        window.ORTHOEPIC_WORD_LIST = window.ORTHOEPIC_COLUMN_2.slice();
    } else if (set === 'all') {
        window.ORTHOEPIC_WORD_LIST = window.ORTHOEPIC_COLUMN_1.concat(window.ORTHOEPIC_COLUMN_2);
    } else {
        window.ORTHOEPIC_WORD_LIST = window.ORTHOEPIC_COLUMN_1.slice();
    }
})();
