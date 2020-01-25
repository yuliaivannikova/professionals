//video

$("#video").vide({
    mp4: "./video/video-bg",
    poster: "./video/video-bg.jpg",
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




// slider

$('.testimonials__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: false,
    autoplaySpeed: 4000,
    arrows: false,

});


//map

var GM = {
    init: function () {
        this.initCache();
        this.initMap();

    },

    initCache: function () {
        this.$body = $('body');
        this.$popupContent = $('.js-marker-content');

    },

    initMap: function () {
        var coordinates = {
                lat: 40.681497,
                lng: -73.924589

            },
            coordinatesMarker = {
                lat: 40.681497,
                lng: -73.924589
            }
        popupContent = this.$popupContent.html(),
            markerImage = './img/marker.png',
            zoom = 11;


        map = new google.maps.Map(document.getElementById('map'), {
                center: coordinates,
                zoom: zoom,
                disableDefaultUI: true,
                scrollwheel: false
            }),
            marker = new google.maps.Marker({
                position: coordinatesMarker,
                map: map,
                icon: markerImage
            });

        var styles = [{
                "elementType": "geometry",
                "stylers": [{
                    "color": "#333333"
                }]
            },
            {
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#757575"
                }]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#212121"
                }]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#757575"
                }]
            },
            {
                "featureType": "administrative.country",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            },
            {
                "featureType": "administrative.land_parcel",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#bdbdbd"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#757575"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#181818"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#616161"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#1b1b1b"
                }]
            },
            {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#2A2A2A"
                }]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#2A2A2A"
                }]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#2A2A2A"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#2A2A2A"
                }]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#2A2A2A"
                }]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#2A2A2A"
                }]
            },
            {
                "featureType": "transit",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#2A2A2A"
                }]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#000000"
                }]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#3d3d3d"
                }]
            }
        ]

        map.setOptions({
            styles: styles
        });

    }

};

$(document).ready(function () {
    GM.init();
});

// scroll

$(function () {
    var scrollIcon = $(".footer__scroll-wrapper");
    scrollIcon.on('click', function () {
        let top = 0;
        console.log(scrollIcon);
        $("html, body").animate({
            scrollTop: 60
        }, 2000)
    });

});

//nav

$(function () {
    var navLink = $('li a');
    navLink.on('click', function (event) {
        event.preventDefault();
        var target = $(this).attr('href');
        var top = $(target).offset().top;
        $('html,body').animate({
            scrollTop: top
        }, 2000)
    });
});



$(function () {
    $('.navbar-toggler').on('click', function () {
        var navList = $('.nav');
        var link = ($(".navbar > .show").parent());

        if (link) {
            navList.toggleClass('nav-active')
            console.log(navList);

        }

        var m = $('.navbar-collapse');
        m.addClass('collapsing')

    });


})