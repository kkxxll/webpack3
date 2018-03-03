minChunks 为 Infinity 的时候就是单纯创建这个文件，什么都不做。

这里是为了保证 vendor entry 里的模块都只放在 vendor.bundle.js 里。

比如假设你后面又提取一遍 common chunks，叫 com1，minChunks 设为 2，恰好有两个模块里引用了 jquery，但 com1 并不会把 jquery 打包进去。