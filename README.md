使用babel-runtime
需要创建文件 `.babelrc` 是一个json文件
可以对比两个打包好的文件，可以发现使用babel-polyfill后，会通过全局变量来兼容

由于之前babel安装的是指定版本
所以这里也需要安装对应版本的babel-runtime
之前没有注意，所以需要重新安装

npm i @babel/runtime -S

使用babel-runtime还是babel-polyfill取决于全局环境是否可以被污染，不可以则用前者