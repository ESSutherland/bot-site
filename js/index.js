$(document).ready(function(){
    var url_string = window.location.href;
    var url = new URL(url_string);

    var bot_name = url.searchParams.get("bot_name")
    var prefix = url.searchParams.get("prefix");
    var color = url.searchParams.get("color")
    var levels = url.searchParams.get("levels")
    var minecraft = url.searchParams.get("minecraft")
    var custom = url.searchParams.get("custom")
    var animalcrossing = url.searchParams.get("animalcrossing")

    if(!prefix){
        prefix=""
    }
    if(!bot_name){
        bot_name="Bot"
    }
    if(color != 1){
        $("#color-commands").hide()
    }
    if(levels != 1){
        $("#level-commands").hide()
    }
    if(minecraft != 1){
        $("#minecraft-commands").hide()
    }
    if(custom != 1){
        $("#custom-commands").hide()
    }

    if(animalcrossing != 1){
        $("#animalcrossing-commands").hide()
    }


    $("#head").html("<h1>Commands for " + bot_name + "</h1>")
    $("#bot-cmd").text(prefix + "bot")
    $("#help-cmd").text(prefix + "help")
    $("#whois-cmd").text(prefix + "whois [@user] - ([]=optional)")
    $("#purge-cmd").text(prefix + "purge {amount} [@user] - ({}=required, []=optional)")
    $("#module-cmd").text(prefix + "module {name} {enable/disable} - ({}=required)")
    $("#modules-cmd").text(prefix + "modules")
    $("#lookup-cmd").text(prefix + "lookup {user ID} - ({}=required)")
    $("#stop-cmd").text(prefix + "stop")
    $("#color-cmd").text(prefix + "color/colour {hex} - ({}=required)")
    $("#level-cmd").text(prefix + "level [@user] - ([]=optional)")
    $("#leveltop-cmd").text(prefix + "leveltop")
    $("#addexp-cmd").text(prefix + "addexp {amount} [@user] - ({}=required, []=optional)")
    $("#whitelist-cmd").text(prefix + "whitelist {MC username} - ({}=required)")
    $("#commands-cmd").text(prefix + "commands")
    $("#command-cmd").text(prefix + "command {permission flag} {command} {response} - ({}=required)")
    $("#update-cmd").text(prefix + "update {command} {response} - ({}=required)")
    $("#delete-cmd").text(prefix + "delete {command} - ({}=required)")
    $("#villager-cmd").text(prefix + "villager {name} - ({}=required)")
});