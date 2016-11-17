module.exports.rewriteScript = function(content, moduleId) {
    var scriptTag = content.match(/\<[a-z0-9]+/gm)
    var contents = content.split('\n')
    if (scriptTag) {
        contents = contents.map(child => {
            for (let i = 0, l = scriptTag.length; i < l; i++) {
                let ele = scriptTag[i]
                if (child.indexOf(ele) !== -1) {
                    child = child.replace(ele, ele + ` ${moduleId}`)
                    scriptTag.splice(i, 1)
                    break
                }
            }
            return child
        })
    }
    return contents.join('\n')
}
module.exports.rewriteStyle = function(content = '', moduleId) {
    if (content) {
        var styleClassNames = content.match(/(\.|\#).+\{/g)
        if (styleClassNames) {
            styleClassNames = styleClassNames.map(ele => ele.replace(/(\{)/g, ''))
            styleClassNames.forEach(ele => {
                content = content.replace(ele, ele.trim() + `[${moduleId}]`)
            })
        }
    }

    return content
}