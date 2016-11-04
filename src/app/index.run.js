(function() {
  'use strict';

  angular
    .module('angularFloatingPoint')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
