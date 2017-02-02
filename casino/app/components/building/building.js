'use strict';

angular.module('casino.building', [])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/building', {
            templateUrl: 'components/building/building.html',
            controller: 'buildingCtrl'
        });
    }])
    .controller('buildingCtrl',
        function($scope, $routeParams, $location) {
            $scope.go = function(path) {
                $location.path(path);
            };


        });