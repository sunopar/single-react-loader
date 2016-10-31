var webpack = require('webpack')
var path = require('path')
var htmlWebpack = require('html-webpack-plugin')
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
        }, {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel'
        }],
        vue: {
            loaders: {
                js: 'babel'
            }
        }
    },
    babel: {
        presets: ['es2015', 'react', 'stage-0']
    },
    plugins: [
        new htmlWebpack({ template: './index.html' }),
        new webpack.ProvidePlugin({ 'React': 'react' })
    ]
}