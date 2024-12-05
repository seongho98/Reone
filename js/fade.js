function initSplitText() {
  var splitTextLines = new SplitText(".split-lines.not-split", {type: "lines", linesClass: "single-line"});
  $('.single-line').wrapInner('<div class="single-line-inner">');
  $(splitTextLines.elements).each(function(){
     if($(this).hasClass('not-split')) {
        $(this).removeClass('not-split');
     }
  }); 
}

if(document.querySelector('.single-line')) {
  $('.single-line').each(function () {
     let triggerElement = $(this);
     let targetElement = $(this).find('.single-line-inner');
   
      let tl = gsap.timeline({
         scrollTrigger: {
           trigger: triggerElement,
           start: "0% 90%",
           end: "100% 0%",
           toggleActions: "play none none reset"
         }
      });

      tl.fromTo(targetElement, {
        yPercent: 110,
        rotate: 0.001
     },{
        yPercent: 0,
        rotate: 0.001,
        ease: "primary-ease",
        duration: durationDefault,
        stagger: staggerDefault
     }, -0.2);
  });
}


if(document.querySelector('.split-lines.animate-scroll')) {
  $('.split-lines.animate-scroll').each(function () {
     let triggerElement = $(this);
     let targetElement = $(this).find('.single-line-inner');
   
      let tl = gsap.timeline({
         scrollTrigger: {
           trigger: triggerElement,
           start: "0% 90%",
           end: "100% 0%",
           toggleActions: "play none none reset"
         }
      });

      tl.fromTo(targetElement, {
        yPercent: 110,
        rotate: 0.001
     },{
        yPercent: 0,
        rotate: 0.001,
        ease: "primary-ease",
        duration: durationDefault,
        stagger: staggerDefault
     }, -0.2);
  });
}

if(document.querySelector('.animate-scroll-group')) {
  $('.animate-scroll-group').each(function () {
     let triggerElement = $(this);
     let targetElementLines = triggerElement.find('.single-line-inner');
     let targetElementFade = triggerElement.find('.fade-in');
     let targetElementButton = triggerElement.find('.btn-animate-in .link');
   
      let tl = gsap.timeline({
         scrollTrigger: {
           trigger: triggerElement,
           start: "0% 80%",
           end: "100% 0%",
           toggleActions: "play none none reset"
         }
      });

      if(targetElementLines.length) {
        tl.fromTo(targetElementLines, {
           yPercent: 110,
           rotate: 0.001
        },{
           yPercent: 0,
           rotate: 0.001,
           ease: "primary-ease",
           duration: durationDefault,
           stagger: staggerDefault
        }, -0.2);
     }

     let fadeOffset;
     if(targetElementLines.length) {
        fadeOffset = "> -1.16";
     } else {
        fadeOffset = "0.2";
     }

     if(targetElementFade.length) {
        tl.fromTo(targetElementFade, {
           y: "2em",
           rotate: 0.001,
           autoAlpha: 0
        },{
           y: 0,
           rotate: 0.001,
           autoAlpha: 1,
           ease: "Expo.easeOut",
           duration: durationDefault,
           stagger: staggerDefault
        }, fadeOffset );
     }

     let btnOffset;
     if(targetElementLines.length) {
        btnOffset = "> -1.36"; 
     } else if(targetElementFade.length) {
        btnOffset = "> -1.36"; 
     } else {
        btnOffset = "-0";
     }

     if(targetElementButton.length) {
        tl.fromTo(targetElementButton, {
           yPercent: 110,
           rotate: 0.001,
        },{
           yPercent: 0,
           rotate: 0.001,
           ease: "primary-ease",
           duration: durationDefault,
           stagger: staggerDefault
        }, btnOffset);
     }
  });
}