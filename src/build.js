'use-strict';

const words = require('./words');

const wordsString = '[' + (words.map(w => `'${w}'`).sort().join(', ')) + ']';

const content = `
(function () {
    'use strict';
    module.exports = {
        words: ${wordsString},
        isCommon(str) {
            return this.words.indexOf(str.toLowerCase()) > -1;
        }
    };
}());
`;

require('fs').writeFileSync('./index.js', content);