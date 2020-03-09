
$(document).ready(function()
{
    var elem = $(".phone"); 
    elem.click(function(e) {
        if (!$(e.target).hasClass("call-me__active") && e.target.id !== "cancel-widget") {
            if (!$(this).html()) {
                $(this).addClass("call-me__active");
                $(this).append( '<div id="call-section"><div><div id="cancel-widget"></div></div> \
                                <form> \
                                    <p>Передзвонимо Вам найближчим часом</p> \
                                    <input type="text" placeholder="Ваш номер телефону"></input> \
                                    <input type="submit" value="Чекаю дзвінка"></input> \
                                </form></div>');
                $("#call-section").hide();
                $(".call-me__active").bind('transitionend', function() {
                    $("#call-section").fadeIn(150);        
                });
            }
        }
    });
    
    elem.on('click', '#cancel-widget', function() {
        elem.removeClass('call-me__active');  
        elem.empty();
    });
    
});
