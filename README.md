#### 处理css
- 引入
    + style-loader(用于创建标签)
    + css-loader(用于给css包装一层，然后引入到js)
- css modules
- 配置less/sass
- 提取css代码


###### css-loader(options)
- alias (解析的别名)
- importLoader (@import)
- Minimize 是否压缩
- modules 是否启用css-modules

###### css-modules语法
:local
:global
compose 继承于

需要注意的是 css的引入顺序由compose决定

``` css
.box {
    composes: bigbox from './base.css';
    height: 100px;
    background: #333;
} 
<!-- box的样式会覆盖bigbox中的 -->
```