'use strict';

angular.module('casino.sidebar', ['ngRoute'])

    .controller('sidebarCtrl', function ($scope, $routeParams, $location) {


    })

    .directive("sidebarCasino", function () {
        return {
            restrict: 'E',
            controller: "sidebarCtrl",
            templateUrl: 'components/sidebar/sidebar.html'
        }
    });