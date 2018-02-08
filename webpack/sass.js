const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function() {
    return {
        module: {
            rules: [                
                {                                 
                    test: /\.css$/,                 
                    use: ExtractTextPlugin.extract({
                      loader: 'css-loader?importLoaders=1',
                  }),
                },
                {            
                  test: /\.(sass|scss)$/,                 
                  use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
                }
              ]
            },
            plugins: [
              new ExtractTextPlugin({ 
                filename: 'main.min.css',
                allChunks: true,
              }),
            ],
    };
};