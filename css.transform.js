module.exports = function(css) {
    console.log(css)
    console.log(window.innerWidth)

    if (window.innerWidth >= 768) {
        return css.replace('#eee', 'green')
    } else {
        return css.replace('#eee', 'yellow')
    }

    // 若没有任何操作，则return css 即可
    // return css 
}