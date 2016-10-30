var IS_TEST = !!process.env.REACT_LOADER_TEST
var path = require('path')
var fs = require('fs')

exports.lib = function (file) {
    if (IS_TEST) {
        return path.resolve(__dirname, file)
    } else {
        return 'react-loader/lib' + file
    }
}
exports.dep = function (file) {
    if (IS_TEST) {
        return dep
    } else if (fs.existsSync(path.resolve(__dirname, 'node_module', dep))) {
        // npm 2 or npm link
        return 'react-loader/node_modules/' + dep
    } else {
        return dep
    }
}