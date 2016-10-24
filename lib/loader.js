var loaderUtils = require('loader-utils')
var assign = require('object-assign')
var path = require('path')
module.exports = function(content){
    // 缓存
    this.cachebale()
    // 将决定路径解析成相对路径
    loaderUtils.stringifyRequest(this, "!" + require.resolve("module/runtime"))

    return output
}
