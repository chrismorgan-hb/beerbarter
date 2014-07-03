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
  .controller('AddBeerToInventoryModalCtrl', [
    '$scope', '$modalInstance', '$http',
    function($scope, $modalInstance, $http) {
      // TODO: Extract this into a common "AddBeer" modal controller
      $scope.add = function() {
        // TODO: Track add beer event via GA
        for (var beerId in $scope.beersToAdd) {
          if ($scope.beersToAdd.hasOwnProperty(beerId)) {
            // TODO: Actually add beers to inventory
            console.log("Adding " + $scope.beersToAdd[beerId] + 
                        " copies of beerId " + beerId);
          }
        }
        $modalInstance.close('add');
      };
      $scope.cancel = function() {
        // TODO: Track cancel add beer event via GA
        $modalInstance.dismiss('cancel');
      };
      $scope.search = function(val) {
        return $http.get('testdata/beers-for-search.json')
          .then(function(res) {
            $scope.beers = [];
            angular.forEach(res.data, function(beer) {
              $scope.beers.push(beer);
            });
            return $scope.beers;
          });
      }
      $scope.beersToAdd = {};
      $scope.changeQty = function(beerId, qty) {
        if (beerId in $scope.beersToAdd) {
          if ($scope.beersToAdd[beerId] + qty <= 0) {
            $scope.beersToAdd[beerId] = 0;
          } else {
            $scope.beersToAdd[beerId] += qty;
          }
        } else if (qty > 0) {
          $scope.beersToAdd[beerId] = qty;
        }
      }
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
