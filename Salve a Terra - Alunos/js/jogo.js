var f_nave = 100
var f_tanque = 150
var f_pessoa = 50
var pontos = 0
var vel = 5 
var fase = 1000
var pontosAnterior = 0

//OBJETO
// var game_metodo = {
//     f_nave: 100,
//     f_tanque: 150,
//     pontos: 0
// }

// game_metodo.pontos += game_metodo.f_nave

// pontos += f_pessoa
// pontos -= f_pessoa * 1.10

var somjogo = document.getElementById("somjogo")
var tironave = document.getElementById("tironave")

var vida = 4

var teclas = {
    W:87,
    A:65,
    S:83,
    D:68,
    T:84,
    SPACE:32 
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
            $('#player').css("top", pos_top - vel)
    }
    if (jogo.pressionou[teclas.S]){
        var pos_down = $('#player').css("top")
        pos_down = parseInt(pos_down)

        if(pos_down <= 270)
            $('#player').css("top", pos_down + vel)
    }
    if (jogo.pressionou[teclas.A]){
        var pos_left = $('#player').css("left")
        pos_left = parseInt(pos_left)

        if(pos_left >= 10)
            $('#player').css("left", pos_left - vel)
    }
    if (jogo.pressionou[teclas.D]){
        var pos_right = $('#player').css("left")
        pos_right = parseInt(pos_right)

        if(pos_right <= 560)
            $('#player').css("left", pos_right + vel)
    }
    if(jogo.pressionou[teclas.SPACE]){
        tiro()
    }
    else{
        var pos_down = $('#player').css("top")
        pos_down = parseInt(pos_down)

        if(pos_down <= 270)
            $('#player').css("top", pos_down + vel)
    }
}

function movimenta_cenario(){
    let area_jogo = $('#area_jogo')
    let posicao = parseInt($('#area_jogo').css("background-position"))
    $('#area_jogo').css("background-position" , posicao - (vel + 5))    
}


    
function remove_inimigo(){
    var posicao_inimigo = $('#inimigo').css("left")
    posicao_inimigo = parseInt(posicao_inimigo)

    if(posicao_inimigo <= 700){
        $('#inimigo').css("left", posicao_inimigo - vel)
    }

    if(posicao_inimigo == 0){
        $('#inimigo').remove()

        setTimeout(function(){
            $('#area_jogo').append('<div id="inimigo"></div>'),$('#inimigo').css("top", (Math.random() * (350 - 0)))
        }, 1000)
    }
        
}  

function tiro(){
    if($('#tiro').length == 0){
        var p_y = parseInt($('#player').css('top'))
        var p_x = parseInt($('#player').css('left'))
        $('#area_jogo').append('<div id="tiro"></div>');
        $('#tiro').css('top', p_y + (vel + 15))
        $('#tiro').css('left', p_x + (vel + 65))
        tironave.play()
    }
}

function movimenta_tiro(){
    if($('#tiro').length > 0){
        var tiro_x = parseInt($('#tiro').css('left'))

        $('#tiro').css('left', tiro_x + (vel + 3))

        if(tiro_x >= 620)
            $('#tiro').remove()
    }
}

function colisao(){
    var p_tiro_inimigo = $('#tiro').collision('#inimigo')
    var p_atinge_inimigo = $('#player').collision('#inimigo')

    if(p_tiro_inimigo.length > 0){
        $('#tiro').remove()

        var i_x = parseInt($('#inimigo').css('left'))
        var i_y = parseInt($('#inimigo').css('top'))
        $('#inimigo').remove()
        $('#area_jogo').append('<div id="inimigo_explosao"></div>')
        $('#inimigo_explosao').css('left', i_x)
        $('#inimigo_explosao').css('top', i_y)

        setTimeout(function (){
            $('#inimigo_explosao').remove()
        }, 2000)
        pontos += f_nave
    }

    if(p_atinge_inimigo.length > 0) {
        diminuiVidaPlayer ()
    }

    if(p_atinge_tanque.length > 0){
        diminuiVidaPlayer ()
    }
}

function diminuiVidaPlayer(){
    vida--
    var posicao = "0px 52px"
    switch(vida){
        case 4: {
            posicao = "0px 52px"
            break;
        }
        case 3:{
            posicao = "-118px 52px"
            break
        }
        case 2:{
            posicao = "-234px 52px"
            break
        }
        case 1: {
            posicao = "-350px 52px"
        }
        default:{
                //mostrar a div game over 
                $('#player').remove()
                $('#nave').remove()
            }
    }   

    $('#vida').css("background-position", "0px 52px")
}

function valida_pontuacao (){
    if (pontos > 0){
        var faseAtual = Math.floor(pontos / fase)
        var faseAnt = Math.floor(pontosAnterior / fase )

        if(faseAtual > faseAnt) {
            vel += 1
            console.log(vel)
        }

        pontosAnterior = pontos
        $('#pontos').innerHTML = pontos
    }
}

function loop() {
    somjogo.addEventListener ("ended", function (){
        somjogo.currentTime = 0
        somjogo.play ()
    },false)
    somjogo.play()

    movimenta_player()
    movimenta_cenario()
    remove_inimigo()
    movimenta_tiro()
    colisao()
    valida_pontuacao()
}
    

setInterval(
    loop,
    30
);



function start() {
    $('#alerta').css('display', 'none')

    $('#area_jogo').append('<div id="vida"></div>')

    $('#area_jogo').append('<div id="player"></div>')

    $('#area_jogo').append('<div id="tanque"></div>')

    $('#area_jogo').append('<div id="pessoa"></div>')

    $('#area_jogo').append('<div id="inimigo"></div>')

    $('#area_jogo').append('<div id="explosao"></div>')
    
    $('#area_jogo').append('<div id="inimigo_tiro"></div>')

    $('#area_jogo').append('<div id="jogador_explosao"></div>')

    $('#area_jogo').append('<div id="pontos"></div>')


}

start()