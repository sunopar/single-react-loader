var loaderUtils = require('loader-utils')
var path = require('path')
var getHash = require('./getHash')
    // interal lib loader
var parseContent = require('./parseContent')
var selectPath = 'single-react-loader/lib/selector'
    // var { rewriteScript, rewriteStyle } = requrie('./rewrite')

module.exports = function(content) {
    if (this.cacheable) this.cacheable()
    var loaderContext = this

    var filePath = this.resourcePath
    var pathName = path.basename(filePath)
    var moduleId = 'data-v-' + getHash('pathName')
        // var moduleId = ''
    var isProduction = this.minimize || process.env.NODE_ENV === 'production'
    var needCssSourceMap = !isProduction && this.sourceMap
    var loaders = {
        js: '!!babel-loader' + (needCssSourceMap ?
            '?sourceMap' :
            ''),
        css: '!!style-loader!css-loader'
    }

    function getRequire(type, part, isScoped) {
        var str = 'require(' +
            loaderUtils.stringifyRequest(
                loaderContext,
                getLoaderString(type, part, isScoped) +
                filePath) +
            ')\n'
        return str
    }

    function getLoaderString(type, part, isScoped) {
        var lang
        var path = `!${selectPath}?type=${type}&moduleId=${moduleId}&isScoped=${isScoped}!`
        switch (type) {
            case 'style':
                lang = part.lang
                if (lang) {
                    return loaders['css'] +
                        `!${lang}${path}`
                } else {
                    return loaders['css'] +
                        path
                }
            case 'script':
                return loaders['js'] +
                    path
        }
    }
    var thisContent = parseContent(content)
    var script = thisContent.script
    var style = thisContent.style
    var isScoped = style.isScoped
    var output = 'var __react_exports__,__react_options__;\n'
    if (style) {
        output += '\n/* style */\n'
        output += getRequire('style', style, isScoped)
    }
    if (script) {
        output += '\n/* script */\n'
        output += '__react_exports__=' + getRequire('script', script, isScoped)
    }
    output += '\nmodule.exports = __react_exports__\n'
    return output;
}