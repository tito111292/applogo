

function moveElem1(){
	$(window).scroll(function(){
		if($(this).scrollTop()>600){
			$('.feat-left ul li:first .elem-features').show(function(){
				$(this).css({
					'transition':'all 1s ease',
					'display':'block',
				})
			});
			
			$('.feat-left ul li:first .name-feat').delay(700).fadeIn(700);
			$('.feat-left ul li:first h4').delay(1500).slideDown(700);
		}
	});
}


function moveElem2(){
	$(window).scroll(function(){
		if($(this).scrollTop()>650){
			$('.feat-right ul li:first .elem-features').delay(2500).show(function(){
				$(this).css({
					'transition':'all 1s ease',
					'display':'block',
				})
			});
			
			$('.feat-right ul li:first .name-feat').delay(3500).fadeIn(700);
			$('.feat-right ul li:first h4').delay(4300).slideDown(700);
		}
	});
}



function moveElem3(){
	$(window).scroll(function(){
		if($(this).scrollTop()>650){
			$('.feat-left ul li:last .elem-features').delay(5300).show(function(){
				$(this).css({
					'transition':'all 1s ease',
					'display':'block',
				})
			});
			
			$('.feat-left ul li:last .name-feat').delay(6300).fadeIn(700);
			$('.feat-left ul li:last h4').delay(7100).slideDown(700);
		}
	});
}



function moveElem4(){
	$(window).scroll(function(){
		if($(this).scrollTop()>650){
			$('.feat-right ul li:last .elem-features').delay(8100).show(function(){
				$(this).css({
					'transition':'all 1s ease',
					'display':'block',
				})
			});
			
			$('.feat-right ul li:last .name-feat').delay(9100).fadeIn(700);
			$('.feat-right ul li:last h4').delay(9900).slideDown(700);
		}
	});
}

$(document).ready(function(){
	moveElem1();
	moveElem2();
	moveElem3();
	moveElem4();
})