'use strict';

angular.module('casino.version', [
  'casino.version.interpolate-filter',
  'casino.version.version-directive'
])

.value('version', '0.1');
