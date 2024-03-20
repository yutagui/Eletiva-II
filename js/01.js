$(document).ready(function(){
    $('.sucesso').click(function(){
        var cep = $('#cep').val()
        var url = "https://viacep.com.br/ws/" + cep + "/json/"
        
        $.get(url)
            .then(function(retorno) {
                console.log(retorno)
                console.log(retorno.logradouro)
                $('#endereco').val(retorno.logradouro)
            })
            .catch(function(error){
                console.log(error)
            })
    })
})

