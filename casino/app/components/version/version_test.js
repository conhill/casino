'use strict';

describe('casino.version module', function() {
  beforeEach(module('casino.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
