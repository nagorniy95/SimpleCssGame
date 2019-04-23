$(window).on('load', function () {
    var $preloader = $('#p_pre');
    $preloader.delay(1500).fadeOut('slow');
});

function start_again(){
    location.reload();
}