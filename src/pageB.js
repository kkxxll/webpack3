import * as _ from 'lodash'
var page = 'subPageB'

if(page === 'subPageA') {
    import(/* webpackChunkName: 'subpageA' */'./subPageA').then(function(subPageA) {
        console.log(subPageA)
    })
} else {
    import(/* webpackChunkName: 'subpageB' */'./subPageB').then(function(subPageB) {
        console.log(subPageB)
    })
}

export default 'pageB'