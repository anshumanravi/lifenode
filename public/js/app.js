'use strict';

/* Declare app level module which depends on filters, and services */

angular.module('lifenode', ['lifenode.filters', 'lifenode.services', 'lifenode.directives', 'lifenode.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {templateUrl: '/partials/home.html', controller: 'HomeCtrl'});
    $routeProvider.when('/list', {templateUrl: '/partials/list.html', controller: 'ListCtrl'});
    $routeProvider.otherwise({redirectTo: '/'});
  }]);