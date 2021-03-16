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


(function($) {
    "use strict";

    // Select2
    $('.select2').each(function() {
        let options = {}

        if ($(this).data('placeholder')) {
            options.placeholder = $(this).data('placeholder')
        }

        if ($(this).data('hide-search')) {
            options.minimumResultsForSearch = -1
        }

        $(this).select2(options)
    })
})($)



