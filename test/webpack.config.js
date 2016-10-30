var webpack = require('webpack')
var path = require('path')
module.exports = {
    entry: {
        app: './test.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.react$/,
            exclude: /node_modules/,
            loader: 'react-loader'
        }, {
            test: /\.vue$/,
            exclude: /node_modules/,
            loader: 'vue-loader'
        }],
        vue: {
            loaders: {
                js: 'babel'
            }
        }
    },
    babel: {
        presets: ['es2015', 'react']
    }
}