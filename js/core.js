$(document).ready(function(){

	$('#menu-btn').click(function(){		
			$('.menu').slideToggle(700);	
			if ($(this).hasClass('not-active')) {
				$(this).addClass('is-active').removeClass('not-active');
			}else{
				setTimeout(function(){
					$('.is-active').addClass('not-active').removeClass('is-active')
				},600)			
			};		
		});
		$("#menu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

		
		$("#send_form").validate({

		rules: {
			name: {
				required:true,
			},

			phone:{
				required:true,
				minlength: 10
			},


			email: {
				required:true,
				email:true
			}
		},

			messages: {     
     email: {
       required: "Напишите ваш E-mail",
       email: "вы ввели некорректный E-mail"
     },
     name:{
     	required:"Напишите ваше имя",
     },
     phone:{
     	required:"напишите ваш номер",
     	minlength:"минимальное значение символов-10"

     }
   },
   errorElement:"em"

	});
});
	var options = {
  offset: 606
}
	var header = new Headhesive('.header, options');