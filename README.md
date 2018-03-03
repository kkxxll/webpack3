#### 打包公共代码
使用webpack内置插件 CommonsChunkPlugin

plugins: [
    new webpack.optimize.CommonsChunkPlugin(options)
]

##### options参数
- name/names
- filename
- minChunks
    + number 表示出现几次会被作为公共部分提取
    + funtion 自定义提取规则

##### 场景
- 单页应用
- 单页应用+第三方依赖
- 多页应用+第三方依赖+webpack生产代码(如内置函数）

在单页面应用里，打包后的common.bundle.js不会提取公共的部分