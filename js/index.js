$(document).ready(function(){
    var url_string = window.location.href;
    var url = new URL(url_string);

    var bot_name = url.searchParams.get("bot_name")
    var prefix = url.searchParams.get("prefix");

    if(!prefix){
        prefix=""
    }

    $("#head").html("<h1>Commands for " + bot_name + "</h1>")
    $("#bot-cmd").text(prefix + "bot")
    $("#help-cmd").text(prefix + "help")
    $("#whois-cmd").text(prefix + "whois [@user] - ([]=optional)")
    $("#purge-cmd").text(prefix + "purge {amount} [@user] - ({}=required, []=optional)")
    $("#module-cmd").text(prefix + "module {name} {enable/disable} - ({}=required)")
    $("#modules-cmd").text(prefix + "modules")
});