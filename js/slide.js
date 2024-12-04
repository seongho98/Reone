
/*
const openBtns1 = Array.from(document.getElementsByClassName('open-on-hover1'));
openBtns1.forEach((button)=>{
  button.addEventListener('mouseenter',(e)=>{
    const list = button.getElementsByClassName('open-on-hover-list')[0];
    gsap.fromTo(list,{y:-0,autoAlpha:0},{y:0,autoAlpha:1});
  });
  button.addEventListener('mouseleave',(e)=>{
    const list = button.getElementsByClassName('open-on-hover-list')[0];
    gsap.fromTo(list,{y:0,autoAlpha:1},{y:-0,autoAlpha:0});
  });
});
*/
$(document).on("mousemove", function (e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
});
$(".re04_container").on("mouseenter", function () {
  slide_lr02.addClass("active");
});
$(".re04_container").on("mouseleave", function () {
  slide_lr02.removeClass("active");
});
var slide_lr02 = $(".cursor_slide_lr02");
var posX = 0,
	posY = 0;
var mouseX = 0,
	mouseY = 0;
TweenMax.to({}, 0.016, {
	repeat: -1,
	onRepeat: function () {
	posX += (mouseX - posX) / 2;
	posY += (mouseY - posY) / 2;

		TweenMax.set(slide_lr02, {
			css: {
			left: posX - 55,
			top: posY - 35
			}
		});
	}
}); //tweenmax

$(function(){
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".rection01",
            start: 'top top',
            end: "200%",
            scrub: 1,
        }
    });
    tl.to('.rection01 .cont-text', {x:"-30%"});
	
	//rection03 swiper ss -----

	const re03_sw_mcont = new Swiper('.re03_sw_mcont', { 
		slidesPerView: 1, 
		speed: 2000,
		loop: true,
		effect: 'fade', 

		autoplay: {
			delay: 3000,
			disableOnInteraction: false, 
		},
	});



	const sliderThumbs = new Swiper('.swiper-container.testimonial', { 
		direction: 'vertical',
		slidesPerView: 1, 
		loop: false, 
		speed: 1000,
		effect: 'fade', 
		fadeEffect: {
			crossFade: true 
		},
		mousewheel: true, 
		/*breakpoints: { 
			0: { 
				direction: 'horizontal', 
			},
			768: {
				direction: 'vertical', 
			}
		},*/
		on: {
			slideChange: function() {
				sliderImages.slideTo(this.activeIndex); 
				setTimeout(() => {
					sliderThumbs.params.touchReleaseOnEdges = false;  
					sliderThumbs.params.mousewheel.releaseOnEdges = false;
				});
			},
			reachEnd: function() {
				setTimeout(() => {
					sliderThumbs.params.touchReleaseOnEdges = true;
					sliderThumbs.params.mousewheel.releaseOnEdges = true;
				}, 500);
			},
			reachBeginning: function() {
				setTimeout(() => {
					sliderThumbs.params.touchReleaseOnEdges = true;
					sliderThumbs.params.mousewheel.releaseOnEdges = true;
				}, 500);
			}
		}
	});

	const sliderImages = new Swiper('.gallery-thumbs', { 
		direction: 'vertical', 
		slidesPerView: 'auto', 
		speed: 1000,
		centeredSlides: true,
		mousewheel: true, 
		loop: false, 
		thumbs: { 
			swiper: sliderThumbs 
		},
		/*breakpoints: {
			0: { 
				direction: 'horizontal',
			},
			768: {
				direction: 'vertical', 
			}
		},*/
		on: {
			slideChange: function() {
				sliderThumbs.slideTo(this.activeIndex); 
				setTimeout(() => {
					sliderImages.params.touchReleaseOnEdges = false;  
					sliderImages.params.mousewheel.releaseOnEdges = false;
				});
			},
			reachEnd: function() {
				setTimeout(() => {
					sliderImages.params.touchReleaseOnEdges = true;
					sliderImages.params.mousewheel.releaseOnEdges = true;
				}, 500);
			},
			reachBeginning: function() {
				setTimeout(() => {
					sliderImages.params.touchReleaseOnEdges = true;
					sliderImages.params.mousewheel.releaseOnEdges = true;
				}, 500);
			}
		}
	});

	let isScrollAllowed = false;

	function handleMouseWheel(event, swiper, oppositeSwiper) {
		const { isEnd, isBeginning } = swiper;

		if (isScrollAllowed) {
			return; 
		}

		if (event.deltaY < 0 && !isBeginning) {
			event.preventDefault();
			event.stopPropagation();
			swiper.slidePrev();
			oppositeSwiper.slidePrev();
		} else if (event.deltaY > 0 && !isEnd) {
			event.preventDefault();
			event.stopPropagation();
			swiper.slideNext();
			oppositeSwiper.slideNext();
		}

		if (event.deltaY > 0 && isEnd) {
			isScrollAllowed = true; 
		}
	}
	sliderThumbs.el.addEventListener('wheel', function(event) {
		handleMouseWheel(event, sliderThumbs, sliderImages);
	});

	sliderImages.el.addEventListener('wheel', function(event) {
		handleMouseWheel(event, sliderImages, sliderThumbs);
	});

	window.addEventListener('scroll', function() {
		const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
		const windowHeight = window.innerHeight;
		const threshold = windowHeight * 0.5; 

		if (currentScroll <= threshold) {
			isScrollAllowed = false; 
			sliderThumbs.slideTo(0, 0); 
			sliderImages.slideTo(0, 0); 
			setTimeout(() => {
				sliderThumbs.params.touchReleaseOnEdges = false;  
				sliderThumbs.params.mousewheel.releaseOnEdges = false;
				sliderImages.params.touchReleaseOnEdges = false;  
				sliderImages.params.mousewheel.releaseOnEdges = false;
			}, 0);
		} else if (currentScroll > threshold) {
			isScrollAllowed = true; 
		}
	});

	window.addEventListener('resize', function() {
		sliderThumbs.update(); 
		sliderImages.update(); 
	});


	//rection03 swiper ee ----

	//re04_container
	const multiplier = {
		translate: .1,
		//rotate: .01
	}
	var re04_container = new Swiper('.swiper-container.re04_container', {
		speed: 700,
		//spaceBetween: 10,
		slidesPerView:'auto',
		loop:true,
		//autoplay: {
			//delay: 1000,
		//	disableOnInteraction: false,
		//},
		mousewheelControl: true,
		centeredSlides: true,
        slidesPerGroup: 1,
        loopFillGroupWithBlank: true,
        //mousewheel: true,
	});
	function calculateWheel() {
		const slides = document.querySelectorAll('.re04_slide')
		slides.forEach((slide, i) => {
			const rect = slide.getBoundingClientRect()
			const r = window.innerWidth * .5 - (rect.x + rect.width * .5)
			let ty = Math.abs(r) * multiplier.translate - rect.width * multiplier.translate
			if (ty < 0) {
				ty = 0
			}
			const transformOrigin = r < 0 ? 'left top' : 'right top'
			slide.style.transform = `translate(0, ${ty}px)`
			slide.style.transformOrigin = transformOrigin
		})
	}
	function raf() {
		requestAnimationFrame(raf)
		calculateWheel()
	}
	raf();

	var autoplayStart = () => {
	  re04_container.params.autoplay.delay = 300; // 호버할때
	  re04_container.autoplay.start();
	};

	var autoplayStop = () => {
	  re04_container.params.autoplay.delay = 100000; // 호버안할때
	  re04_container.autoplay.stop();
	  re04_container.autoplay.start(); // 변경된 딜레이 시간으로 재시작
	};

	re04_container.el.addEventListener('mouseenter', autoplayStart);
	re04_container.el.addEventListener('mouseleave', autoplayStop);

});

