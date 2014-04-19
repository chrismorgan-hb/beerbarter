'use strict';

/* Controllers */

angular.module('beerbarter.controllers', []).
  controller('HomeCtrl', ['$scope', '$http',
    function($scope, $http) {
      $http.get('testdata/announcements.json').success(function(data) {
        $scope.announcements = data;
      });
  }])
  .controller('TradingCtrl', ['$scope', '$http', 
    function($scope, $http) {
      $http.get('testdata/matches.json').success(function(data) {
        $scope.matches = data;
      });
  }])
  .controller('OffersCtrl', [function() {

  }])
  .controller('InventoryCtrl', ['$scope', '$http', 
    function($scope, $http) {
      $http.get('testdata/inventory.json').success(function(data) {
        $scope.beers = data;
      });
  }])
  .controller('WantlistCtrl', ['$scope', '$http', 
    function($scope, $http) {
      $http.get('testdata/wantlist.json').success(function(data) {
        $scope.beers = data;
      });
  }])
  .controller('ReviewsCtrl', [function() {

  }])
  .controller('NewsCtrl', [function() {

  }])
  .controller('LoginCtrl', [function() {

  }]);
