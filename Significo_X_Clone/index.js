function loco() {
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}

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
    let testimonialsPara = document.querySelectorAll(".testimonials-para");
    testimonialsPara.forEach(textContent => {
        clutter = "";
        let words = textContent.textContent.split(" ");
        words.forEach(function(textElement) {
            if (textElement === " ") clutter += `<span>&nbsp;</span>`;
            clutter += `<span>${textElement} </span>`;
        });
        textContent.innerHTML = clutter;
    });

    gsap.set(".testimonials-para span", { opacity: 0.1});
    gsap.set(".testimonials-para span", {
        scrollTrigger: {
            trigger: ".testimonials",
            start: "top 85%",
            end: "bottom 80%",
            scrub: 1,
        },
        opacity: 1,
        stagger: .03,
        ease: Power4,
    });
}

function capsulesPageAnimation() {
    gsap.to(".capsule:nth-child(1)", {
        scrollTrigger: {
            trigger: ".capsules",
            start: "top 70%",
            end: "bottom bottom",
            scrub: 1,
        },
        y: 0,
        ease: Power4,
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

function bodyColorThemeChange() {
    let section = document.querySelectorAll(".section");
    section.forEach(function(element) {
        ScrollTrigger.create({
            trigger: element,
            start: "top 65%",
            end: "bottom 50%",
            onEnter: function() {
                document.body.setAttribute("theme", element.dataset.color);
            },
            onEnterBack: function() {
                document.body.setAttribute("theme", element.dataset.color);
            },
        })
    });
}

function significoLogoAnimation() {
    document.addEventListener("DOMContentLoaded", function() {
        let options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5
        };
    
        let observer = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    document.querySelector('.significoLogo').classList.add('animate');
                }
            });
        }, options);
    
        observer.observe(document.querySelector('.footer'));
    });
}

loco();
homePageAnimation();
realPageAnimation();
teamPageAnimation();
testimonialsPageAnimation();
capsulesPageAnimation();
footerReachedBottom();
bodyColorThemeChange();
significoLogoAnimation();
