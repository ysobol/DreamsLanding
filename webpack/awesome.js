module.exports = function() {
    return {
        module: {
            rules: [{
                    test: /\.scss$/,
                    loader: 'style-loader!css-loader!sass-loader'
                },
                {
                    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }]
                }

            ],
        },

    }
};