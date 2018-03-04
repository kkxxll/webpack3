var path = require('path')
var Webpack = require('webpack')
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

var PurifyCSS = require('purifycss-webpack')
var glob = require('glob-all')

module.exports = {
    entry: {
        app: './src/app.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: './dist/',
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextWebpackPlugin.extract({
                    fallback: {
                        loader: 'style-loader',
                        options: {
                            singleton: true,
                            transform: './css.transform.js'
                        }
                    },
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                // minimize: true,
                                localIdentName: '[path][name]_[local]_[hash:base64:5]'
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                ident: 'postcss',
                                plugins: [
                                    require('postcss-sprites')({
                                        spritePath: 'dist/assets/imgs/sprites',
                                        retina: true
                                    }),
                                    require('postcss-cssnext')()
                                ]
                            }
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                })
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
                    // {
                    //     loader: 'file-loader',
                    //     options: {
                    //         publicPath: '',
                    //         // outputPath: 'dist/',
                    //         outputPath: '',
                    //         useRelativePath: true
                    //     }
                    // },
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[name][hash:5].[ext]',
                            limit: 1000,
                            publicPath: './assets/imgs/sprites/',
                            outputPath: '',
                            useRelativePath: true
                        }
                    },
                    // {
                    //     loader: 'img-loader',
                    //     options: {
                    //         pngquant: {
                    //             quality: 80
                    //         }
                    //     }
                    // }
                ]
            },
            {
                test: /\.(eot|woff2?|ttf|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[name][hash:5].[ext]',
                            limit: 1000,
                            publicPath: './assets/fonts/',
                            outputPath: '',
                            useRelativePath: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextWebpackPlugin({
            filename: '[name].min.css'
        }),
        new PurifyCSS({
            paths: glob.sync([
                path.join(__dirname, './*.html'),
                path.join(__dirname, './src/*.js')
            ])
        }),
        new Webpack.ProvidePlugin({
            $: 'jquery'
        }),
        new Webpack.optimize.UglifyJsPlugin()
    ]
}