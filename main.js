$(function(){
    $('.j3').click(
        function(){
            var $answer = $(this).find('.j5');
            if($answer.hasClass('open')){
                $answer.removeClass('open');
                $answer.slideUp();
            }else{
                $answer.addClass('open');
                $answer.slideDown();
            }
    });
    
});
