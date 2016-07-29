module.exports = {
    log: function(string) {
        if (console) console.log("%c" + string, "background: gray; color: yellow; font-size: large");
    }
}
