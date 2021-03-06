AOS.init();

$('.owl-carousel-basic').owlCarousel({
    loop:false,
    margin:30,
    nav:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
})

$('.pd-slider').owlCarousel({
    loop:false,
    margin:30,
    nav:true,
    dots:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        500:{
            items:2,
            nav:true
        },
        768:{
            items:3,
            nav:false
        },
        1200:{
            items:4,
            nav:true,
            loop:false
        }
    }
})

$('.owl-carousel-testimonials').owlCarousel({
    loop:false,
    margin:30,
    nav:true,
    dots:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        }
    }
})

$('.single-item-owl').owlCarousel({
    loop:false,
    margin:30,
    nav:true,
    dots:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        }
    }
})
