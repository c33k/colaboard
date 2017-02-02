(function(angular) {
    'use strict';

    angular.module('cardboard', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        
        var homeState = {
            name: 'home',
            url: '/',
            templateUrl: 'app/views/home.html'
        };

        var aboutState = {
            name: 'about',
            url: '/about',
            template: '<h1>about</h1>'
        };

        $stateProvider.state(homeState);
        $stateProvider.state(aboutState);
        $urlRouterProvider.otherwise('/');
    });   

})(window.angular);