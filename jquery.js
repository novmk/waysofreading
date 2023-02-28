$(document).ready(function() {
    $('.list_item').on('touchstart touchend', function(e) {
        e.preventDefault();
        $(this).toggleClass('list_ani');
    });
});