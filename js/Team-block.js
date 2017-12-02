$(document).ready(function(){
	$('.team-block ul li img').hover(function(){
		$(this).css({
			'opacity':'0.7',
			'transition':'all 1s ease',
			'cursor':'pointer',
		});
	},function(){
		$(this).css({
			'opacity':'1.0',
			'transition':'all 1s ease',
			'cursor':'pointer',
		});
	})
})