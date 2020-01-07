//video

$("#video").vide({
    mp4: "./video/video-bg",
    poster: "./video/video-bg.jpg",
    // poster: path / to / poster
}, {
    volume: 1,
    playbackRate: 1,
    muted: true,
    loop: true,
    autoplay: true,
    posterType: 'detect', // Poster image type. "detect" — auto-detection; "none" — no poster; "jpg", "png", "gif",... - extensions.
    resizing: true, // Auto-resizing, read: https://github.com/VodkaBears/Vide#resizing
    bgColor: 'transparent',

});

//tabs

$(function () {

    $(".card-header").on("click", function () {
        $(this).toggleClass('card-active');
    })
})

// $(function F() {
//     var faqs__title = ($(".faqs__title"));
//     var card__header = ($(".card-header"));

//     for (let i = 0; i < card__header.length; i++) {
//         if (faqs__title.hasClass("collapsed")) {
//             card__header.removeClass('card-active');
//             console.log($(card__header));
//         }
//     }

// })


// slider

$('.testimonials__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: false,
    autoplaySpeed: 4000,
    // responsive: [{
    //         breakpoint: 1200,
    //         settings: {
    //             slidesToShow: 2,
    //             arrows: false,
    //         }
    //     },
    //     {
    //         breakpoint: 992,
    //         settings: {
    //             slidesToShow: 2,
    //             arrows: true,
    //         }
    //     },
    //     {
    //         breakpoint: 836,
    //         settings: {
    //             slidesToShow: 2,
    //             arrows: false,
    //         }
    //     },
    //     {
    //         breakpoint: 768,
    //         settings: {
    //             slidesToShow: 1,
    //             arrows: true,
    //         }
    //     },
    //     {
    //         breakpoint: 670,
    //         settings: {
    //             slidesToShow: 1,
    //             arrows: false,

    //         }
    //     },

    // ]
});