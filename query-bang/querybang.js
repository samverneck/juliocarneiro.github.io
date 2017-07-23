/*!
 * queryBang 1.0
 * http://github.com/juliocarneiro/query-bang
 *
 * Copyright 2016, Júlio Carneiro
 * Released under the MIT, BSD, and GPL Licenses.
 *
 */

(function(){
	$.fn.queryBang = function (hashe){
		$(this).click(function(){
			hashe = hashe
			.toLowerCase()
			.replace(' ','-');
			document.location.hash = hashe;
		});
	}
	$.fn.textBang = function (){
		$(this).click(function(){
			document.location.hash = $(this)
			.text()
			.toLowerCase()
			.replace(' ','-')
			.replace(',','-')
			.replace('.','')
		});
	}
})(jQuery);