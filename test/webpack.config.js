<<<<<<< HEAD
var webpack = require('webpack');
var path = require('path');

var clientConfig = {
    entry:{
        module:'./test',
    },
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename:'[name].bundle.js'
    },
    devtool:'#source-map',
    debug:true,
    module:{
        loaders:[
            
            {
                test:/\.react$/,
                loader:'react'
            },
            
            {
                test:/\.html$/,
                loader:'raw'
            },
            
            
        ]
    },
    babel:{
        presets:['es2015','react','stage-0'],
        plugins:['transform-runtime']
    }
    
}

module.exports = clientConfig;
=======
var webpack = require('webpack')
var path = require('path')
module.exports={
    entry:{
        app:'./test.js'
    },
    output:{
        path: path.join(__dirname,'dist'),
        filename:'[name].js'
    },
    module:{
        loaders:[
            {
                test:/\.react$/,
                exclude:/node_modules/,
                loader:'react-loader'
            }
        ]
    }
}
>>>>>>> dev
