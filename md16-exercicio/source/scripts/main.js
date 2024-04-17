$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(__) _____-____'
    });

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: '<p class="section-title  fw-bold alert pt-0 pb-0 pe-3 ps-3 m-0">* Campo obrigatório</p>',
            email: '<p class="section-title  fw-bold alert pt-0 pb-0 pe-3 ps-3 m-0">* Campo obrigatório</p>',
            mensagem: '<p class="section-title  fw-bold alert pt-0 pb-0 pe-3 ps-3 m-0">* Campo obrigatório</p>'
        }
    });

});