'use strict';

angular.module('casino.header', ['ngRoute'])

.controller('headerCtrl', function($scope, $routeParams, $location) {

    $scope.toggleSide = function() {
        console.log("clack");
        console.log(document.getElementById("sidebar"));
        document.getElementById("sidebar").classList.toggle('show');
    };
})

.directive("headerCasino", function() {
    return {
        restrict: 'E',
        controller: "headerCtrl",
        templateUrl: 'components/header/header.html'
    }
});