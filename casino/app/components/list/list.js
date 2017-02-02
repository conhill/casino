'use strict';

angular.module('casino.list', ['ngRoute'])
    .factory("services", ['$http', function($http) {
        var serviceBase = 'services/'
        var obj = {};
        obj.getCustomers = function() {
            return $http.get(serviceBase + 'customers');
        }
    }])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/list', {
            templateUrl: 'components/list/list.html',
            controller: 'listCtrl'
        });
    }])
    .controller('listCtrl', function($scope, $routeParams, $location) {
        $scope.go = function(path) {
            $location.path(path);
        };

    });