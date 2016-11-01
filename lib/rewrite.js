module.exports.rewriteScript = function(content, moduleId) {
    var scriptTag = content.match(/\<[a-z0-9]+/g)
    if (scriptTag) {
        scriptTag.forEach(ele => {
            content = content.replace(ele, ele + ` ${moduleId}`)
        })
    }
    return content
}
module.exports.rewriteStyle = function(content, moduleId) {
    var styleClassNames = content.match(/(\.|\#).+\{/g);
    if (styleClassNames) {
        styleClassNames = styleClassNames.map(ele => ele.replace(/(\{)/g, ''))
        styleClassNames.forEach(ele => {
            content = content.replace(ele, ele + `[${moduleId}]`)
        })
    }

    return content
}