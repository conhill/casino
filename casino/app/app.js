'use strict';

// Declare app level module which depends on views, and components
angular.module('casino', [
    'ngRoute',
    'casino.view1',
    'casino.view2',
    'casino.header',
    'casino.sidebar',
    'casino.list',
    'casino.location',
    'casino.building',
    'casino.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.when("/building", {
        templateUrl: "components/building/building.html",
        controller: 'buildingCtrl'
    }).when("/location", {
        templateUrl: "components/location/location.html",
        controller: 'locationCtrl'
    }).otherwise({
        redirectTo: '/list'
    });
}]);