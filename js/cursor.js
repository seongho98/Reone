// 호버시 마우스 커서
$(document).on("mousemove", function (e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
});
$(".spaceSwiper").on("mouseenter", function () {
  slide_lr02.addClass("active");
  console.log("spaceSwiper")
});
$(".spaceSwiper").on("mouseleave", function () {
  slide_lr02.removeClass("active");
});
var slide_lr02 = $(".space-cursor");
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