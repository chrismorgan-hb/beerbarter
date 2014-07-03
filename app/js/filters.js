'use strict';

/* Filters */

angular.module('beerbarter.filters', [])
  .filter('zerofill', function() {
    return function(input) {
      return input ? input : 0;
    };
  })
  .filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }]);
