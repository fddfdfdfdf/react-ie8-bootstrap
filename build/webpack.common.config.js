const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const es3ifyPlugin = require('es3ify-webpack-plugin');
const nodeEnv = process.env.NODE_ENV == "production"?true:false;
const outPut = nodeEnv?"./":"/";
const htmlOutput = nodeEnv?"./../dist/index.html":"../index.html";

commonConfig = {
    entry: {
        app: [
            "es5-shim", "es5-shim/es5-sham",
            "babel-polyfill",
            path.join(__dirname, '/../src/index.js')
        ],
        react:[
            "react",
            'react-dom',
            // 'react-router',
            'react-router-dom'//只能和react合并 不然报错
            // Cannot read property 'call' of undefined
            //Super expression must either be null or a function, not undefined
            //
        ],
        redux:[
            "redux",
            "redux-thunk"
        ]
    },
    output: {
        path: path.join(__dirname, './../dist'),
        filename: 'js/[name].[chunkhash].js',
        chunkFilename: 'js/[name].[chunkhash].js',
        publicPath: outPut
    },
    module: {
        postLoaders: [
            {
                test: /\.js$/,
                loaders: ['export-from-ie8/loader']
            }
        ],
        loaders: [{
            test: /\.js$/,
            loaders: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, './../src')
        }, {
            test: /\.(png|jpg|gif)$/,
            loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: htmlOutput,
            template: path.join(__dirname, './../src/index.html'),
            // minify: {
            //     removeComments: true,
            //     collapseWhitespace: true,
            //     removeRedundantAttributes: true,
            //     useShortDoctype: true,
            //     removeEmptyAttributes: true,
            //     removeStyleLinkTypeAttributes: true,
            //     keepClosingSlash: true,
            //     minifyJS: true,
            //     minifyCSS: true,
            //     minifyURLs: true,
            // },
            chunks: ["app","react","redux"],
            chunksSortMode: function (chunk1, chunk2) {
                var orders = ["app","react","redux"];
                var order1 = orders.indexOf(chunk1.names[0]);
                var order2 = orders.indexOf(chunk2.names[0]);
                if (order1 > order2) {
                    return 1;
                } else if (order1 < order2) {
                    return -1;
                } else {
                    return 0;
                }
            }
        }),
        // new webpack.HashedModuleIdsPlugin(),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendor'
        // }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'runtime'
        // }),
        new es3ifyPlugin()
    ],

    resolve: {
        alias: {
            pages: path.join(__dirname, './../src/pages'),
            components: path.join(__dirname, './../src/components'),
            router: path.join(__dirname, './../src/router'),
            actions: path.join(__dirname, './../src/redux/actions'),
            reducers: path.join(__dirname, './../src/redux/reducers')
        }
    }
};

module.exports = commonConfig;