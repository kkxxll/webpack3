babel polyfill
babel runtime transform

由于一些方法没有被babel处理，如

- Generator
- Set
- Map
- Array.from 
- Array.prototype.includes

所以需要借助babel polyfill

----

#### babel polyfill
- 全局的

#### babel runtime transform
- 局部的

#### 安装使用
npm i babel-polyfill -S
npm i babel-runtime -S
npm i babel-plugin-transform-runtime -D
touch .babelrc

可以对比两个打包好的文件，可以发现使用babel-polyfill后，会通过全局变量来兼容
