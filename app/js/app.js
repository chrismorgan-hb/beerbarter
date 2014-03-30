'use strict';


// Declare app level module which depends on filters, and services
angular.module('beerbarter', [
  'ngRoute',
  'beerbarter.filters',
  'beerbarter.services',
  'beerbarter.directives',
  'beerbarter.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
      templateUrl: 'partials/home.html', 
      controller: 'HomeCtrl'});
  $routeProvider.when('/trading', {
      templateUrl: 'partials/trading.html', 
      controller: 'TradingCtrl'});
  $routeProvider.when('/offers', {
      templateUrl: 'partials/offers.html', 
      controller: 'OffersCtrl'});
  $routeProvider.when('/inventory', {
      templateUrl: 'partials/inventory.html', 
      controller: 'InventoryCtrl'});
  $routeProvider.when('/wantlist', {
      templateUrl: 'partials/wantlist.html', 
      controller: 'WantlistCtrl'});
  $routeProvider.when('/reviews', {
      templateUrl: 'partials/reviews.html', 
      controller: 'ReviewsCtrl'});
  $routeProvider.when('/news', {
      templateUrl: 'partials/news.html', 
      controller: 'NewsCtrl'});
  $routeProvider.when('/login', {
      templateUrl: 'partials/login.html', 
      controller: 'LoginCtrl'});
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
