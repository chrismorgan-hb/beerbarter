'use strict';

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
  .controller('OffersCtrl', ['$scope', '$http', 
    function($scope, $http) {
      $http.get('testdata/offers.json').success(function(data) {
        $scope.offers = data;
      });
  }])
  .controller('AddBeerToInventoryModalCtrl', ['$scope', '$modalInstance',
    function($scope, $modalInstance) {
      $scope.add = function() {
        // TODO: actually add the beer
        $modalInstance.close('add');
      };
      $scope.cancel = function() {
        $modalInstance.dismiss('cancel');
      };
  }])
  .controller('ShareInventoryModalCtrl', ['$scope', '$modalInstance',
    function($scope, $modalInstance) {
      $scope.done = function() {
        $modalInstance.close('done');
      };
  }])
  .controller('InventoryCtrl', ['$scope', '$http', '$modal',
    function($scope, $http, $modal) {
      $http.get('testdata/inventory.json').success(function(data) {
        $scope.beers = data;
      });

      $scope.shareInventory = function() {
        var modalInstance = $modal.open({
          templateUrl: 'partials/shareInventoryModal.html',
          controller: 'ShareInventoryModalCtrl',
          // TODO: how are we sharing, via URL or some other way?
        });
      }
      
      $scope.addBeer = function() {
        var modalInstance = $modal.open({
          templateUrl: 'partials/addBeerToInventoryModal.html',
          controller: 'AddBeerToInventoryModalCtrl',
        });
      }
  }])
  .controller('AddBeerToWantlistModalCtrl', ['$scope', '$modalInstance',
    function($scope, $modalInstance) {
      $scope.add = function() {
        // TODO: actually add the beer
        $modalInstance.close('add');
      };
      $scope.cancel = function() {
        $modalInstance.dismiss('cancel');
      };
  }])
  .controller('ShareWantlistModalCtrl', ['$scope', '$modalInstance',
    function($scope, $modalInstance) {
      $scope.done = function() {
        $modalInstance.close('done');
      };
  }])
  .controller('WantlistCtrl', ['$scope', '$http', '$modal',
    function($scope, $http, $modal) {
      $http.get('testdata/wantlist.json').success(function(data) {
        $scope.beers = data;
      });

      $scope.shareWantlist = function() {
        var modalInstance = $modal.open({
          templateUrl: 'partials/shareWantlistModal.html',
          controller: 'ShareWantlistModalCtrl',
          // TODO: how are we sharing, via URL or some other way?
        });
      }
      
      $scope.addBeer = function() {
        var modalInstance = $modal.open({
          templateUrl: 'partials/addBeerToWantlistModal.html',
          controller: 'AddBeerToWantlistModalCtrl',
        });
      }
  }])
  .controller('ReviewsCtrl', [function() {

  }])
  .controller('NewsCtrl', [function() {

  }])
  .controller('LoginCtrl', [function() {

  }]);
