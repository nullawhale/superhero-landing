const path = require('path');

const PATHS = {
    source: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build')
}

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    devtool: "source-map",
    devServer: {
        port: 3000,
        open: false
    }
};
