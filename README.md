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

配置 请求时候的地址
publicPath: './assets'


配置 图片物理位置的地址
outputPath: '',
useRelativePath: true

图片压缩
配置压缩比例
pngquant: {
    quality: 80
}

雪碧图会生成两张，其中一张是压缩后的

图片以@2x命名，就会告诉postcss-sprites需要进行retina屏处理
如果图片是 @2x， 那么css中长宽需要变成原来的二分之一