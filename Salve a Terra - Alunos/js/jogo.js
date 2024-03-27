function loop () {
    var posicao = parseInt($('#area_jogo').css("background-position"))
    $('#area_jogo').css("background-position" , posicao - 1)
}

setInterval(
    loop,
    30
);
