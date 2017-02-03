(function (angular) {
    'use strict';

    angular
        .module('sender')
        .controller('HomeController', HomeController);

    //HomeController.$inject = [];

    function HomeController () {
        var vm = this;

        vm.sendUrl = function () {
            if( angular.isDefined(vm.url) ) {
                console.log(vm.url);
            } else {
                console.log('URL is undefined!');
            }
        };
    }

})(window.angular);