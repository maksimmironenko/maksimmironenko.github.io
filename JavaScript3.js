/*global jQuery*/
/*jslint browser */
/*jslint devel */

jQuery(function ($) {
    $(document).ready(function () {
        $(".slider").slick({
            arrows: true,
            dots: true,
            responsive: [
                {
                    breakpoint: 560,
                    settings: {
                        arrows: true,
                        dots: true,
                        slidesToScroll: 1,
                        slidesToShow: 2
                    }
                }
            ],
            slidesToScroll: 1,
            slidesToShow: 4
        });
    });
});
