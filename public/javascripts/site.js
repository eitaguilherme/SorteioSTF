(function ($) {
    
    var ministros = [
        {
            "Nome": "Gilmar Mendes",
            "Img": "gm.jpg"
        },
        {
            "Nome": "Alexandre Moraes",
            "Img": "am.jpg"
        },
        {
            "Nome": "Carmem Lucia",
            "Img": "cl.jpg"
        },
        {
            "Nome": "Edson Fachin",
            "Img": "ef.jpg"
        },
        {
            "Nome": "Lewandowski ",
            "Img": "lewanda.jpg"
        },
        {
            "Nome": "Luiz Fux",
            "Img": "lf.jpg"
        },
        {
            "Nome": "Celso Mello",
            "Img": "cm.jpg"
        },
        {
            "Nome": "Marco Aurelio",
            "Img": "ma.jpg"
        },
        {
            "Nome": "Rosa Weber",
            "Img": "rw.jpg"
        },
        {
            "Nome": "Toffoli",
            "Img": "t.jpg"
        }
    ];

    $.each(ministros, function (item, value) {
        $(".list-group").append("<a href='#' class='list-group-item'>" + value.Nome + "</a>");
    });

    $("button").on('click', function (e) {
        $(this).attr("disabled", "disabled");
        $("a").removeClass("active");

        var index = 0;
        var round = 1;
        var ticks = eval(100);

        var rdnTurns = Math.floor((Math.random() * 4) + 1);
        var rdnChoosen = Math.floor((Math.random() * ministros.length - 1) + 1);
        if(rdnChoosen == 0)
            rdnChoosen = 1;

        var interval = setInterval(function () {
            $("a").removeClass("active");
            $("a:eq(" + index + ")").toggleClass('active');

            console.log('round ' + round);
            console.log('rdnTurns ' + rdnTurns);
            console.log('index ' + index);
            console.log('rdnChoosen ' + rdnChoosen);

            if (round == rdnTurns && index == (rdnChoosen - 1)) {
                clearInterval(interval);
                if ($("a:eq(" + index + ")").text() != "Alexandre Moraes") {
                    $("a:contains('Gilmar Mendes')").text($("a:eq(" + index + ")").text());
                    $("a:eq(" + index + ")").text("Gilmar Mendes");
                }
                $("button").removeAttr("disabled");

            }

            index++;
            if (index > (ministros.length - 1))
                round++;

            if (index > ($("a").length - 1))
                index = 0;

        }, ticks);

        e.preventDefault;
    });

    $(document).keypress(function (e) {
        if (e.which == 13) {
            if (!$('button').is(':disabled'))
                $('button').click();
        }
    });
})(jQuery);