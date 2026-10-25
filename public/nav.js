(function () {
    var pages = {
        'index.html': { title: 'Главная', parent: null },
        'grade2.html': { title: '2 класс', parent: 'index.html' },
        'grade3.html': { title: '3 класс', parent: 'index.html' },
        'math.html': { title: 'Математика', parent: 'grade2.html' },
        'russian.html': { title: 'Русский язык', parent: 'grade2.html' },
        'russian3.html': { title: 'Русский язык', parent: 'grade3.html' },
        'english3.html': { title: 'English', parent: 'grade3.html' },
        'spelling.html': { title: 'Орфограммы', parent: 'russian.html' },
        'orthoepic.html': { title: 'Орфоэпический словарь', parent: 'russian.html' },
        'exam.html': { title: 'Экзамен', parent: 'russian.html' },
        'spelling3.html': { title: 'Орфограммы', parent: 'russian3.html' },
        'orthoepic3.html': { title: 'Орфоэпический словарь', parent: 'russian3.html' },
        'english-tobe.html': { title: 'to be', parent: 'english3.html' },
        'english-food.html': { title: 'Food', parent: 'english3.html' },
        'english-food-meanings.html': { title: 'Значения', parent: 'english-food.html' },
        'math-add.html': { title: 'Сложение и вычитание', parent: 'math.html' },
        'math-mult.html': { title: 'Умножение и деление', parent: 'math.html' },
        'math1.html': { title: 'Одно действие', parent: 'math-add.html' },
        'math2.html': { title: 'Два действия', parent: 'math-add.html' },
        'math3.html': { title: 'Три действия', parent: 'math-add.html' },
        'math-turbo.html': { title: 'Турбо-режим', parent: 'math-add.html' },
        'math-mult2.html': { title: 'На 2', parent: 'math-mult.html' },
        'math-mult3.html': { title: 'На 3', parent: 'math-mult.html' },
        'math-mult4.html': { title: 'На 4', parent: 'math-mult.html' },
        'math-mult5.html': { title: 'На 5', parent: 'math-mult.html' },
        'math-mult6.html': { title: 'На 6', parent: 'math-mult.html' },
        'math-mult7.html': { title: 'На 7', parent: 'math-mult.html' },
        'math-mult8.html': { title: 'На 8', parent: 'math-mult.html' },
        'math-mult9.html': { title: 'На 9', parent: 'math-mult.html' },
        'math-mult-all.html': { title: 'С 2 до 9', parent: 'math-mult.html' },
        'math-mult-turbo.html': { title: 'Турбо-режим', parent: 'math-mult.html' }
    };

    function pageName() {
        var name = '';
        try {
            name = decodeURIComponent((location.pathname || '').split('/').pop() || '');
        } catch (e) {
            name = (location.pathname || '').split('/').pop() || '';
        }
        return name || 'index.html';
    }

    function quizTitle(file) {
        var set = '1';
        try {
            var raw = new URLSearchParams(location.search).get('set');
            if (raw === '2' || raw === 'all') set = raw;
        } catch (e) {}
        if (file === 'orthoepic3-quiz.html' && set === 'all') return 'Оба столбика';
        return set === '2' ? '2 столбик' : '1 столбик';
    }

    function currentPage() {
        var file = pageName();
        if (file === 'spelling3-quiz.html') {
            return { title: quizTitle(file), parent: 'spelling3.html', href: 'spelling3-quiz.html' + location.search };
        }
        if (file === 'orthoepic3-quiz.html') {
            return { title: quizTitle(file), parent: 'orthoepic3.html', href: 'orthoepic3-quiz.html' + location.search };
        }
        var info = pages[file];
        if (!info) return null;
        return { title: info.title, parent: info.parent, href: file };
    }

    function buildTrail() {
        var trail = [];
        var seen = {};
        var cursor = currentPage();
        while (cursor && !seen[cursor.href]) {
            seen[cursor.href] = true;
            trail.unshift(cursor);
            if (!cursor.parent) break;
            var parent = pages[cursor.parent];
            if (!parent) break;
            cursor = { title: parent.title, parent: parent.parent, href: cursor.parent };
        }
        return trail;
    }

    function render() {
        var trail = buildTrail();
        if (trail.length < 2) return;
        var nav = document.createElement('nav');
        nav.className = 'site-nav';
        nav.setAttribute('aria-label', 'Разделы');
        trail.forEach(function (item, index) {
            if (index > 0) {
                var sep = document.createElement('span');
                sep.className = 'site-nav-sep';
                sep.textContent = '›';
                nav.appendChild(sep);
            }
            if (index === trail.length - 1) {
                var here = document.createElement('span');
                here.className = 'site-nav-here';
                here.textContent = item.title;
                nav.appendChild(here);
            } else {
                var link = document.createElement('a');
                link.href = item.href;
                link.textContent = item.title;
                nav.appendChild(link);
            }
        });
        document.body.insertBefore(nav, document.body.firstChild);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', render);
    } else {
        render();
    }
})();
