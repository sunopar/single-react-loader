var path = require('path')
var parseContent = require('./parseContent')
var loaderUtils = require('loader-utils')

var object = require('./rewrite'),
    rewriteScript = object.rewriteScript,
    rewriteStyle = object.rewriteStyle

module.exports = function(content) {
    this.cacheable()
    var query = loaderUtils.parseQuery(this.query)
    var moduleId = query.moduleId
    var isScoped = query.isScoped
    var part = parseContent(content)[query.type];
    var thisContent = part.content
    if (isScoped) {
        switch (query.type) {
            case 'script':
                thisContent = rewriteScript(part.content, moduleId)
                break
            case 'style':
                thisContent = rewriteStyle(part.content, moduleId)
                break
        }

    }
    this.callback(null, thisContent)
}