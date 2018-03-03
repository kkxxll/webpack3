import './subPageA'
import './subPageB'

// import * as _ from 'lodash'

require.ensure([], function() {
    var _ = require('lodash')
    _.join(['1', '2'], '3')
}, 'vender')

export default 'pageA'