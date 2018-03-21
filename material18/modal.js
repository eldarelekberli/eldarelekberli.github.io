//IIFE
(function () {
    
    $(document).ready(function() {

   //Global Variables
        var globaliFrame,  //iframe element
            globalWindowWidth, //width of window
            globalWindowHeight, // height of window
            globalWidthVideoContainer, //width of video popup container element
            globalHeightVideoContainer, //height of video popup container element
            modalWindowFocus,
            modalWindowOn,
            lastFocusEle;
        
        modalWindowFocus =document.querySelector('#modal-window-container .close-btn');

    //function to check for touch device or not. Return true if touch device
        function checkTouchDevice() {
             return typeof window.ontouchstart !== 'undefined';
        }

    //function to set the height & width of pop up window on resizing the browser
        function iframeDimensionResize() {
            globaliFrame = document.getElementById('video-iFrame'); 
            globalWindowWidth = $(window).width();
            globalWindowHeight = $(window).height();
            
            globalWidthVideoContainer = globalWindowWidth*(0.5);
            globalHeightVideoContainer =  globalWidthVideoContainer * (9/16);
            $('.video-container').css('left', "25%");
            $('.video-container').css('top', "20%");
            $('.close-btn-container').css('left', "73%");
            $('.close-btn-container').css('top', "17%");

            //breakpoint-1
                if(globalWindowWidth < 767) {

                    if (window.matchMedia("(orientation: landscape)").matches) {
                        //globalWidthVideoContainer = globalWindowWidth*(0.7);
                        //globalHeightVideoContainer = globalWidthVideoContainer * (9/16);

                        $('.video-container').css('top','20%' );
                        $('.video-container').css('left', "14%");
                        $('.close-btn-container').css('top','12%' );
                        $('.close-btn-container').css('left','78%' );
                    }
                    else if (window.matchMedia("(orientation: portrait)").matches) {

                        //globalWidthVideoContainer = globalWindowWidth*(0.7);
                        //globalHeightVideoContainer = globalWidthVideoContainer * (9/16);
                        $('video-container').css('left', "15%");
                        $('video-container').css('top', "28%");
                        $('close-btn-container').css('left', "75%");
                        $('close-btn-container').css('top', "24%");
                    }
                }

            //breakpoint-2
                else if(globalWindowWidth < 1083){
                    
                    
                   
                }

            //breakpoint-3
                else {
                     
                    

                    
                }

            $('#modal-window-container .video-container').css('width', globalWidthVideoContainer);
            $('#modal-window-container .video-container').css('height', globalHeightVideoContainer);

            $('#modal-window-container .video-container').find('iframe').width('100%');
            $('#modal-window-container .video-container').find('iframe').height('100%');

        }
    // END - function resizeIFrameToFitContent()

    //whenever browser window size change, automatically adjust video size
    $(window).on('resize', function(){
        iframeDimensionResize();
    });


        
    //Video popup/Modal Window 
        function modalWindow() {
            modalWindowOn = true;
            var self = $(this);
            lastFocusEle = document.activeElement;
            modalWindowFocus.setAttribute('tabindex', '0');
            setTimeout(function () {
                modalWindowFocus.focus();
            }, 100);
            
            
            
            //$(this).off('click')
            
            var videoId = $(self).attr('data-src');
            var iframeSrc = "https://www.youtube.com/embed/"+videoId + "&autoplay=1&cc_load_policy=1";
            $('<iframe />');
            $('<iframe>', {
                src: iframeSrc,
                id:  'video-iFrame',
                frameborder: 0,
                allowfullscreen: ''

            }).appendTo('.video-container');
            
            iframeDimensionResize();
            $('body').css('background-color', '#555');
            $('#video').css('background-color', '#555');
            $('#pdf').css('background-color', '#555')   ;         
            $('.sekil').css('background-color', '#555')  ;          
            $('.grid').css('opacity', '.2');
            $('#modal-window-container').fadeIn(1000);

             return false;
        }
        
    //Video popup/Modal Window close button
        function modalWindowClose() {
            modalWindowOn = false;
            $('#modal-window-container .video-container').find('iframe').remove();
            $('#modal-window-container').hide();
            $('body').css('background-color', '');
            $('#video').css('background-color', '');
            $('#pdf').css('background-color', '');
            $('#sekil').css('background-color', '');
            $('.grid').css('opacity', '1');
            lastFocusEle.focus();
        }
        
        $('.video-link').on('click', modalWindow); 
        $('.close-btn').on('click', modalWindowClose);
        
        
        function modalCloseEsc ( e ) {
          if ( !e.keyCode || e.keyCode === 27 ) {
                modalWindowClose();
          }  
        }
        
         function stopTabbing(e) {
            if(modalWindowOn) {
                
               var keycode1 = (e.keyCode ? e.keyCode : e.which);
                if (keycode1 == 0 || keycode1 == 9) {
                    e.preventDefault();
                    e.stopPropagation();
                }
             
            } 
            
            
        }

        document.addEventListener('keydown', modalCloseEsc);
        //document.addEventListener('keydown', stopTabbing);
        
       
        var inputs = $("#modal-window-container").find('select, input, textarea, button, a').filter(':visible');
        var firstInput = $("#modal-window-container").find('button');
        var lastInput = $("#modal-window-container").find('a');
console.log(lastInput);
        /*set focus on first input*/
        firstInput.focus();

        /*redirect last tab to first input*/
        lastInput.on('keydown', function (e) {
           if ((e.which === 9 && !e.shiftKey)) {
               e.preventDefault();
               firstInput.focus();
           }
        });

        /*redirect first shift+tab to last input*/
        firstInput.on('keydown', function (e) {
            if ((e.which === 9 && e.shiftKey)) {
                e.preventDefault();
                lastInput.focus();
            }
        });
        
            
  });        
    
})();

