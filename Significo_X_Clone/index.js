function homePageAnimation() {
    gsap.set(".slidesm", {scale: 5})

    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".home",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,

        }
    });

    tl.to('.vdodiv', {
        '--clip': "0%",
        ease: 'power2',
    }, 'sync');
    tl.to('.slidesm', {
        scale: 1,
        ease: 'power2',
    }, 'sync');


    tl.to('.lft', {
        xPercent: -10,
        stargger: 0.3,
        ease: 'power4',
    }, 'sync1');;
    tl.to('.rgt', {
        xPercent: 10,
        stargger: 0.3,
        ease: 'power4',
    }, 'sync1');
}

function realPageAnimation() {
    gsap.to(".slide", {
        scrollTrigger: {
            trigger: ".real",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
        },
        xPercent: -200,
        ease: Power2,
    });    
}

function teamPageAnimation() {
    let listitem = document.querySelectorAll(".listitem");
    listitem.forEach(function(item) {
        item.addEventListener("mousemove", function(details) {
            let positionX = gsap.utils.mapRange(0, window.innerWidth, -200, 200, details.clientX);
            gsap.to(this.querySelector(".picture"), {
                x: positionX,
                opacity: 1,
                ease: Power4,
                duration: 0.5
            });
        });
        item.addEventListener("mouseleave", function(details) {
            gsap.to(this.querySelector(".picture"), {
                opacity: 0,
                ease: Power4,
                duration: 0.5
            });
        })
    });
}

function testimonialsPageAnimation() {
    var clutter = "";
    let testimonials = document.querySelector(".testimonials");
    testimonials.textContent.split(" ").forEach(function(textElement) {
        if (textElement === " ") clutter += `<span>&nbsp;</span>`;
        clutter += `<span>${textElement}</span>`;
        
    });
}

function footerReachedBottom(){
  // Function to prevent default scrolling behavior
  function preventScroll(e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }
  
  // Function to toggle scroll functionality
  function toggleScroll(enable) {
    if (enable) {
      window.removeEventListener('wheel', preventScroll, { passive: false });
      window.removeEventListener('touchmove', preventScroll, { passive: false });
    } else {
      window.addEventListener('wheel', preventScroll, { passive: false });
      window.addEventListener('touchmove', preventScroll, { passive: false });
    }
  }
  
  // Function to check if the footer is in the viewport
  function isFooterInView() {
    const footer = document.querySelector('.footer');
    const rect = footer.getBoundingClientRect();
    return rect.top < window.innerHeight;
  }
  
  window.addEventListener('scroll', () => {
    // Footer is in view, disable scrolling else enable scroling
    isFooterInView() ? toggleScroll(false) : toggleScroll(true);
  });
}

homePageAnimation();
realPageAnimation();
teamPageAnimation();
testimonialsPageAnimation();