module.exports = function (content) {
    var script = getScript(content)
    var style = getStyle(content)
    return {script, style}
}

function getScript(content) {
    var script = {}
    var scriptContent = content.match(/\<script[^]*\>[^]+\<\/script\>/)
    if (scriptContent) {
        script.content = scriptContent[0].replace(/\<\/?script\>/g, '')
    }
    return script
}

function getStyle(content) {
    var style = {}
    var styleContent = content.match(/\<style[^]*\>[^]+\<\/style\>/)
    if (content) {
        style.content = styleContent[0].replace(/\<\/?style[^>]*\>/g, '')
        var header = content.match(/\<style[^>]*\>/)[0]
        var lang = header.match(/lang=[a-zA-Z\"\']+/)
        if (lang) {
            style.lang = lang[0]
                .match(/['"].+['"]/)[0]
                .replace(/[\'\"]/g, '')
        }
        style.isScoped = false;
        if (header.search('scoped') !== -1) {
            style.isScoped = true
        }
    }

    return style
}