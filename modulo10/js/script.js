$(document).ready(function(){

    //ADICIONANDO AS MASCARAS AOS CAMPOS 
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(__) _____-____'
    });

    $('#cpf').mask('000-000-000.00', {
        placeholder: '___-___-___.__'
    });

    $('#cep').mask('00000-000', {
        placeholder: '_____-___'
    });

    $('#cadastro-form').validate({
        rules:{
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
        },
        messages: {
            nome: '*Preenchimento obrigatório',
            email: '*Preenchimento obrigatório',
            telefone: '*Preenchimento obrigatório',
            cpf: '*Preenchimento obrigatório',
        }
    })

})