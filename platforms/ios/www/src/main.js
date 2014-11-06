/* globals define */
define(['jquery', 'snap.svg'], function(require, exports, module) {
    'use strict';

    $('#login form').on('submit', function (e) {

        var animlength = 500;
        e.preventDefault();

        var svg = $('<svg id="loginSvg">'),
            loadicon = $('<div class="load-icon">');

        $('body').append(svg);
        $('body').append(loadicon);

        var fadeOut = function (animlength) {
            var s = Snap("#loginSvg"),
                x = svg.width(),
                y = svg.height(),
                radius = Math.round(Math.sqrt(Math.pow(x,2) + Math.pow(y, 2)) / 2);

            var loader = s.circle(x/2,  y/2, 1);

            loader.attr({
                fill: "#fff",
                stroke: '#f00',
                strokeWidth: 0
            });

            console.log(radius);

            loader.animate({r: radius}, animlength, mina.easeout, function () {
                $('#login').hide();
            });

            setTimeout(function() {loadicon.addClass('opaque')}, animlength / 2);



            return loader;
        };


        var fadeIn = function (circle, animlength) {
            $('#card').show();
            $('body').addClass('theme2');
            circle.animate({r: 1}, animlength, mina.bounce, function () {
                svg.remove();
                loadicon.remove();
            });
            loadicon.removeClass('opaque');
        };

        var circle = fadeOut(animlength);

        setTimeout(function(){fadeIn(circle, animlength)}, 5000);
    });


    $('#card a').on('click', function(e){
        e.preventDefault();
        console.log(location.href);
        location.reload();
    });
});