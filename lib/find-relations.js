'use strict';

const bemDeps = require('@bem/deps');
const streamToArray = require('stream-to-array');
const utils = require('./utils');

/**
 * Find depedencies for BEM entity
 *
 * @param {Object} options search params
 * @param {String[]} options.levels array of block override levels
 * @param {Object} options.declaration bemjson declaration of block
 */
module.exports = function(options) {
    const config = utils.initConfig();

    streamToArray(bemDeps.load({ levels: options.levels || config.levels }), (err, relations) => {
        if (err) {
            console.log(err);
            return;
        }
        const result = bemDeps.resolve(declaration, relations);

        console.log(JSON.stringify(result, null, 4));
    });
};
