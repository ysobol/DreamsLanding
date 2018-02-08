module.exports = function() {
    return {
        module: {
            rules: [
                {                   
                    test: /\.(jpg|png|svg)$/,                    
                    loader: "file-loader?name=sources/styles/images/[name].[ext]",                               
                },
            ],
        },
    };
};