$(document).ready( function(){

    // pinBox

    $(".pinBox").pinBox({
		//default 0px
		Top : '0', // 100px al agregar el menu fixed
		//default '.container' 
		Container : '#asignaturasSelector',
		//default 20 
		ZIndex : 200,
		//default '767px' if you disable pinBox in mobile or tablet
		MinWidth : 0, //'767px'
		//events if scrolled or window resized 
    });

});