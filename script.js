$(document).ready(function() {
    $('.input-txt').on('focus', function() {
        var $container = $('.container');
        var $this = $(this);
        var nPosition = $this.data('pos');
        $container.attr('data-position', nPosition);
    });
   
    $('.input-txt').on('invalid', function() {
        $('.container').addClass('error');
    });
    
    $('.input-txt').on('blur', function() {
        $('.container').removeClass('error');
    });
});

Version 2 of 5
