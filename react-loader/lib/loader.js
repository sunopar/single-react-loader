var loaderUtils = require('loader-utils')
var path = require('path')

// interal lib loader
var parseContent = require('./parseContent')
var selectPath = 'react-loader/lib/selector'

module.exports = function(content) {
    if (this.cacheable) this.cacheable()
    let loaderContext = this

    let filePath = this.resourcePath
    let pathName = path.basename(filePath)

    let isProduction = this.minimize || process.env.NODE_ENV === 'production'
    let needCssSourceMap = !isProduction && this.sourceMap
    let loaders = {
        js: '!!babel',
        css: '!!style!css' + (needCssSourceMap ?
            '?sourceMap' :
            '')
    }

    function getRequire(type, part) {
        let str = 'require(' +
            loaderUtils.stringifyRequest(
                loaderContext,
                getLoaderString(type, part) +
                filePath) +
            ')\n'
        return str
    }

    function getLoaderString(type, part) {
        let lang
        switch (type) {
            case 'style':
                lang = part.lang
                if (lang) {
                    return loaders['css'] +
                        `!${lang}!${selectPath}?type=${type}!`
                } else {
                    return loaders['css'] +
                        `!${selectPath}?type=${type}!`
                }
            case 'script':
                return loaders['js'] +
                    `!${selectPath}?type=${type}!`
        }
    }
    let thisContent = parseContent(content)
    let script = thisContent.script
    let style = thisContent.style

    let output = 'var __react_exports__,__react_options__;\n'
    if (style) {
        output += '\n/* style */\n'
        output += getRequire('style', style)
    }
    if (script) {
        output += '\n/* script */\n'
        output += '__react_exports__=' + getRequire('script',script)
    }
    output += '\nmodule.exports = __react_exports__\n'
    return output;
}