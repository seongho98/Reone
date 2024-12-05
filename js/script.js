// aura-wrap 스크롤 이동
const tl = gsap.timeline({
  scrollTrigger: {
      trigger: ".aura",
      start: 'top top',
      end: "200%",
      scrub: 1,
  }
});
tl.to('.aura-wrap', {x:"-30%"});

// aura 선 애니메이션
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

// nav-btn 클릭이벤트
$('.nav-right .nav-btn').click(function() {
  $('.nav-btn').toggleClass('open')
  $('.nav-left').toggleClass('open')
  $('nav').toggleClass('open')
  $('.main-visual-wrap').toggleClass('open')
 });

// nav-btn 클릭이벤트
 $('.nav-right .nav-btn').click(function() {
  $('.nav-btn').toggleClass('open')
  if ($('.nav-btn').hasClass('open')) {
    // open 클래스가 있으면 open 제거, on 추가
    $('.nav-btn').removeClass('open').addClass('on');
  } else if ($('.nav-btn').hasClass('on')) {
    // on 클래스가 있으면 on 제거, open 추가
    $('.nav-btn').removeClass('on').addClass('open');
  } else {
    // 두 클래스가 없을 때 기본적으로 open 추가
    $('.nav-btn').addClass('open');
  }
});

// nav-btn 클릭이벤트
$('.nav-right .nav-btn').click(function() {
  $('nav').toggleClass('open')
  if ($('nav').hasClass('open')) {
    // open 클래스가 있으면 open 제거, on 추가
    $('nav').removeClass('open').addClass('on');
  } else if ($('nav').hasClass('on')) {
    // on 클래스가 있으면 on 제거, open 추가
    $('nav').removeClass('on').addClass('open');
  } else {
    // 두 클래스가 없을 때 기본적으로 open 추가
    $('nav').addClass('open');
  }
});


// nav select hover
$('.nav-wrap .select').hover(function() {
  $('.s1').toggleClass('active')
  $('.s2').toggleClass('active')
 });

 $('.solution-tit').hover(function() {
  $('.solution ul').toggleClass('active')
 });

// 좌측 이미지 회전
function scrollRotate() {
  let image = document.querySelector(".scroll-bg");
  image.style.transform = "rotate(" + window.pageYOffset/15 + "deg)";

}
window.addEventListener('scroll',scrollRotate);

// 우측 퀵메뉴
$(window).on("scroll", function() {
  // 화면 너비가 991px 이상인 경우에만 실행
  if ($(window).width() > 991) {
      if ($(window).scrollTop() > 50) {
          $(".quick-bottom").addClass("active");
          $(".quick").addClass("active");
      } else {
          $(".quick-bottom").removeClass("active");
          $(".quick").removeClass("active");
      }
  }
});

$('.quick').click(function() {
  $('.quick-btn').toggleClass('rotate')
  $('.circle').toggleClass('rotate')
  $('.quick-top').toggleClass('rotate')
  $('.quick-round').toggleClass('rotate')
 });

 $('.quick').click(function() {
  $('.quick-btn').toggleClass('rotate')
  if ($('.quick-btn').hasClass('rotate')) {
    // open 클래스가 있으면 open 제거, on 추가
    $('.quick-btn').removeClass('rotate').addClass('active');
  } else if ($('.quick-btn').hasClass('active')) {
    // on 클래스가 있으면 on 제거, open 추가
    $('.quick-btn').removeClass('active').addClass('rotate');
  } else {
    // 두 클래스가 없을 때 기본적으로 open 추가
    $('.quick-btn').addClass('rotate');
  }
});


// top버튼
$(".quick .quick-bottom").on('click', function(){
  $('body, html').animate({ scrollTop: 0 }, 300 );
  return false;
});

$(".fix-scroll .fix-top a").on('click', function(){
  $('body, html').animate({ scrollTop: 0 }, 300 );
  return false;
});




// 좌측스크롤 javascript
function setScrollValue() {
  var percent = window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
  var cellsToFill = Math.round(percent * 13);

  //document.querySelector('.progress-num').innerText = Math.round(percent * 100) + '%';

  var cells = document.querySelectorAll('.line');
  
  cells.forEach(function(cell, index) {
      if (index < cellsToFill) {
          cell.classList.add('active');
      } else {
          cell.classList.remove('active');
      }
  });
}
window.addEventListener('scroll', setScrollValue, false);


// 좌측 스크롤 jqeury
// function setScrollValue() {
//   var percent = $(window).scrollTop() / ($(document).height() - $(window).height());
//   var cellsToFill = Math.round(percent * 13);

//   // $('.progress-num').text(Math.round(percent * 100) + '%'); // 주석 해제 시 사용 가능

//   $('.line').each(function(index) {
//     if (index < cellsToFill) {
//       $(this).addClass('active');
//     } else {
//       $(this).removeClass('active');
//     }
//   });
// }

// $(window).on('scroll', setScrollValue);



