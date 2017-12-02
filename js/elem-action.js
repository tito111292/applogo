$(document).ready(function(){
	$('.block-function').each(function(){
		$(this).hover(function(){
			$(this).find('.hex').css({
				'transform':'rotate(360deg)',
				'transition':'all 3s ease',
			});
		},function(){
			$(this).find('.hex').css({
				'transform':'rotate(-360deg)',
				'transition':'all 3s ease',
			});
		})
	})
})