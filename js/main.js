$(document).ready(function() {
    $(".banner__link").click(function() {
        var elementClick = $(this).attr("href"); // записали в elementClick значение атрибута href

        var destination = $(elementClick).offset().top; // пункт назначения - верх элемента elementClick

        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination // плавный скроллинг к destination
        }, 800);
        return false;
    });

    $(".reg").click(function() {
        var elementClick = $(this).attr("reg"); // записали в elementClick значение атрибута href

        var destination = $(elementClick).offset().top; // пункт назначения - верх элемента elementClick

        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination // плавный скроллинг к destination
        }, 800);
        return false;
    });
});