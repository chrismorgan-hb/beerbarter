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
  .controller('OffersCtrl', [function() {

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
