// import './subPageA'
// import './subPageB'

require.include('./moduleAB')

var page = 'subPageA'

if(page === 'subPageA') {
    require.ensure(['./subPageA'], function() {
        // 执行一下这行，subpageA才会被执行，若注释，则表示
        // subpageA只会被加载，还没有执行
        var subPageA = require('./subPageA')
    }, 'subPageA')
} else {
    require.ensure(['./subPageB'], function() {
        var subPageB = require('./subPageB')
    }, 'subPageB')
}

// import * as _ from 'lodash'

require.ensure([], function() {
    var _ = require('lodash')
    _.join(['1', '2'], '3')
}, 'vender')

export default 'pageA'