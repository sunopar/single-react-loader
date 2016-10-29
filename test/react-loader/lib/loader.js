var loaderUtils = require('loader-utils')
var assign = require('object-assign')
var path = require('path')

// interal lib loader
var parseContent = require('parseContent')
var getScript = parseContent.getScript;
var getStyle = parseContent.getStyle;
// dep loader

var hasBabel = false;
try {
    hasBabel = !!require('babel-loader')
} catch (e) {}

module.exports = function (content) {
    this.cacheable()

    let filePath = this.resourcePath
    let pathName = path.basename(filePath)

    // 缓存 this.cachebale() 将决定路径解析成相对路径 loaderUtils.stringifyRequest(this, "!" +
    // require.resolve("module/runtime"))
    script = require('babel!')
    let defaultLoader = {
        jsx: hasBabel
            ? 'babel-loader'
            : '',
        css: 'css-loader'
    }
    function getRequireForImport() {}
    function getRequire() {
        return 'require(' +
        getRequireString()
        
    }

    let script = getScript(content)
    let style = getStyle(content)

    let output = 'var __react_exports__,__react_options__;\n'

    if (script) {
        optput += '\n/* script */\n'
        output += '__react_exports__ =' + (script.src
            ? getRequireForImport
            : getRequire('script',script))
    }
    return output;
}