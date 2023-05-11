$(function(){
    sw=0;
    $('.btn').click(function(){
        if(sw==0){
            $('.line').addClass('on');
            sw=1;
        }else{
            $('.line').removeClass('on')
            sw=0;
        }
    });
});

