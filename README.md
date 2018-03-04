#### postcss

安装
postcss
postcss-loader
autoprefixer 加前缀
cssnano
postcss-cssnext

cssnano用于压缩css，css-loader中的压缩就是利用这个插件的

npm i postcss postcss-loader autoprefixer cssnano postcss-cssnext -D

##### browserslist
有些配置是所有插件共用的，就可以放在package.json中的`browserslist`字段里，或者添加.browserslist文件也可