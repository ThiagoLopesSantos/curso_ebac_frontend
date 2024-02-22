$(document).ready(function() {
    
    $('ul').css('display', 'none'); //escondendo a lista

    $('form').on('submit', function(e) {
        e.preventDefault();
        const addTarefa = $('#tarefa').val(); //obtendo o resultado do formulário
        const novaTarefa = $(`<li>${addTarefa}</li>`); //atribuindo o resultado a lista

        $('ul').append(novaTarefa); //adicionando o item na lista

        $('ul').css('display', 'flex'); //revelando a lista após adição da tarefa

        $('#tarefa').val('');
    });

    $('ul').on('click', 'li', function() {
        $(this).css('text-decoration','line-through'); // usando 'this' para selecionar individualmente cada 'li' dentro da 'ul'
    });
});

