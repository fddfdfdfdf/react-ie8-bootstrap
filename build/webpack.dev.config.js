const merge = require('webpack-merge');
const path = require('path');

const commonConfig = require('./webpack.common.config.js');

const devConfig = {
    devtool: 'inline-source-map',
    output: {
        /*这里本来应该是[chunkhash]的，但是由于[chunkhash]和react-hot-loader不兼容。只能妥协*/
        filename: '[name].[hash].js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loaders: ["style-loader", "css-loader", "postcss-loader"]
        },{
              test:   /\.less$/,
              loaders:  ["style-loader", "css-loader?modules&localIdentName=[name]__[local]", "postcss-loader","less-loader"]
          }]
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        stats: { colors: true },
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                pathRewrite: {'^/api' : '/api'},
                changeOrigin: true
            }
        }
    },
};

module.exports = merge(commonConfig, devConfig);