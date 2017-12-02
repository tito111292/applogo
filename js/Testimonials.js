
function click1(){
	$('.testimonials-block ul li:eq(1)').click(function(){
		$('.testimonials-block .testimonials-sector .name-author1').hide(700);
		$('.testimonials-block .testimonials-sector .about-author1').hide(700);
		$('.testimonials-block .testimonials-sector .testimonials-text1').hide(700);
		$('.testimonials-block .testimonials-sector .img-testimonials1').hide(700);
		
		$('.testimonials-block .testimonials-sector .name-author3').hide(700);
		$('.testimonials-block .testimonials-sector .about-author3').hide(700);
		$('.testimonials-block .testimonials-sector .testimonials-text3').hide(700);
		$('.testimonials-block .testimonials-sector .img-testimonials3').hide(700);
		
		$('.testimonials-block .testimonials-sector .name-author2').show(700);
		$('.testimonials-block .testimonials-sector .about-author2').show(700);
		$('.testimonials-block .testimonials-sector .testimonials-text2').show(700);
		$('.testimonials-block .testimonials-sector .img-testimonials2').show(700);
		
		if($('.testimonials-block ul li:first').hasClass('active')|$('.testimonials-block ul li:eq(2)').hasClass('active')){
			$('.testimonials-block ul li:first').removeClass('active');
			$('.testimonials-block ul li:eq(2)').removeClass('active');
			$('.testimonials-block ul li:eq(1)').addClass('active');
		}
	})
}

function click2(){
	$('.testimonials-block ul li:first').click(function(){
		$('.testimonials-block .testimonials-sector .name-author2').hide(700);
		$('.testimonials-block .testimonials-sector .about-author2').hide(700);
		$('.testimonials-block .testimonials-sector .testimonials-text2').hide(700);
		$('.testimonials-block .testimonials-sector .img-testimonials2').hide(700);
		
		$('.testimonials-block .testimonials-sector .name-author3').hide(700);
		$('.testimonials-block .testimonials-sector .about-author3').hide(700);
		$('.testimonials-block .testimonials-sector .testimonials-text3').hide(700);
		$('.testimonials-block .testimonials-sector .img-testimonials3').hide(700);
		
		$('.testimonials-block .testimonials-sector .name-author1').show(700);
		$('.testimonials-block .testimonials-sector .about-author1').show(700);
		$('.testimonials-block .testimonials-sector .testimonials-text1').show(700);
		$('.testimonials-block .testimonials-sector .img-testimonials1').show(700);
		
		if($('.testimonials-block ul li:eq(1)').hasClass('active')|$('.testimonials-block ul li:eq(2)').hasClass('active')){
			$('.testimonials-block ul li:eq(1)').removeClass('active');
			$('.testimonials-block ul li:eq(2)').removeClass('active');
			$('.testimonials-block ul li:first').addClass('active');
		}
	})
}

function click3(){
	$('.testimonials-block ul li:eq(2)').click(function(){
		$('.testimonials-block .testimonials-sector .name-author1').hide(700);
		$('.testimonials-block .testimonials-sector .about-author1').hide(700);
		$('.testimonials-block .testimonials-sector .testimonials-text1').hide(700);
		$('.testimonials-block .testimonials-sector .img-testimonials1').hide(700);
		
		$('.testimonials-block .testimonials-sector .name-author2').hide(700);
		$('.testimonials-block .testimonials-sector .about-author2').hide(700);
		$('.testimonials-block .testimonials-sector .testimonials-text2').hide(700);
		$('.testimonials-block .testimonials-sector .img-testimonials2').hide(700);
		
		$('.testimonials-block .testimonials-sector .name-author3').show(700);
		$('.testimonials-block .testimonials-sector .about-author3').show(700);
		$('.testimonials-block .testimonials-sector .testimonials-text3').show(700);
		$('.testimonials-block .testimonials-sector .img-testimonials3').show(700);
		
		if($('.testimonials-block ul li:eq(1)').hasClass('active')|$('.testimonials-block ul li:first').hasClass('active')){
			$('.testimonials-block ul li:first').removeClass('active');
			$('.testimonials-block ul li:eq(1)').removeClass('active');
			$('.testimonials-block ul li:eq(2)').addClass('active');
		}
	})
}


$(document).ready(function(){
	click1();
	click2();
	click3();
})