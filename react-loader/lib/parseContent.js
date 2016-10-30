module.exports = function(content) {
    let script = getScript(content)
    let style = getStyle(content)
    return {
        script,
        style
    }
}

function getScript(content) {
    let script = content
        .match(/\<script\>[^]+\<\/script\>/)[0]
        .replace(/\<\/?script\>/g, '')
    return script
}

function getStyle(content) {
    let style = content
        .match(/\<style\>[^]+\<\/style\>/)[0]
        .replace(/\<\/?style\>/g, '')
    return style
}