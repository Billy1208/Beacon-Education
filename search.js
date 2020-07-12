var sliderSelector = '.swiper-container',
    options = {
        init: false,
        loop: false,
        speed:1000,
        slidesPerView: 'auto', // or 'auto'
        // spaceBetween: 10,
        centeredSlides : true,
        initialSlide : 1,
        effect: 'coverflow', // 'cube', 'fade', 'coverflow',
        coverflowEffect: {
            rotate: 0, // Slide rotate in degrees
            stretch: 0, // Stretch space between slides (in px)
            depth: 300, // Depth offset in px (slides translate in Z axis)
            modifier: 3, // Effect multipler

        },
        grabCursor: true,
        parallax: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            1180: {
                slidesPerView: 2
            },
            1023: {
                slidesPerView: 1,
                spaceBetween: 0
            }
        },
        // Events
        on: {
            imagesReady: function(){
                this.el.classList.remove('loading');
            }
        }
    };
var mySwiper = new Swiper(sliderSelector, options);

// Initialize slider
mySwiper.init();

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}