var $ = require('jquery');
	
	var $Menu = $('#Menu'),
		$menuClick = $('#menuClick'),
		$Headerbuscar = $("#Header-buscar");
		$abrirBuscar = $("#abrirBuscar");
		$from = $("#from");

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

}());