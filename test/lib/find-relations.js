const mock = require('mock-fs');
const stringifyCode = require('javascript-stringify');
const path = require('path');

const findRelations = require('../../lib/find-relations');

const basePath = path.join(__dirname, '..', '..');
process.chdir(basePath);

describe('find-relation', function () {

    beforeEach(function () {
        mock({
            'super-block': {
                'super-block.deps.js': stringifyCode(({
                    shouldDeps: [
                        { block: 'i-bem', elems: ['dom'] }
                    ]
                }))
            },
            'child-block': {
                'child-block.deps.js': stringifyCode(({
                    shouldDeps: [
                        { block: 'super-block' }
                    ]
                }))
            }
        })
    });

    afterEach(function () {
        mock.restore();
    })


    it.only('should find relations between blocks', function () {
        findRelations();
    });
});
