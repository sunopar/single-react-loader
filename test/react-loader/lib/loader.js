var loaderUtils = require('loader-utils')
var assign = require('object-assign')
var path = require('path')

module.exports = function(content){
    // let script = content.match(/\<script\>.*\<\/script\>/)[0].replace(/\<\/?script\>/g,'')
    content = content.toString()
    let script = content.match(/\<script\>[^]+\<\/script\>/)[0].replace(/\<\/?script\>/g,'')
    let style = content.match(/\<style\>[^]+\<\/style\>/)[0].replace(/\<\/?style\>/g,'')

    // 缓存
    // this.cachebale()
    // 将决定路径解析成相对路径
    // loaderUtils.stringifyRequest(this, "!" + require.resolve("module/runtime"))
    var tpl = 'hello world'
    return "var tpl = \'"+tpl+"\';\n module.exports = tpl;";
    // return `var source = ${content};\n module.exports=content`
}
