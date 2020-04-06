import './vendor';

$(document).ready(function () {
	$('.slick-slider-1').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		nav: false,
		centerMode: false,
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
					slidesToScroll: 1,
					dots: true
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

// show more
$(document).ready(function () {
	var min = 100;
	$(".ta").each(function (indx, el) {
		var b = $(el),
			max = el.scrollHeight,
			a = b.next(".read-next");
		if (max <= 100) a.hide();
		else a.on("click", function (event) {
			var h = b.height();
			b.height(h < max ? max : min);
			$(this).text(h < max ? "свернуть" : "показать полностью");
			return false
		})
	})
	var dots = document.querySelectorAll('.slick-slider-3 .slick-dots button');
	// сворачивает блок при клике на дот
	$(dots).on('click', function () {
		$('.ta').css('height', '100px');
		$('.read-next').html('показать полностью');
	})
	// сворачивает блок при слайде
	$('.slick-slider-3').on('afterChange', function (event, click, currentSlide, nextSlide) {
		$('.ta').css('height', '100px');
		$('.read-next').html('показать полностью');
	})
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
$('.direction__item').on('click', function () {
	$('.direction__top').addClass.toggle('active')
})