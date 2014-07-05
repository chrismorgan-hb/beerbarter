'use strict';

angular.module('beerbarter.services', [])
  .factory('Beers', function() {
    return {
      remove: function(beers, beerId) {
        for (var i = 0; i < beers.length; i++) {
          if (beers[i].id == beerId) {
            beers.splice(i, 1);
          }
        }
        // TODO: Actually remove beer on server side (inventory, want list, etc.)
      },
      add: function(beers, addedBeers) {
        for (var i = 0; i < addedBeers.length; i++) {
          var exists = false;
          for (var j = 0; j < beers.length; j++) {
            if (beers[j].id == addedBeers[i].id) {
              beers[j].quantity += addedBeers[i].quantity;
              exists = true;
            }
          }
          if (!exists) {
            beers.push(addedBeers[i]);
          }
        }
        // TODO: Actually add beers on the server side (inventory, want list, etc.)
      },
      modifyQty: function(beers, beerId, qty) {
        for (var i = 0; i < beers.length; i++) {
          if (beers[i].id == beerId) {
            if (beers[i].quantity + qty > 0) {
              beers[i].quantity += qty;
              // TODO: Actually change the beer quantity on server side
            } else {
              beers[i].quantity = 0;
              // TODO: Should we remove the line?
            }
          }
        }
      }
    };
  });
