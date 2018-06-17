$(document).ready(function () {
    var preloader = document.getElementById('preloader');
    var logoanim = document.getElementById('splash__logo');
    // preloader
    $(window).on('load', function(){
        if (window.location.href === 'http://127.0.0.1:4000/' || window.location.href === 'https://publicspaceprod.github.io/' || window.location.href === 'https://publicspaceproductions.com/') {
            $(preloader).css('display', 'none');
            document.getElementById('splash__logo').addEventListener('ended',videoEnd,false);
        } else {
            $(preloader).delay(400).fadeOut(500);
        }
    });

    var videoEnd = function(e) {
        $(logoanim).delay(400).fadeOut(700);
    };

    $(logoanim).click(function () {
        $(logoanim).fadeOut(700, "linear");
        document.getElementById('splash__logo').pause();
    });

    $('.modal').each(function(){
        var src = $(this).find('iframe').attr('src');

        $(this).on('click', function(){
            $(this).find('iframe').attr('src', '');
            $(this).find('iframe').attr('src', src);
        });
    });
}); 

