### 代码分割和第三方依赖

#### 代码分割
- 分离： 业务代码 第三方依赖
- 分离： 业务代码 第三方依赖 业务公共代码
- 分离： 首次加载代码 访问后加载代码

实现：业务代码 第三方依赖 业务公共代码

若添加这行
require.include('./moduleAB')
则 subpageA和subpageB中的公共部分会被提取到pageA中