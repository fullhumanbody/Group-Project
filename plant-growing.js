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

$(function() {
    let isDragging = false;
    let offsetX, offsetY;

    $("#lampWrapper").on("mousedown", function(e) {
        isDragging = true;
        offsetX = e.clientX - $(this).position().left;
        offsetY = e.clientY - $(this).position().top;
        $(this).css("cursor", "grabbing");
    });

    $(document).on("mousemove", function(e) {
        if (isDragging) {
            $("#lampWrapper").css({
                left: e.clientX - offsetX,
                top: e.clientY - offsetY
            });
        }
    });

    $(document).on("mouseup", function() {
        isDragging = false;
        $("#lampWrapper").css("cursor", "grab");
    });
});
