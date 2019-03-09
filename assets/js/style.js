// Write your Custom Js

$(function () {
    $("ul li.all").click(function () {
        $("div.men").fadeIn(2000);
        $("div.women").fadeIn(2000);
//                    $("div.php").fadeIn(1000);

    });
    $("ul li.men").click(function () {
        $("div.men").fadeIn(1000);
        $("div.women").fadeOut(1000);
//                    $("div.php").fadeOut(100);

    });
    $("ul li.women").click(function () {
        $("div.men").fadeOut(1000);
        $("div.women").fadeIn(1000);
    });
});