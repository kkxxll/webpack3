var path = require('path')
var Webpack = require('webpack')
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HtmlInlineChunkPlugin = require('html-webpack-inline-chunk-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')

var PurifyCSS = require('purifycss-webpack')
var glob = require('glob-all')

module.exports = {
    entry: {
        app: './src/app.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: './',
        filename: 'js/[name]-bundle-[hash:5].js',
        chunkFilename: '[name].chunk.js'
    },
    devServer: {
        port: 9000,
        // historyApiFallback: true
        historyApiFallback: {
            rewrites: [
                {
                    from: '/pages/a',
                    to: '/pages/a.html'
                }
            ]
        }
    },
    resolve: {
        alias: {
            jquery$: path.resolve(__dirname, 'src/libs/jquery.min.js')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env']
                        }
                    }
                ]
            },
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
            },
            {
                test: path.resolve(__dirname, 'src/app.js'),
                use: [
                    {
                        loader: 'imports-loader',
                        options: {
                            $: 'jquery'
                        }
                    }
                ]
            },
            {
                loader: 'html-loader',
                options: {
                    attrs: ['img:src', 'img:data-src']
                }
            }
        ]
    },
    plugins: [
        new ExtractTextWebpackPlugin({
            filename: 'css/[name]-bundle-[hash:5].css'
        }),
        new PurifyCSS({
            paths: glob.sync([
                path.join(__dirname, './*.html'),
                path.join(__dirname, './src/*.js')
            ])
        }),
        // 提取公共
        new Webpack.optimize.CommonsChunkPlugin({
            name: 'manifest'
        }),
        new HtmlInlineChunkPlugin({
            inlineChunks: ['manifest']
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            // inject: false
            // chunks: ['app'],
            minify: {
                collapseWhitespace: true
            }
        }),
        new Webpack.optimize.UglifyJsPlugin(),
        new CleanWebpackPlugin(['dist'])
    ]
}