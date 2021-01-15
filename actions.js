$( document ).ready(function() {
        $('li.element').click(function () {
                $(this).find('p').toggle();
                $(this).toggleClass('text-bold');
        });
});