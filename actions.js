$( document ).ready(function() {
        $('article.element').click(function () {
                
                if($(this).hasClass('show-text')) {
                        $('article.element').removeClass('show-text');
                        $(this).removeClass('show-text');
                } else {
                        $('article.element').removeClass('show-text');
                        $(this).addClass('show-text');
                }
                
                // $('article.element .question-text').hide();
                

        });
});