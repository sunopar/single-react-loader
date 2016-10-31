var path = require('path')
var parseContent = require('./parseContent')
var loaderUtils = require('loader-utils')

module.exports = function(content) {
    this.cacheable()
    var query = loaderUtils.parseQuery(this.query)
        // var filename = path.basename(this.resourcePath)
        // var parts = parse(content, filename, this.sourceMap)
        // var part = parts[query.type]
    var thisContent = parseContent(content)[query.type]['content'];
    // if (Array.isArray(part)) {
    //     part = part[query.index]
    // }
    this.callback(null, thisContent)
}