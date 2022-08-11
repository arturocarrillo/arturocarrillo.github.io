$(document).ready(function() {

    var textRead = $('.text-read');
    var sizeFont = textRead.css('font-size');


    $("#font-up").click(function() {
        var sizeFontText = textRead.css('font-size');
        var numText = parseFloat(sizeFontText, 10);
        var sizeFontPlus = numText * 1.1;
        textRead.css('font-size', sizeFontPlus);
        return false;
    });

    $("#font-down").click(function() {
        var sizeFontText = textRead.css('font-size');
        var numText = parseFloat(sizeFontText, 10);
        var sizeFontPlus = numText * 0.9;
        textRead.css('font-size', sizeFontPlus);
        return false;
    });

    $("#font-reset").click(function() {
        textRead.css('font-size', textRead);
    });

});