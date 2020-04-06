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
	$('.show-text').on('click', function () {
		if ($(this).prev().is(':visible')) {
			$(this).text('показать полностью');
			$(this).prev().hide('slow');
		} else {
			$(this).text('скрыть').css('display', 'block');
			$(this).prev().show('slow');
		}
	})
});

$('.slick-slider-3').on('afterChange', function (event, click, currentSlide, nextSlide) {
	if ($('.show-text').prev().is(':visible')) {
		$('.show-text').text('показать полностью');
		$('.show-text').prev().hide('slow');
	}
})


$(document).ready(function () {
	if ($('.activities__title p').height() > 100) {
		$('.activities__title a').addClass('show-text');
		console.log('высота p больше 100');
	} else {
		console.log('высота p меньшье 100');
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

//fancybox
// $(document).ready(function () {
// 	$("[data-fancybox]").fancybox({

// 	});
// });

// услуги
$(document).ready(function () {
	$('.direction__item').on('click', function () {
		$('.direction__top').addClass.toggle('active')
	})
})

// popup & overlay
$(document).ready(function () {
	$('#write-to-me').on('click', function () {
		$('body').addClass('overlay');
		$('.popup').addClass('active');
	})
	if ($('body').hasClass('overlay')) {
		$('body').on('click', function () {
			$('.popup').removeClass('active');
			$('body').removeClass('overlay');
		})
	}
})