var webpack = require('webpack')
var path = require('path')
module.exports = {
    entry: {
        pageA: './src/pageA',
        pageB: './src/pageB',
        vender: ['lodash']
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vender',
            minChunks: Infinity
        })
    ]
}