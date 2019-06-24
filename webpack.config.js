let path = require("path");
module.exports = {
    entry: {
        'main': './src/js/index.js'
    },
    module: {
        rules: [{
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'images/',
                        limit: 2048
                    }
                }]
            },
            {
                test: /\.(woff|woff2|eot|svg|ttf)$/,
                use: [{
                    loader: 'file-loader',
                }]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    // 'css-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2
                        }
                    },
                    'sass-loader',
                    'postcss-loader',
                ]
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, "bundle"),
        filename: 'bundle.js'
    }
}