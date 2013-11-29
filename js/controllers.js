
app.controller('IndexCtrl', function MainCtrl($rootScope, $scope, $location) {

    $scope.nav = [
        {name: 'Главная', link: '#main', path: '/main'},
        {name: 'Биография', link: '#bio', path: '/bio'},
        {name: 'Фотогалерея', link: '#photo', path: '/photo'},
        {name: 'Произведения', link: '#artworks', path: '/artworks'}
    ];

    //Смена страницы
    $rootScope.changeActiveNav = function() {
        var path = $location.$$path;

        for(var i=0; i<$scope.nav.length; i++) {
            var n = $scope.nav[i];
            n.cl = n.path == path;
        }
    };

});

/** Main Page */
app.controller('MainCtrl', function MainCtrl($rootScope, $scope, $http) {
    $rootScope.changeActiveNav();

    $http.get('data/artworks.json').success(function(data) {
        $scope.data = data;
    });
});

/** Bio Page */
app.controller('BioCtrl', function BioCtrl($rootScope, $scope, $http, $location, $anchorScroll) {
    $rootScope.changeActiveNav();

    $http.get('data/bio.json').success(function(data) {
        $scope.data = data;
    });

    $scope.scrollTo = function(pId) {
        var old = $location.hash();
        $location.hash(pId);
        $anchorScroll();
        $location.hash(old);
    }
});

/** Artworks Page */
app.controller('ArtworksCtrl', function ArtworksCtrl($rootScope, $scope, $http) {
    $rootScope.changeActiveNav();

    $http.get('data/artworks.json').success(function(data) {
        $scope.data = data;
    });
});

/** Read Artwork Page */
app.controller('ArtworkReadCtrl', function ArtworkReadCtrl($rootScope, $scope, $http, $routeParams) {
    $rootScope.changeActiveNav();

    var artworkId = $routeParams.artworkId;
    $scope.data = {id: 'load'}; //TODO можно попробовать сделать анимир-ю
    $http.get('data/artworks/' + artworkId + '/data.json').success(function(data) {
        $scope.data = data;
    });
});

/** Photo Page **/
app.controller('PhotoCtrl', function PhotoCtrl($rootScope, $scope, $http, $timeout) {
    $rootScope.changeActiveNav();

    //Конфигурация Фоторамы
    $scope.opt  = {
        width: 800,
        height: 400,
        loop: true,
        keyboard: true,
        nav: 'thumbs',
        fullScreen: true,
        autoPlay: 3000,
        shuffle: true
    };

    $http.get('data/photo.json').success(function(data) {
        $scope.items = data;
    });

    $scope.initFotorama = function() {
        $timeout(function() {
            $(".fotorama").fotorama();
        }, 0);
    };

});

/** Test Page */
app.controller('TestCtrl', function TestCtrl($rootScope, $scope) {
    $rootScope.changeActiveNav();
});