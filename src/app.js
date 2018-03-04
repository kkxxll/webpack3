import common from './css/common.css'
import base from './css/base.css'

// 调用use才能生效
base.use()
common.use()

setTimeout(function() {
    // 调用unuse则去除样式
    base.unuse()
    common.unuse()
}, 2000)