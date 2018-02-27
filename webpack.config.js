module.exports = {
    entry: {
        bundle: './app.js'
    },
    output: {
        filename: '[name].[hash:8].js'
        // filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: '/node_modules/'
            }
        ]
    }
}