const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const devserver = require('./webpack/devserver');
const sass = require('./webpack/sass');
const css = require('./webpack/css');
const extractCSS = require('./webpack/css.extract');
const uglifyJS = require('./webpack/js.uglify');
const images = require('./webpack/images');

const PATHS = {
    source: path.join(__dirname, 'sources'),
    build: path.join(__dirname, 'build'),
};

const common = merge([{
        entry: {
            bundle: PATHS.source + '/index.js',
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
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery'
            }),
            new webpack.LoaderOptionsPlugin({
                minimize: false
            }),
        ]
    },
    pug(),
    images()
]);

module.exports = function(env) {
    if (env === 'production') {
        return merge([
            common,
            extractCSS(),
            uglifyJS(),

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