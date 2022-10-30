function ts_browserWidth() {
        return $(window).width();
    }
    /*****
     * "Back to top" button
     *****/
    if($('#ck-back-to-top').length) {
       $(window).scroll(function(){
            if(ts_browserWidth() >= 720 || $('body').hasClass('ck-back-to-top-mobile')) {
                if ($(window).scrollTop() >= 500) {
                    $('#ck-back-to-top').addClass('ckUp');
                } else {

                    $('#ck-back-to-top').removeClass('ckUp');
                }
            }
        });
    }
