### 文件处理
- 图片处理
- 字体js库
- 第三方js库（非node_modules里的）


##### 图片处理
- css中引入的图片（即background:url...）
    + file-loader
- 自动合成雪碧图
    + postcss-sprites
- 压缩图片
    + img-loader
- base64编码
    + url-loader


npm i file-loader url-loader img-loader postcss-sprites -D

小于10kb的时候 用base64
limit: 10000