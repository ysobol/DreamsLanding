module.exports = function() {
    return {
        module: {
            rules: [{
                test: /\.(js|jsx)$/,
                loaders: 'babel-loader',
            }],
            loaders: [{
                test: /\.(pug|js|jsx)$/,
                exclude: /node_modules/,
                loaders: ['babel?presets[]=es2015&presets[]=react', 'pug-as-jsx', 'pug-as-jsx-loader'],
            }, ],
        }
    }
};