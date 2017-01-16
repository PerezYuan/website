var path = require('path');

var config = {
    entry: {
        excel: path.join(__dirname, 'public/src/js/excel'),
        japan: path.join(__dirname, 'public/src/js/japan')
    },
    output: {
        filename: '[name].js',
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            }
        ]
    }
}

module.exports = config