'use strict';

const bemConfig = require('bem-config')();

const utils = {
    /**
     * Init BEM config
     */
    initConfig() {
        return {
            levels: bemConfig.levelMapSync() || ['.']
        };
    }
};

module.exports = utils;
