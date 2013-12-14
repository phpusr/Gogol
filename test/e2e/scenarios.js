describe('Gogol App', function() {

    describe('Тестирование шаблона', function() {

        it('Должен перебросить с index.html на index.html#/main', function() {
            browser().navigateTo('../../index.html');
            expect(browser().location().url()).toBe('/main');
        });

        it('Должен проверить копирайт', function() {
            browser().navigateTo('../../index.html');
            expect(binding('copyright')).toBe('Анна Доронина 2013');
            expect(element('div.footer p').text()).toBe('© Анна Доронина 2013');
        });

    });

    describe('Main view', function() {

        beforeEach(function() {
            browser().navigateTo('../../index.html#/main');
        });

        it('Должен перейти к биографии', function() {
            element('div.jumbotron a').click();
            expect(browser().location().url()).toBe('/bio');
        });

        it('Должен найти 3 книги на главной странице', function() {
            expect(repeater('div.col-lg-4 h2').count()).toBe(3);
        });

    });

    describe('Bio view', function() {

        beforeEach(function() {
            browser().navigateTo('../../index.html#/bio');
        });

        it('Должен найти 5 пунктов биографии', function() {
            expect(repeater('div.list-group a').count()).toBe(5);
            expect(repeater('div h2').count()).toBe(5);
        });

    });

    describe('Photo view', function() {

        beforeEach(function() {
            browser().navigateTo('../../index.html#/photo');
        });

        it('Должен найти 10 фотографий', function() {
            expect(repeater('.fotorama img').count()).toBe(10);
        });

    });

    describe('Artwork view', function() {

        beforeEach(function() {
            browser().navigateTo('../../index.html#/artwork');
        });

        it('Должен найти 6 произведений', function() {
            expect(repeater('div.col-md-3 h4').count()).toBe(6);
        });

        it('Должен найти 63 остальных произведения', function() {
            expect(repeater('ul div.column li').count()).toBe(63);
        });

    });

    describe('Artwork 3 view', function() {

        beforeEach(function() {
            browser().navigateTo('../../index.html#/artwork/3');
        });

        it('Должен проверить название произведения', function() {
            expect(binding('data.name')).toBe('Ревизор');
        });

        it('Должен проверить адрес постера', function() {
            expect(element('div img').attr('src')).toBe('data/artwork/3/thumb.jpg');
        });

    });

});