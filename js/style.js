/* Maquina de escribir */
let writing = str => {
	let arrFromStr = str.split('');
	let i = 0;
	let Titulo = document.getElementById('NombreHeader');
	console.log(Titulo.innerHTML);

	let printStr = setInterval(function(){
		NombreHeader.innerHTML += arrFromStr[i];
		i++;

		if(i === arrFromStr.length){
			clearInterval(printStr);
		}
	}, 100);
};

writing('alberto benito suárez');

$(document).ready(function(){

	$(window).scroll( function(){
		/*FadeIN elementos */
	 	$('.Fade-In').each( function(i){
			var top_of_element = $(this).offset().top;
		    var bottom_of_element = $(this).offset().top + $(this).outerHeight();
		    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
		    var top_of_screen = $(window).scrollTop();
            
            if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
                $(this).animate({'opacity':'1'},800); 
                console.log('Fade IN estoy');
            };
        });

	 	/*BARRA PROGRESO */
        $('.barra').each( function(i){
			var top_of_elementIdiomas = $(this).offset().top;
		    var bottom_of_elementIdiomas = $(this).offset().top + $(this).outerHeight();
		    var bottom_of_screenIdiomas = $(window).scrollTop() + $(window).innerHeight();
		    var top_of_screenIdiomas = $(window).scrollTop();
            
            if ((bottom_of_screenIdiomas > top_of_elementIdiomas) && (top_of_screenIdiomas < bottom_of_elementIdiomas)){
                $('.html').animate({'width': 95+'%'},800);
                $('.Photoshop').animate({'width': 90+'%'},800);
                $('.UXUI').animate({'width': 80+'%'},800);
                $('.Angular').animate({'width': 75+'%'},800);
                $('.Javascript').animate({'width': 85+'%'},800);
                $('.SeoSem').animate({'width': 75+'%'},800);
                $('.Espanol').animate({'width': 100+'%'},800);
                $('.frances').animate({'width': 85+'%'},800);
                $('.ingles').animate({'width': 60+'%'},800);
            };
        }); 

	});

	    
});