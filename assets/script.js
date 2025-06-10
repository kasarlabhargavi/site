
$(document).ready(function() {
    $('.slider').slick({
        autoplay: true, // Enable autoplay
        autoplaySpeed: 2000, // Delay between slides
        infinite: true, // Infinite looping
        speed: 2000, // Transition speed
        slidesToShow: 1, // Number of slides to show at once
        slidesToScroll: 1, // Number of slides to scroll at once
        responsive: [ // Responsive settings
            {
                breakpoint: 768, // For tablets and mobile devices
                settings: {
                    slidesToShow: 1, // Show 1 slide
                    slidesToScroll: 1, // Scroll 1 slide
                    autoplaySpeed: 1500 // Faster autoplay speed for mobile
                }
            },
            {
                breakpoint: 480, // For very small screens
                settings: {
                    slidesToShow: 1, // Ensure 1 slide is shown
                    slidesToScroll: 1, // Scroll 1 slide
                    autoplaySpeed: 1000 // Even faster autoplay speed
                }
            }
        ]
    });
});

$(document).ready(function(){
    $('.all_costmers_review').slick({
        dots: true,       
        infinite: true,   
        speed: 500,      
        slidesToShow: 1,  
        slidesToScroll: 1, 
        arrows: false,
        responsive: [
            {
                breakpoint: 768, // Adjust this value for your needs
                settings: {
                    slidesToShow: 1, // Number of slides to show on mobile
                    slidesToScroll: 1,
                    dots: true, // Show dots on mobile
                }
            },
            {
                breakpoint: 480, // For very small screens
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                }
            }
        ]
    });
});


    $(document).ready(function() {
        const $topbar = $('.topbar-wrapper');
        let lastScrollY = $(window).scrollTop();
        
        $(window).on('scroll', function() {
            let currentScrollY = $(this).scrollTop();
            
            if (currentScrollY > lastScrollY) {
                // Scrolling down
                $topbar.addClass('hidden'); // Hide the top bar
            } else {
                // Scrolling up
                $topbar.removeClass('hidden'); // Show the top bar
            }  
            lastScrollY = currentScrollY;
        });
    });
    