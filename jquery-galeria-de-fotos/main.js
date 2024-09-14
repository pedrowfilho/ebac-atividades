$(document).ready(function () {
  // mostra o form
  $("header button").click(function () {
    $("form").slideDown();
  });

  // recolhe o form
  $("#btnCancelar").click(function () {
    $("form").slideUp();
  });
  /*
    // forma mais curta
    $('header button').click(function(){
        alert("Expandir formulário")
    })
*/
  // outra forma
  $('form').on('submit', function (e) {
    e.preventDefault();
    const enderecoNovaImagem = $('#endereco-imagem-nova').val();

    const novoItem = $(`<li style="display: none"></li>`);

    $(`<img src="${enderecoNovaImagem}"/>`).appendTo(novoItem);
    $(`<div class="overlay-image-link"><a href="${enderecoNovaImagem}" target="_blank" title="Ver imagem em tamanho real">Ver imagem em tamanho real</a></div>`).appendTo(novoItem);
    $(novoItem).appendTo(`ul`);
    $(novoItem).fadeIn(1000);
    $('#endereco-imagem-nova').val('');
  })
})
