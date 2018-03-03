// import './subPageA'
// import './subPageB'

require.include('./moduleAB')

var page = 'subPageA'

if(page === 'subPageA') {
    // 若不指定webpackChunkName 则会生成 number.chunk.js
    import(/* webpackChunkName: 'subpageA' */'./subPageA').then(function(subPageA) {
        console.log(subPageA)
    })
} else {
    import(/* webpackChunkName: 'subpageB' */'./subPageB').then(function(subPageB) {
        console.log(subPageB)
    })
}

// import * as _ from 'lodash'

require.ensure([], function() {
    var _ = require('lodash')
    _.join(['1', '2'], '3')
}, 'vender')

export default 'pageA'