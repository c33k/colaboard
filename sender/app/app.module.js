(function(angular) {
    'use strict';

    angular
        .module('sender', ['ui.router', 'ngMaterial'])
        .config(function($stateProvider, $urlRouterProvider) {
            
            var homeState = {
                name: 'home',
                url: '/',
                templateUrl: 'app/home/home.html',
                controller: 'HomeController as home'
            };

            // TODO
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