module.exports.getScript = function(content) {
    let script = content
        .match(/\<script\>[^]+\<\/script\>/)[0]
        .replace(/\<\/?script\>/g, '')
    return script
}
module.exports.getScript = function(content) {
    let style = content
        .match(/\<style\>[^]+\<\/style\>/)[0]
        .replace(/\<\/?style\>/g, '')
    return style
}