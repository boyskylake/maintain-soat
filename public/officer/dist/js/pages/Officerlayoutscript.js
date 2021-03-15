(function($) {
    "use strict";

    $('body').on('click', function(event) {
        let dropdown = $(event.target).closest('.dropdown')
        console.log(dropdown,'hi')
        if (!$(dropdown).length || ($(event.target).closest('.dropdown-toggle').length && $(dropdown).find('.dropdown-box').first().hasClass('show'))) {
            $('.dropdown-box').removeClass('show')
        } else {
            $('.dropdown-box').removeClass('show')
            $(dropdown).find('.dropdown-box').first().addClass('show')
        }
    })
})($)
