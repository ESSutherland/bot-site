$(document).ready(function(){
    var url_string = window.location.href
    var url = new URL(url_string);

    var bot_name = url.searchParams.get("bot_name")
    var prefix = url.searchParams.get("prefix")
    var color = url.searchParams.get("color")
    var levels = url.searchParams.get("levels")
    var minecraft = url.searchParams.get("minecraft")
    var custom = url.searchParams.get("custom")
    var animalcrossing = url.searchParams.get("animalcrossing")
    var boostmessage = url.searchParams.get("boostmessage")
    var anime = url.searchParams.get("anime")

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

    if(boostmessage != 1){
        $("#boostmessage-commands").hide()
    }

    if(anime != 1){
        $("#anime-commands").hide()
    }


    $("#head").html("<h1>Commands for <span id=\"" + bot_name + "\">" + bot_name + "</span></h1>")
    $(".prefix").text(prefix)
});