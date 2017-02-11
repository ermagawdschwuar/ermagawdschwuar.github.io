$(document).ready(function () {
    $('.drawer').drawer();
});

$("[data-fancybox]").fancybox({
    // Options will go here

});

$(document).ready(function () {
    // get the value of the bottom of the #main element by adding the offset of that element plus its height, set it as a variable
    var mainbottom = $('#home').offset().top + $('#home').height();

    // on scroll, 
    $(window).on('scroll', function () {

        // we round here to reduce a little workload
        var stop = Math.round($(window).scrollTop());

        if (stop > mainbottom) {
            $('#homenavigate').addClass('past-main');
        } else {
            $('#homenavigate').removeClass('past-main');
        }

    });
});
