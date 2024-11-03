function locomotive() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },

        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}
locomotive()

function loader() {
    var tl = gsap.timeline()

    tl.from('.loader h3', {
        x: '5vw',
        opacity: 0,
        stagger: 0.4
    })

    tl.to('.loader h3', {
        opacity: 0,
        stagger: 0.1
    })

    tl.to('.loader', {
        autoAlpha: 0,
        duration: 0.9
    })
}

loader()

function mousefollower() {
    var circle = document.querySelector('.page1 #circle');
    var page1 = document.querySelector('.page1');
    page1.addEventListener('mouseenter', function () {
        circle.style.scale = 1
    })
    page1.addEventListener('mousemove', function (dets) {
        circle.style.left = (dets.x - 50) + 'px';
        circle.style.top = (dets.y - 50) + 'px';
    });
    page1.addEventListener('mouseleave', function () {
        circle.style.scale = 0
    })
}

mousefollower();

function page2() {
    gsap.from('.page2 .text h2', {
        y: 120,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
            trigger: '.page2',
            scroller: '.main',
            start: 'top 70%',
            end: 'top 60%',
            scrub: 2
        }
    })
}

page2()

function page3() {
    gsap.from('.page3 .elem h1', {
        y: 120,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
            trigger: '.page3',
            scroller: '.main',
            start: 'top 70%',
            end: 'top 60%',
            scrub: 2
        }
    })
}

page3()

function page4() {
    gsap.from('.page4 .elem h2', {
        y: 120,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
            trigger: '.page4',
            scroller: '.main',
            start: 'top 70%',
            end: 'top 75%',
            // markers : true,
            scrub: 2
        }
    })

    var cursor = document.querySelector('.page4 #circle');
    var target = document.querySelector('.page4 .seats');

    target.addEventListener('mousemove', function (dets) {
        const rect = target.getBoundingClientRect();
        const x = dets.clientX - rect.left - 50;
        const y = dets.clientY - rect.top - 50;

        gsap.to(cursor, {
            x: x,
            y: y,
            // duration: 1 ,
            // ease: "power3.out",
        });
    });
    target.addEventListener('mouseenter', function () {
        cursor.style.opacity = 1
    })
    target.addEventListener('mouseleave', function () {
        cursor.style.opacity = 0
    })
}

page4()

function svg() {
    gsap.to('.page4 .number', {
        y: '57vh',
        // duration : 2,
        scrollTrigger: {
            scroller: '.main',
            trigger: '.page4 .seats',
            start: 'top 70%',
            end: 'top 25%',
            // markers: true,
            scrub: 2
        }
    })
    gsap.to('.page4 svg', {
        rotate: '240deg',
        scrollTrigger: {
            scroller: '.main',
            trigger: '.page4 .seats',
            start: 'top 80%',
            end: 'top 25%',
            // markers: true,
            scrub: 2
        }
    })
}

svg()

function page5() {
    gsap.from('.page5 h2', {
        y: 120,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
            trigger: '.page5',
            scroller: '.main',
            start: 'top 70%',
            end: 'top 60%',
            scrub: 2
        }
    })
}

page5()

function swiper() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 5,
            disableOnInteraction: false,
        },
        speed: 20000,
    })
}

swiper()

function textBreak() {
    var rejouice = document.querySelector('footer h1').textContent
    var text = rejouice.split('')
    var clutter = ""
    // console.log(text);
    text.forEach(letter => {
        clutter += `<span>${letter}</span>`
    })
    document.querySelector('footer h1').innerHTML = clutter
}

textBreak()

function footer() {
    var tl = gsap.timeline({
        scrollTrigger: {
            scroller: '.main',
            trigger: 'footer',
            start: 'top 70%',
            end: 'top 30%',
            scrub: 2,
            // markers: true
        }
    }
    )
    tl.from('footer .upper', {
        y: '-20vh',
        duration: 2,
    })
    tl.from('.rejouice h1 span', {
        y: -250,
    stagger: 0.1,
    duration: 1,
    })

}

footer()

