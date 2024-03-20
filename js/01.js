$(document).ready(function(){
    $('.sucesso').click(function(){
        var cep = $('#cep').val()
        var url = "https://viacep.com.br/ws/" + cep + "/json/"
        
        $.get(url)
            .then(function(retorno) {
                console.log(retorno)
            })
            .catch(function(error){
                console.log(error)
            })
    })
})

