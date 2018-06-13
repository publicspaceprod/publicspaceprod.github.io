$(document).ready(function () {
/*
    // grab an element
    var myElement = document.getElementById("navbar");
    // construct an instance of Headroom, passing the element
    var headroom = new Headroom(myElement, {
        "offset": 205,
        "tolerance": 5,
        "classes": {
          "initial": "animated",
          "pinned": "slideDown",
          "unpinned": "slideUp"
        }
    });
    // initialise
    headroom.init();
*/
    var preloader = document.getElementById('preloader');
    var logoanim = document.getElementById('splash__logo');
    // preloader
    $(window).on('load', function(){
        if (window.location.href === 'http://127.0.0.1:4000/') {
            $(preloader).css('display', 'none');
            document.getElementById('splash__logo').addEventListener('ended',videoEnd,false);
        } else {
            console.log('false');
            $(preloader).delay(400).fadeOut(500);
        }
    });

    var videoEnd = function(e) {
        console.log('what');
        $(logoanim).delay(400).fadeOut(700);
    };

    $('.modal').each(function(){
        var src = $(this).find('iframe').attr('src');

        $(this).on('click', function(){
            $(this).find('iframe').attr('src', '');
            $(this).find('iframe').attr('src', src);
        });
    });
}); 

