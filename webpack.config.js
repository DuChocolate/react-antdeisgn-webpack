const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

//项目根目录
const ROOT_PATH = path.resolve(__dirname, './');
const SRC_PATH = ROOT_PATH + '/src';


module.exports = {
    entry: {
        app: [SRC_PATH + '/routers.js'],
        vendor: ['react', 'react-dom', 'react-router'],
    },
    devtool: 'inline-source-map',

    module: {
        rules: [
            {
                test:/\.js$/,
                include:path.resolve(__dirname, 'src'),
                exclude:'/node_modules/',
                use:[{
                    loader:'babel-loader',
                    options:{
                        presets:['es2015', 'react', 'stage-1'],
                        plugins:[['import', {libraryName:'antd', style:'css'}]]   //按需加载组件库
                    }
                },
                {
                    loader: 'eslint-loader',
                }]
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test:/\.scss$/,
                use:ExtractTextPlugin.extract({fallback:'style-loader', use:['css-loader?importLoaders=1','postcss-loader','sass-loader']}),
                include:path.resolve(__dirname, 'src')
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new ExtractTextPlugin ('css/index.css'),
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname,'index.html'),
            chunks: ['app','vendor'],
            template: SRC_PATH + '/tpl.html',
            title:'MY TITLE'
        }),
        new webpack.NamedChunksPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    output: {
        filename: 'js/[name].js',
        chunkFilename: 'js/[name].js',
        path: path.resolve(__dirname,'dist'),
    },
    mode: "development"
};