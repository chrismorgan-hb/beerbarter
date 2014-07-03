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
        var ret = [];
        for (var beerId in $scope.beersToAdd) {
          if ($scope.beersToAdd.hasOwnProperty(beerId)) {
            if ($scope.beersToAdd[beerId] > 0) {
              // TODO: Actually add beers to inventory
              for (var i = 0; i < $scope.beersFound.length; i++) {
                // TODO: This won't work if we don't keep the full beer info
                // around (and show it to the user) for all beers with non-zero
                // quantities.
                var beer = $scope.beersFound[i];
                if (beer.id == beerId) {
                  beer.quantity = $scope.beersToAdd[beerId];
                  ret.push(beer);
                }
              }
            }
          }
        }
        $modalInstance.close(ret);
      };
      $scope.cancel = function() {
        // TODO: Track cancel add beer event via GA
        $modalInstance.dismiss('cancel');
      };
      $scope.search = function(val) {
        return $http.get('testdata/beers-for-search.json')
          .then(function(res) {
            $scope.beersFound = [];
            angular.forEach(res.data, function(beer) {
              $scope.beersFound.push(beer);
            });
            return $scope.beersFound;
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

        modalInstance.result.then(function(addedBeers) {
          for (var i = 0; i < addedBeers.length; i++) {
            var exists = false;
            for (var j = 0; j < $scope.beers.length; j++) {
              if ($scope.beers[j].id == addedBeers[i].id) {
                $scope.beers[j].quantity += addedBeers[i].quantity;
                exists = true;
              }
            }
            if (!exists) {
              $scope.beers.push(addedBeers[i]);
            }
          }
        });
      }

      $scope.removeLine = function(beerId) {
        for (var i = 0; i < $scope.beers.length; i++) {
          if ($scope.beers[i].id == beerId) {
            $scope.beers.splice(i, 1);
          }
        }
        // TODO: Actually remove from inventory
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
