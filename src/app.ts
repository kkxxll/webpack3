import * as _ from 'lodash/index'

console.log(_.chunk([1,2,3,4,5], 2))

const NUM = 45

interface Cat {
    name: String,
    gender: String
}

function touchCat (cat: Cat) {
    console.log(cat.name)
}

touchCat({
    name: 'tom',
    gender: 'male'
})