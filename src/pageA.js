// import './subPageA'
// import './subPageB'

require.include('./moduleAB')

if(page === 'subPageA') {
    require.ensure(['./subPageA'], function() {
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