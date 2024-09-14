$(document).ready(function () {
  
  // Ação para submeter o formulário e adicionar uma tarefa
  $('#form-tarefa').on('submit', function (e) {
    e.preventDefault(); // Impede o reload da página

    // Obtém o valor do campo de texto
    const nomeTarefa = $('#nova-tarefa').val();

    // Cria um novo item <li> e adiciona à lista
    const novoItem = $('<li></li>').text(nomeTarefa);

    // Adiciona o novo item à lista
    $('#lista-de-tarefas').append(novoItem);

    // Limpa o campo de texto
    $('#nova-tarefa').val('');
    
  });

  // Evento para riscar a tarefa ao clicar no item da lista
  $('#lista-de-tarefas').on('click', 'li', function () {
    // Alterna a classe 'riscada' para aplicar ou remover o efeito de riscar
    $(this).toggleClass('riscada');
  });
});