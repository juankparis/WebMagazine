var $ = require('jquery');

	var $Menu = $('#Menu'),
		$menuClick = $('#menuClick'),
		$Headerbuscar = $("#Header-buscar");

(function(){
	
	$menuClick.on('click', menuAbrir);

	function menuAbrir(){
		$Menu.toggleClass("U-toggleMenu");
	}

}());