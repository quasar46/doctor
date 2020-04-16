import './vendor';

$(document).ready(function () {
	$('.slick-slider-1').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		nav: false,
		centerMode: false,
		dots: true,
		responsive: [
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
});

$('.results__buttons .slick-next').on('click', function () {
	$('.result-slider').slick('slickNext');
})

$('.results__buttons .slick-prev').on('click', function () {
	$('.result-slider').slick('slickPrev');
})

$(document).ready(function () {
	$('.slick-slider-2').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		dots: true,
		responsive: [

			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					dots: true
				}
			}
		]
	});
});

$(document).ready(function () {
	$('.slick-slider-3').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true
				}
			}
		]
	});
});

$(document).ready(function () {
	$('.slick-slider-4').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: true,
		responsive: [
			{
				breakpoint: 955,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
});

$(document).ready(function () {
	$('.slick-slider-5').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		nav: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true
				}
			}
		]
	});
});

// accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		this.classList.toggle("active");
		var panel = this.nextElementSibling;
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	});
}



// show text
$(document).ready(function () {
	$('body').on('click', '.show-text', function () {
		if ($(this).prev().is(':visible')) {
			$(this).text('показать полностью');
			$(this).prev().slideUp();
		} else {
			$(this).text('скрыть').css('display', 'block');
			$(this).prev().slideDown();
		}
	})

	//скрывает текст при слайде
	$('.slick-slider-3').on('afterChange', function (event, click, currentSlide, nextSlide) {
		if ($('.show-text').prev().is(':visible')) {
			$('.show-text').text('показать полностью');
			// $('.show-text').prev().hide('fast');
			$('.text-hidden').css('display', 'none');
		}
	})

	if ($('.text-hidden').height() > 100) {
		$('.text-hidden').attr('hidden', '');
		$('.activities__title a').addClass('show-text');
	}
});

// anchor
$(document).ready(function () {
	$(".main-nav__list").on("click", "a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({ scrollTop: top }, 1000);
	});
});

// mobile menu
$(document).ready(function () {
	$('.burger').on('click', function () {
		$('.mobile-menu').toggleClass('active');
		$('body').css('overflow', 'hidden');
	})
	$('.mobile-menu__list a').on('click', function () {
		$('.mobile-menu').removeClass('active');
		$('body').css('overflow', 'visible');
	})
	$('.mobile-menu .close').on('click', function () {
		$('.mobile-menu').removeClass('active');
		$('body').css('overflow', 'visible');
	})
})

// // ловит элемент на котором кликнул
// document.querySelector('body').addEventListener('click', function (event) {
// 	console.log(event.target);
// })


//popup & overlay
$(document).ready(function () {
	$('#write-to-me').on('click', function () {
		$('#overlay').addClass('active');
	})
	$('#overlay').on('click', function () {
		$('#overlay').removeClass('active');
	})
	$('#overlay-review').on('click', function () {
		$('#overlay-review').removeClass('active');
		$('.review-big').removeClass('active');
		$('body').css('overflow', 'visible');
	})
})

var reviewsBig = Array.from(document.querySelectorAll('.review-mini'));
var overlayReview = document.querySelector('#overlay-review');
var body = document.querySelector('body');


reviewsBig.forEach((item, index) => {
	const reviewsMini = Array.from(document.querySelectorAll('.review-big'));
	item.onclick = () => { overlayReview.classList.add('active'); reviewsMini[index].classList.add('active'); body.style="overflow: hidden";};
})



$('.link-1').on('click', function () {
	$('.slick-slider-3').slick('slickGoTo', 3);
})
$('.link-2').on('click', function () {
	$('.slick-slider-3').slick('slickGoTo', 0);
})
$('.link-3').on('click', function () {
	$('.slick-slider-3').slick('slickGoTo', 2);
})
$('.link-4').on('click', function () {
	$('.slick-slider-3').slick('slickGoTo', 1);
})
$('.link-5').on('click', function () {
	$('.slick-slider-3').slick('slickGoTo', 5);
})
$('.link-6').on('click', function () {
	$('.slick-slider-3').slick('slickGoTo', 4);
})