$(document).ready(function() {
	var $waveElement = $('.ani_delay');
	var $target = $('#rection00');

	$(window).on('scroll', function() {
		var windowHeight = $(window).height();
		var scrollTop = $(window).scrollTop();
		var elementOffset = $target.offset().top - 800;  
		var elementHeight = $target.outerHeight();

		if (scrollTop + windowHeight > elementOffset + elementHeight / 2) {
			if (!$waveElement.hasClass('animate')) { 
				$waveElement.addClass('animate');
			}
		} else {
			if ($waveElement.hasClass('animate')) {
				$waveElement.removeClass('animate');
			}
		}
	});
});
$(document).ready(function() {
    const firstHoverCont = $(".re05_conho ul li .hover_cont").first();
    const firstHoverContWidth = firstHoverCont.outerWidth();
    const firstHoverContHeight = firstHoverCont.outerHeight();
    const windowWidth = $(window).width();
    const windowHeight = $(window).height();

    $("[class^='hover_content']").each(function(index) {
        const hoverCont = $(this).find(".re05_conho ul li .hover_cont");
        const cursor = $(".re05_conho ul li .hover_cont").eq(index);
        const cursorWidth = cursor.outerWidth();
        const cursorHeight = cursor.outerHeight();
		$(this).mouseenter(function() {
			//$(".re05_conho ul li").first().removeClass("on");
			gsap.fromTo(hoverCont,{x:-25,autoAlpha:0,duration:0.7},{x:0,autoAlpha:1,duration:0.7});
			gsap.fromTo(cursor,{x:-25,autoAlpha:0,duration:0.7},{x:0,autoAlpha:1,duration:0.7});
		});
		$(this).mouseleave(function() {
			gsap.fromTo(hoverCont,{x:25,autoAlpha:1,duration:0.7},{x:0,autoAlpha:0,duration:0.7});
			gsap.fromTo(cursor,{x:25,autoAlpha:1,duration:0.7},{x:0,autoAlpha:0,duration:0.7});
		});
    });
});


