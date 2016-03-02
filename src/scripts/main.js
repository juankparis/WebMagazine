var $ = require('jquery');
	
	var $Menu = $('#Menu'),
		$menuClick = $('#menuClick'),
		$Headerbuscar = $("#Header-buscar"),
		$abrirBuscar = $("#abrirBuscar"),
		$from = $("#from"),
		$Leer = $("#leer"),
		$ContInfo = $(".ContInfo"),
		$ContInfoMovie = $(".ContInfo-movie"),
		$ContInfoAtras = $("#ContInfo-atras");

(function(){

	//modulo de efecto de ondulacio en el click
	// var ondulacion = require('./lib/ondulacion');
	// ondulacion();

	//menu
	$menuClick.on('click', menuAbrir);

	function menuAbrir(){
		$Menu.toggleClass("U-toggleMenu");
	}
	//barra de buscar
	$abrirBuscar.on('click', abrirBuscar);

	function abrirBuscar() {
		$from.toggleClass("U-toggleBuscar")
			.find("input").toggleClass("U-toggleWidth");
	}
	
	// leer series y movies

	$Leer.on('click', leerArticle);

	function leerArticle(){
		$ContInfo.toggleClass("U-expandirArticleMovie");
			setTimeout(
				function() {
					$ContInfo.toggleClass("U-expandirArticleMovie2");
					$ContInfoMovie.fadeIn("slow");
				}, 300);
	}

	$ContInfoAtras.on('click', cerrarArticle);

	function cerrarArticle() {
		$ContInfo.toggleClass("U-expandirArticleMovie2");
		$ContInfoMovie.fadeOut("slow");
			setTimeout(
				function(){
					$ContInfo.toggleClass("U-expandirArticleMovie");
				}, 300);
	}		
/*
/////////////////////shows //////////////

	var $Cont = $("#Cont");

	function renderShows(shows) {
		shows.forEach(function(show){
			var article =template
				.replace(':name:', show.name)
				.replace(':img:', show.image.medium)
				.replace(':img alt:', show.name + " logo")
				.replace(':language:', show.language);

			$Cont.append($(article));
		})
	}
// buscar shows
	$Headerbuscar.find("form").submit(function(ev){
		ev.preventDefault();
		// alert("me hizieron click");
		var busqueda = $(this)
			.find('input[type="text"]')
			.val();
			// alert("buscaron " + busqueda);
			$Cont.find('.Cont-article').remove();
			var $loader = $('<div class="loader"></div>')
			$loader.appendTo($Cont);
		$.ajax({
			url: 'http://api.tvmaze.com/search/shows',
			data:{ q: busqueda },
			success: function (res, textStatus, xhr) {
				console.log(res);
				$loader.remove();
				var shows = res.map(function(el){
					return el.show;
				})
				renderShows(shows);
			}
		})
	});

// template
	var template = '<article class="Cont-article">' +
			'<figure class="Cont-articleFigure">' +
				'<img src=":img:" alt=":img alt:" width="80" height="100">' +
			'</figure>' +
			'<div class="Cont-articleInfo">' +
				'<h2 class="Cont-articleInfoTitle">:name:</h2>' +
				'<h4 class="Cont-articleInfoAutor">:language:</h4>' +
				'<a class="Cont-articleInfoButton icon-plus-circle">Leer</a>' +
			'</div>'+
		'</article>';

// shows
	$.ajax({
		url: 'http://api.tvmaze.com/shows',
		success: function(shows, textStatus, xhr){
			// console.log(data);
			// var $Cont = $("#Cont");
			$Cont.find('.loader').remove();
			// shows.forEach(function(show){
			// 	var article =template
			// 		.replace(':name:', show.name)
			// 		.replace(':img:', show.image.medium)
			// 		.replace(':img alt:', show.name + " logo")
			// 		.replace(':language:', show.language);

			// 	$Cont.append($(article));
			// })
			renderShows(shows);
		}
	})
*/
}());