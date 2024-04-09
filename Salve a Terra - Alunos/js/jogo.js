function loop () {
    var posicao = parseInt($('#area_jogo').css("background-position"))
    $('#area_jogo').css("background-position" , posicao - 1)
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