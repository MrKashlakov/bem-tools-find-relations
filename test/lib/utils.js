'use strict';

var utils = require('../../lib/utils');

describe('utils', function() {
    describe('initConfig', function() {
        it('should has levels array', function() {
            var config = utils.initConfig();
            assert.isOk(config);
            assert.isObject(config.levels);
        });
    });
});
