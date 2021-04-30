const path = require('path');

module.exports = {
    outputDir: path.resolve(__dirname, './server/public'),
    pages: {
        index: 'src/index/main.js',
        panel: 'src/panel/main.js'
    },
};