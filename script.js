$(document).ready(function() {
    $('div.container').hide().fadeIn(250);
    
    $('a').click(function(event) {
        event.preventDefault();
        newLocation = this.href;
        $('div.container').fadeOut(250, newpage);
    });

    function newpage() {
        window.location = newLocation;
    }

});
