//check off todos
$('ul').on('click', 'li', () => {
  $(this).toggleClass('completed');
});

//delete todo
$("ul").on("click", "span", (event) => {
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//add new todo
$('#input').keypress((event) => {
  if (event.which === 13){
    let todoText = $(this).val();
    $(this).val('');
    if ($('#header').hasClass('header-dark')){
      $('ul').append("<li class='li-dark'><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    } else{
      $('ul').append("<li class='li-light'><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
  }
});

//theme toggler
$('#check-label').on('click', () => {
  $('body').toggleClass('body-dark');
  $('#header').toggleClass('header-dark');
  $('li').toggleClass('li-dark');
  $('#input').toggleClass('input-dark');
  $('#check-label').toggleClass('label-dark');
  $('#ball').toggleClass('ball-dark');
});