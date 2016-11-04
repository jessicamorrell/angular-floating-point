(function () {
  'use strict';

  angular.module('floatingPoint',[])
    .service('floatingPoint', function () {

      this.makePretty=function (value) {
        return parseFloat(value).toPrecision(15)*1.0;
      }
    });

})();
