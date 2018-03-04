#### tree shanking(没有用到的代码会被自动移除)

webpack打包后可以看到在 bundle.js里有两种注释
harmony export 表示用到的
unused harmony export c 表示没有用到的

引入lodash后配置好
new Webpack.optimize.UglifyJsPlugin()
可以看到 bundle.js 比原来小了，但还是有70多k，一个chunk方法不会这个大，这是因为lodash库的原因，本身不太支持的tree shanking。

可以安装lodash-es babel-plugin-lodash解决
npm i lodash-es -S
npm i babel-plugin-lodash -D
因为用到babel所以还需要安装
babel-loader babel-core babel-preset-env