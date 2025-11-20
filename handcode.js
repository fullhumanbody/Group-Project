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

