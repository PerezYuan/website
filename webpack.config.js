var path = require('path');

var config = {
    entry: {
        excel: path.join(__dirname, 'public/src/js/excel'),
        japan: path.join(__dirname, 'public/src/js/japan')
    },
    output: {
        path: __dirname + "/public/dist",
        filename: '[name].js'
    },
    devtool: 'source-map',
    module: {
        loaders: [{
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            }, {
                test: /\.css$/,
                loaders: ['style', 'css', 'autoprefixer']
            }, {
                test: /\.less$/,
                loaders: ['style', 'css', 'autoprefixer', 'less'],
            }, {
                test: /\.(eot|woff|svg|ttf|woff2|gif)(\?|$)/,
		        loader: 'file-loader?name=[hash].[ext]'
            }, {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=1200&name=[hash].[ext]'
            }
        ]
    }
}

module.exports = config