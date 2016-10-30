var loaderUtils = require('loader-utils')
var assign = require('object-assign')
var path = require('path')

// interal lib loader
var parseContent = require('./parseContent')
    // dep loader

var hasBabel = false;
try {
    hasBabel = !!require('babel-loader')
} catch (e) {}

module.exports = function(content) {
    this.cacheable()
    let loaderContext = this
    let filePath = this.resourcePath
    let pathName = path.basename(filePath)

    // 缓存 this.cachebale() 将决定路径解析成相对路径 loaderUtils.stringifyRequest(this, "!" +
    // require.resolve("module/runtime"))
    let defaultLoader = {
        jsx: hasBabel ?
            'babel-loader' : '',
        css: 'css-loader'
    }

    function getRequireForImport() {}

    function getRequire(type, part) {
        return 'require(' + getRequireString(type, part)

    }

    function getRequireString(type, part) {
        return loaderUtils.stringifyRequest(loaderContext, '!!' + getLoaderString() + filepath)
    }
    let thisContent = parseContent(content)
    let script = thisContent.script
    let style = thisContent.style

    let output = 'var __react_exports__,__react_options__;\n'
    if (style) {
        output += '\n/* style */\n'
        output += 'require("!!style-loader!css-loader!react-loader/lib/selector?type=style!./test.react")'
    }
    if (script) {
        output += '\n/* script */\n'
            // output += '__react_exports__ =' + (script.src
            //     ? getRequireForImport
            //     : getRequire('script', script))
        output += '__react_exports__=require("!!!babel-loader!react-loader/lib/selector?type=script&index=0!./test.react")'
    }
    output += '\nmodule.exports = __react_exports__\n'
        // output += 'module.exports=__react_exports__'
    return output;
}