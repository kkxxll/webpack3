// es module
import sum from './esModule'

// commonJS
var minus = require('./commomJS')

// amd
require(['./AMD'], function(muti) {
    console.log(muti(11, 22))
})

console.log(sum(11, 22))
console.log(minus(11, 22))