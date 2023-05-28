//animação para pagina inicial blog 


$(document).ready(function(){
    $(".blog").hover(function(){
        $(this).animate({
            opacity: '0.5'
        });
    }, function(){
        $(this).animate({
            opacity: '1'
        });
    });
});

