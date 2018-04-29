(function($) {
    var duration = 2500;
    var current = 1;
    var tricker = $(".tricker");
    var height = tricker.height();
    var number = tricker.children().length;
    var first = tricker.children().first();

    setInterval(function() {
        var interv = current * -1 * height;
        first.css("margin-top", interv + "px");
        if (current == number) {
            first.css("margin-top", "0px");
            current = 1;
        } else {
            current++;
        }
    }, duration);
})(jQuery);