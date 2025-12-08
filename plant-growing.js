// light up plants and make them grow AND hovering over certain plants makes them grow 


$(document).ready(function () {

    var plantImages = [
        "plant1_2.png",
        "plant1_3.png",
        "plant1_4.png",
        "plant1_5.png"
    ];

    plantImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });

    $(".plant-pos img").each(function () {

        let hoverInt = null;
        let stopTimer = null;
        let index = 0;

        $(this).hover(
            function () {
                const img = $(this);
                clearInterval(hoverInt);
                clearTimeout(stopTimer);
                index = 0;

                hoverInt = setInterval(() => {
                    index = (index + 1) % plantImages.length;
                    img.attr("src", plantImages[index]);
                }, 2000);

                stopTimer = setTimeout(() => {
                    clearInterval(hoverInt);
                }, 10000);
            },

            function () {
                clearInterval(hoverInt);
                clearTimeout(stopTimer);
            }
        );

    });

});
