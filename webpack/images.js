const path = require('path');
module.exports = function() {
    return {
        module: {
            rules: [{
                test: /\.(jpg|png|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: 'styles/images/[name].[ext]',
                }
            }, ],
        },
    };
};