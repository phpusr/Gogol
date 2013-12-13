'use strict';

describe('App controllers', function() {

    describe('MainCtrl', function() {

        var rootScope, scope, ctrl, $httpBackend;

        beforeEach(module('myApp'));

        beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('data/artwork-list.json').
                respond({popular: [{name: 'Book 1'}, {name: 'Book 2'}, {name: 'Book 3'}, {name: 'Book 4'}]});

            rootScope = {changeActiveNav: function(){}};
            scope = $rootScope.$new();
            ctrl = $controller('MainCtrl', {$scope: scope, $rootScope: rootScope});
        }));

        it('should create "data" model with 3 books', function() {
            expect(scope.data).toBeUndefined();
            $httpBackend.flush();

            expect(3).toBe(scope.data.length);
        });

    });

    describe('PhotoCtrl', function() {

        var rootScope, scope, ctrl;

        beforeEach(module('myApp'));

        beforeEach(inject(function($controller) {
            rootScope = {changeActiveNav: function(){}};
            scope = {};
            ctrl = $controller('PhotoCtrl', {$scope: scope, $rootScope: rootScope});
        }));

        it('should create "opt.nav" = thumbs', function() {
            expect('thumbs').toBe(scope.opt.nav);
        });

        it('should create "opt.nav" = thumbs ', function() {
            expect(400).toBe(scope.opt.height);
        });

    });

});