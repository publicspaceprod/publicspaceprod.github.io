$(document).ready(function () {

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

    var preloader = document.getElementById('preloader');
    preloader.style.opacity='0';
    preloader.style.zIndex='-5';

    $('.modal').each(function(){
        var src = $(this).find('iframe').attr('src');

        $(this).on('click', function(){
            $(this).find('iframe').attr('src', '');
            $(this).find('iframe').attr('src', src);
        });
    });
}); 

/*
window.onload = function() {
    var preloader = document.getElementById('preloader');
    var splashVideo = document.getElementById('bgvid');
    var nav = document.getElementById('navbar');

    nav.style.opacity = '0';

    preloader.style.opacity= '0';
    preloader.style.zIndex= '-5';

    nav.style.opacity = '1';

};


var animation = bodymovin.loadAnimation({
    container: document.getElementById('anim'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/assets/PS_CLOUDS.json'
});  */
