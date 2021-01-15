$( document ).ready(function() {
        $('div.element').click(function () {
                
                if($(this).hasClass('show-text')) {
                        $('div.element').removeClass('show-text');
                        $(this).removeClass('show-text');
                } else {
                        $('div.element').removeClass('show-text');
                        $(this).addClass('show-text');
                }
                
                // $('div.element .question-text').hide();
                

        });
});