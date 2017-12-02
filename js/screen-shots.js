
function moveBlock1(){
	$('.screenshots-block .block-screen1 img').hover(function(){
		$(this).css({
			'transform':'scale(0.9)',
			'opacity':'0.8',
			'transition':'all 1s ease',
		});
	},function(){
		$(this).css({
			'transform':'scale(1.0)',
			'opacity':'1',
			'transition':'all 1s ease',
		});
	})
}

function moveBlock2(){
	$('.screenshots-block .block-screen2 img').hover(function(){
		$(this).css({
			'transform':'scale(0.9)',
			'opacity':'0.8',
			'transition':'all 1s ease',
		});
	},function(){
		$(this).css({
			'transform':'scale(1.0)',
			'opacity':'1',
			'transition':'all 1s ease',
		});
	})
}

function moveBlock3(){
	$('.screenshots-block .block-screen3 img').hover(function(){
		$(this).css({
			'transform':'scale(0.9)',
			'opacity':'0.8',
			'transition':'all 1s ease',
		});
	},function(){
		$(this).css({
			'transform':'scale(1.0)',
			'opacity':'1',
			'transition':'all 1s ease',
		});
	})
}

$(document).ready(function(){
	moveBlock1();
	moveBlock2();
	moveBlock3();
})