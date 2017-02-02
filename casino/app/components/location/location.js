'use strict';

angular.module('casino.location', [])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/location', {
            templateUrl: 'components/location/location.html',
            controller: 'locationCtrl'
        });
    }])
    .controller('locationCtrl',
        function($scope, $routeParams, $location) {
            $scope.go = function(path) {
                $location.path(path);
            };


        });