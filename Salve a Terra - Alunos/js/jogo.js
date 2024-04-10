var teclas = {
    W:87,
    A:65,
    S:83,
    D:68
}
var jogo = {

}
jogo.pressionou = []

$(document).keydown(function (e) {
    jogo.pressionou[e.which] = true
})

$(document).keyup(function (e){
    jogo.pressionou[e.which] = false
})

function movimenta_player(){
    if (jogo.pressionou[teclas.W]){
        var pos_top = $('#player').css("top")
        pos_top = parseInt(pos_top)

        if(pos_top >= 10)
            $('#player').css("top", pos_top - 10)
    }
    if (jogo.pressionou[teclas.S]){
        var pos_down = $('#player').css("top")
        pos_down = parseInt(pos_down)

        if(pos_down <= 270)
            $('#player').css("top", pos_down + 5)
    }
    if (jogo.pressionou[teclas.A]){
        var pos_left = $('#player').css("left")
        pos_left = parseInt(pos_left)

        if(pos_left >= 10)
            $('#player').css("left", pos_left - 5)
    }
    if (jogo.pressionou[teclas.D]){
        var pos_right = $('#player').css("left")
        pos_right = parseInt(pos_right)

        if(pos_right <= 560)
            $('#player').css("left", pos_right + 5)
    }
    else{
        var pos_down = $('#player').css("top")
        pos_down = parseInt(pos_down)

        if(pos_down <= 270)
            $('#player').css("top", pos_down + 5)
    }
}

function movimenta_cenario(){
    var posicao = parseInt($('#area_jogo').css("background-position"))
    $('#area_jogo').css("background-position" , posicao - 1)    
}

function loop () {
    movimenta_player()
    movimenta_cenario()
}

setInterval(
    loop,
    30
);

function start() {
    $('#alerta').css('display', 'none')

    $('#area_jogo').append('<div id="player"></div>')

    $('#area_jogo').append('<div id="tanque"></div>')

    $('#area_jogo').append('<div id="pessoa"></div>')

    $('#area_jogo').append('<div id="inimigo"></div>')

    $('#area_jogo').append('<div id="explosao"></div>')

    $('#area_jogo').append('<div id="inimigo_explosao"></div>')

    $('#area_jogo').append('<div id="inimigo_tiro"></div>')

    $('#area_jogo').append('<div id="jogador_explosao"></div>')

    $('#area_jogo').append('<div id="tiro"></div>')
}

start()