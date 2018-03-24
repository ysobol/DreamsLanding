require('babel-polyfill');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const devserver = require('./webpack/devserver');
const sass = require('./webpack/sass');
const css = require('./webpack/css');
const extractCSS = require('./webpack/css.extract');
const images = require('./webpack/images');
const babel = require('./webpack/babel');

const PATHS = {
    source: path.join(__dirname, 'sources'),
    build: path.join(__dirname, 'build'),
};

const common = merge([{
        entry: {
            bundle: ['babel-polyfill', PATHS.source + '/index.js'],
            styles: PATHS.source + '/styles/main.scss',
        },
        output: {
            path: PATHS.build,
            filename: 'js/[name].js',
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: PATHS.source + '/index.pug',
                options: {
                    pretty: true,
                }
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'common'
            }),
            new webpack.LoaderOptionsPlugin({
                minimize: false
            }),
        ]
    },
    pug(),
    babel(),
    images()
]);

module.exports = function(env) {
    if (env === 'production') {
        return merge([
            common,
            extractCSS(),
        ]);
    }
    if (env === 'development') {
        return merge([
            common,
            devserver(),
            sass(),
            css(),
        ])
    }
};