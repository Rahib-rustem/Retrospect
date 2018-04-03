
$(document).ready(function(){
    $('.homeMenu').click(function(){
       $('.homeContent').css({'right':'0','position':'fixed','top':'0px','z-index':'99999'})
    });
    $('.button').click(function(){
        $('.homeContent').css({'right':'-295px'})
     });
});
