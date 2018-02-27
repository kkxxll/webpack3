npm init


npm i -D babel-loader babel-core

##### 安装最新版
npm i babel-loader@8.0.0-beta.0 @babel/core

配置好babel-loader以后
需要通过 babel presets 声明以哪一种规范编译

###### 如以下几种（还有其他的）
- es2015
- es2016
- es2017
- env（包含前三个）
- babel-preset-react

npm i @babel/preset-env -D
npm i babel-preset-env -D

targets: 用来指定对哪些语法进行编译

执行webpack后，可以看到babel编译后的结果