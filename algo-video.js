'use strict';

(function ($) {

    var methods;
    methods = {
        init: function () {
            var $this = $(this);
            /* Add play button for video block */
            $this.append('<a href="javascript:void(0);" class="algo-video-play-btn"></a>');

            /* Check autoplay video blocking on the page */
            var promise = document.querySelector('video').play();
            if (promise !== undefined) {
                promise.then(function () {
                    /* Check for autoplay param in current video */
                    var cVideo = $this.find('video').get(0);
                    if (cVideo.autoplay === false) {
                        /* if not auto play - show play button */
                        $('.algo-video-play-btn').fadeIn();
                    } else {
                        cVideo.play()
                    }
                }).catch(function () {
                    /* If autoplay is blocked -> show play button */
                    $('.algo-video-play-btn').fadeIn();
                });
            }

            $this.on('click', function () {
                var $this = $(this);
                var video = $this.find('video').get(0);
                var playBtn = $this.find('.algo-video-play-btn');
                if (video.paused) {
                    /* Pause all video on the page */
                    $.each($("video"), function (i, v) {
                        v.pause();
                        $(this).parent().find('.algo-video-play-btn').fadeIn();
                    });
                    /* Play current video and hide play button */
                    var promise = video.play();
                    if (promise !== undefined) {
                        promise.then(function (e) {
                            playBtn.fadeOut();
                        }).catch(function (error) {
                            console.log(error)
                        });
                    }
                } else {
                    /* Pause current video and show play button */
                    video.pause();
                    playBtn.fadeIn();
                }
            });

        }
    };

    $.fn.algoVideo = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Undefined method: ' + method);
        }
    };

})(jQuery);
$(document).ready(function(){
    $('.algo-video-container').algoVideo();
});