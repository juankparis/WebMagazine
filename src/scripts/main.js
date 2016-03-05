var $ = require('jquery');
	
	var $Menu = $('#Menu'),
		$menuClick = $('#menuClick'),
		$Headerbuscar = $("#Header-buscar"),
		$abrirBuscar = $("#abrirBuscar"),
		$from = $("#from"),
		$Leer = $("#leer"),
		$ContInfo = $("#ContInfo"),
		$ContInfoMovie = $(".ContInfo-movie"),
		$ContInfoAtras = $("#ContInfo-atras");

(function(){

	var ajax = require('./lib/ajax');
	ajax();

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


	setTimeout(function() {

		$Leer.on('click', leerArticle);

		function leerArticle(){
			event.preventDefault();
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
	},1000);
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
			// $(article).appendTo($Cont);

			var article2 =template2
				.replace(':name:', show.name)
				.replace(':img:', show.image.original)
				.replace(':img alt:', show.name + " logo")
				.replace(':language:', show.language)
				.replace(':genres:', show.genres)
				.replace(':status:', show.status)
				.replace(':Scheduled:', show.schedule.days + ' at time: '+ show.schedule.time)
				.replace(':timezone:', show.network.country.timezone)
				.replace(':summary:', show.summary)
				.replace(':weight:', show.weight)
				.replace(':rating:', show.rating.average);

			$Cont.append($(article2));
			// $(article2).appendTo($Cont);
		})
	}
	// function renderShowslib(shows) {
	// 	shows.forEach(function (show) {
	// 	})
	// }
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
				// console.log(res);
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
				'<a class="Cont-articleInfoButton icon-plus" id="leer">Leer</a>' +
			'</div>' +
		'</article>';

	var template2='<article class="ContInfo" id="ContInfo">' +
			'<div class="ContInfo-movie">' +
				'<img src=":img:" alt=":img alt:" width="50" height="50">' +
				'<div class="ContInfo-movieInfo">' +
					'<h2 class="Cont-articleInfoTitle">:name:</h2>' +
					'<h4 class="Cont-articleInfoAutor">:language:</h4>' +
					'<h4 class="Cont-articleInfoAutor"><span>genres: </span>:genres:</h4>' +
					'<h4 class="Cont-articleInfoAutor"><span>Status: </span>:status:</h4>' +
					'<h4 class="Cont-articleInfoAutor"><span>Scheduled: </span>:Scheduled:</h4>' +
					'<h4 class="Cont-articleInfoAutor"><span>timezone: </span>:timezone:</h4>' +
					'<h4 class="Cont-articleInfoAutor"><span>Official site:</span> <a href="#">www.cwtv.com</a></h4>' +
					'<div class="ContInfo-movieInfoSumary">' +
						'<p>:summary:</p>' +
					'</div>' +
					'<h4 class="ContInfo-movieInfoVotes"><span>Votes:</span>:weight:</h4>' +
					'<h4 class="ContInfo-movieInfoStars icon-star">:rating:</h4>' +
				'</div>' +
				'<div class="ContInfo-atras icon-collapse" id="ContInfo-atras"></div>' +
			'</div>' +
		'</article>';

// shows
	$.ajax({
		url: 'http://api.tvmaze.com/shows',
		success: function(shows, textStatus, xhr){
			console.log(shows);
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

	// $(".Cont-article").live('click', function () {
	// 	alert("me hizieron click");
	// });
*/
}());