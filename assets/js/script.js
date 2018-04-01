
$(document).ready(function(){
    $('.homeMenu').click(function(){
       $('.homeContent').css({'right':'0','position':'fixed','top':'0px'})
    });
    $('.button').click(function(){
        $('.homeContent').css({'right':'-295px'})
     });
});
