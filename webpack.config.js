var path = require('path');
var webpack = require('webpack');

var config = {
    entry: {
        excel: path.join(__dirname, 'public/src/js/excel'),
        japan: path.join(__dirname, 'public/src/js/japan')
    },
    output: {
        path: path.join(__dirname, 'public/dist/'),
        publicPath: 'dist/',
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
                test: /\.(eot|woff|svg|ttf|woff2)(\?|$)/,
		        loader: 'file-loader?name=fonts/[name].[hash:8].[ext]'
            }, {
                test: /\.(png|jpg|gif)$/,
                loader: 'url?limit=1200&name=images/[name].[hash:8].[ext]'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin({
            multiStep: true
        }),
    ],
    devServer: {
            historyApiFallback: true,
            hot: true,
            inline: true,
            stats: 'errors-only',
            host: "localhost", // Defaults to `localhost`   process.env.HOST
            port: "3020",  // Defaults to 8080   process.env.PORT
    }
}

module.exports = config