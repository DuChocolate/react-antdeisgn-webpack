//const express = require('express');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.js');

const PORT = 3000;
const HOST = '127.0.0.1';

const hot = process.argv.indexOf('--hot') === -1;
// 本地环境静态资源路径
const localPublicPath = 'http://' + HOST + ':' + PORT + '/';
config.output.publicPath = localPublicPath;

new WebpackDevServer(webpack(config)).listen(PORT, HOST, function() {
    console.log(localPublicPath);
});

module.exports = config;

