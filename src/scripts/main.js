var $ = require('jquery');
	
	var $Header = $('#Header'),
		$Menu = $('#Menu'),
		$inicio = $('#inicio'),
		$home = $('#home'),
		$creditos = $('#creditos'),
		$menuClick = $('#menuClick'),
		$Headerbuscar = $("#Header-buscar"),
		$abrirBuscar = $("#abrirBuscar"),
		$from = $("#from"),
		$Leer = $("#leer"),
		$Cont = $("#Cont"),
		$ingresar = $("#ingresar"),
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

	$ingresar.on('click', entrar);
	$home.on('click', entrar); 

	function entrar(){
		$Cont.find(".Cont-inicio").addClass("U-borderEntrar");
		$Header.removeClass("U-z-index")
		$Cont.find(".Cont-contCreditos").removeClass("U-topCero");
			setTimeout(
					function() {
						$Header.removeClass("U-creditos");
						$Cont.find(".Cont-inicioHeader").addClass("U-displayNone");
						$Headerbuscar.removeClass("U-visibility");
						$Cont.find(".Cont-inicioInfo").fadeOut();
						$Cont.find(".Cont-inicio").addClass("U-widhtCero");
						$Cont.find(".Cont-inicioLogo").addClass("U-logo");
					}, 300);
	}

	$inicio.on('click', inicio);
	
	function inicio(){
		$Cont.find(".Cont-inicioInfo").fadeIn();
		$Cont.find(".Cont-inicio").removeClass("U-widhtCero");
		$Cont.find(".Cont-inicioLogo").removeClass("U-logo");
		$Cont.find(".Cont-contCreditos").removeClass("U-topCero");		
		$Header.removeClass("U-z-index");
			setTimeout(
					function () {
						$Header.removeClass("U-creditos");
						$Headerbuscar.removeClass("U-visibility");
						$Cont.find(".Cont-inicio").removeClass("U-borderEntrar");
						$Cont.find(".Cont-inicioHeader").removeClass("U-displayNone");	
					},300);
	}

	$Cont.find(".Header-iconMenu").on('click',mensaje)
	
	function mensaje() {
		alert("ingresa primero y conoce nuestros servicios");
	}

	$creditos.on('click', creditos);
	
	function creditos(){
		$Header.addClass("U-creditos");
		$Headerbuscar.addClass("U-visibility");
		$Cont.find(".Cont-inicio").removeClass("U-widhtCero");
		$Cont.find(".Cont-inicioLogo").addClass("U-logo2");
		setTimeout(
			function(){
				$Cont.find(".Cont-inicio").removeClass("U-borderEntrar");
				$Cont.find(".Cont-contCreditos").addClass("U-topCero");
			},300);
	}

	$Leer.on('click', leerArticle);

	function leerArticle(event){
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

}());