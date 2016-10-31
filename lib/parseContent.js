module.exports = function(content) {
    let script = getScript(content)
    let style = getStyle(content)
    return {
        script,
        style
    }
}

function getScript(content) {
    let script = {}
    script.content = content
        .match(/\<script[^]*\>[^]+\<\/script\>/)[0]
        .replace(/\<\/?script\>/g, '')
    return script
}

function getStyle(content) {
    let style = {}
    style.content = content
        .match(/\<style[^]*\>[^]+\<\/style\>/)[0]
        .replace(/\<\/?style[^>]*\>/g, '')
    let lang = content
        .match(/<style lang=[a-zA-Z\"\']+>/)
    if (lang) {
        style.lang = lang[0].match(/['"].+['"]/)[0].replace(/[\'\"]/g, '')
    }
    return style
}