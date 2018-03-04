import base from './css/base.scss'
import common from './css/common.scss'

var app = document.getElementById('app');
app.innerHTML = '<div class="' + common.box + '"></div>'

// // 异步加载
// import(/* webpackChunkName: 'a'*/'./components/a').then(function(a) {
//     console.log(a)
// })

import { a } from './common/util'
console.log(a())