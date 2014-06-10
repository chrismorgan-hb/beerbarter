'use strict';

angular.module('beerbarter.controllers', []).
  controller('HomeCtrl', ['$scope', '$http', 'ga',
    function($scope, $http, ga) {
      ga('send', 'pageview', {title: 'Home'});
      $http.get('testdata/announcements.json').success(function(data) {
        $scope.announcements = data;
      });
  }])
  .controller('TradingCtrl', ['$scope', '$http', 'ga',
    function($scope, $http, ga) {
      ga('send', 'pageview', {title: 'Trading'});
      $http.get('testdata/matches.json').success(function(data) {
        $scope.matches = data;
      });
  }])
  .controller('OffersCtrl', ['$scope', '$http', 'ga',
    function($scope, $http, ga) {
      ga('send', 'pageview', {title: 'Offers'});
      $http.get('testdata/offers.json').success(function(data) {
        $scope.offers = data;
      });
  }])
  .controller('AddBeerToInventoryModalCtrl', ['$scope', '$modalInstance',
    function($scope, $modalInstance) {
      $scope.add = function() {
        // TODO: Track add beer event via GA
        // TODO: actually add the beer
        $modalInstance.close('add');
      };
      $scope.cancel = function() {
        // TODO: Track cancel add beer event via GA
        $modalInstance.dismiss('cancel');
      };
  }])
  .controller('ShareInventoryModalCtrl', ['$scope', '$modalInstance',
    function($scope, $modalInstance) {
      // TODO: Track sharing
      $scope.done = function() {
        $modalInstance.close('done');
      };
  }])
  .controller('InventoryCtrl', ['$scope', '$http', '$modal', 'ga',
    function($scope, $http, $modal, ga) {
      ga('send', 'pageview', {title: 'Inventory'});
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
        // TODO: Track the event
        // TODO: actually add the beer
        $modalInstance.close('add');
      };
      $scope.cancel = function() {
        // TODO: Track the event
        $modalInstance.dismiss('cancel');
      };
  }])
  .controller('ShareWantlistModalCtrl', ['$scope', '$modalInstance',
    function($scope, $modalInstance) {
      $scope.done = function() {
        $modalInstance.close('done');
      };
  }])
  .controller('WantlistCtrl', ['$scope', '$http', '$modal', 'ga',
    function($scope, $http, $modal, ga) {
      ga('send', 'pageview', {title: 'Want List'});
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
