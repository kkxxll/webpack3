分别使用不同的模块化(AMD,es6 Module, commonJS)打包js

需要注意的是，使用AMD会多生成一个文件`0.bundle.js`
这是因为AMD是异步的，所以AMD.js会被单独生成一个文件`0.bundle.js`
在浏览器network中，点击waterfall可以查看文件加载的顺序
`bundle.js`在`0.bundle.js`之前

> webpack index.js [bundle filename]

执行后，打开index.html即可查看结果