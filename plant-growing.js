// light up plants and make them grow ONLY when lamp overlaps them

$(document).ready(function () {

    // assests
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

    // ----- TRACK EACH PLANT'S TIMERS -----
    $(".plant-pos img").each(function () {
        this.growInterval = null;
        this.stopTimer = null;
        this.frameIndex = 0;
        this.isGrowing = false;  
    });


    //overlap?
    function isOverlapping($a, $b) {
        const a = $a[0].getBoundingClientRect();
        const b = $b[0].getBoundingClientRect();

        return !(
            a.right < b.left ||
            a.left > b.right ||
            a.bottom < b.top ||
            a.top > b.bottom
        );
    }

    // Check overlap repeatedly
    setInterval(() => {
        const lamp = $("#lampWrapper");

        $(".plant-pos img").each(function () {

            const img = $(this);
            const overlapping = isOverlapping(img, lamp);

            if (overlapping && !this.isGrowing) {
                // START GROWING
                this.isGrowing = true;
                this.frameIndex = 0;

                clearInterval(this.growInterval);
                clearTimeout(this.stopTimer);

                this.growInterval = setInterval(() => {
                    this.frameIndex = (this.frameIndex + 1) % plantImages.length;
                    img.attr("src", plantImages[this.frameIndex]);
                }, 2000);

                this.stopTimer = setTimeout(() => {
                    clearInterval(this.growInterval);
                }, 10000);
            }

            if (!overlapping && this.isGrowing) {
                // STOP GROWING IMMEDIATELY
                this.isGrowing = false;
                clearInterval(this.growInterval);
                clearTimeout(this.stopTimer);
            }

        });
    }, 200); 

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

