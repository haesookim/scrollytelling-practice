$(document).ready(function(){
    $(window).scroll(function () {
        var cur = $(window).scrollTop()
        $(".view").each(function (index) {
            var pos = $(this).position().top
            var height = $(this).height()
            if (pos <= cur && cur < pos + height) {
                var color = getColor(colors[index], colors[(index + 1) % colors.length],
                    (cur - pos) / height)
                $("body").css('background-color', color);
            }
        })
        // Make scroll cycle.
        /*var doc_h = $(document).height() - window.innerHeight;
        if (cur == 0) {
            $(window).scrollTop(doc_h - 10)
        }
        if (cur == doc_h) {
            $(window).scrollTop(10)
        }*/
    });

    $(window).on('beforeunload', function () {
        $("html,body").scrollTop(window.innerHeight * 4);
    });
    // Initial
    $("html,body").scrollTop(window.innerHeight * 1);
});