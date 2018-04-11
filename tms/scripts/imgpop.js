$(function () {
    "use strict";

    $(".popup").click(function () {
        var $src = $(this).attr("src");
        $(".show").fadeIn(500);
        $(".img-show img").attr("src", $src);
    });

    $("span, .overlay").click(function () {
        $(".show").fadeOut();
    });

});
