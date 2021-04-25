const path = require('path');

module.exports = {
    outputDir: path.resolve(__dirname, './server/public'),
    pages: {
        index: 'src/main.js',
    },
};