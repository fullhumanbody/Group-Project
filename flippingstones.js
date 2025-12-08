const rocks = document.getElementById('rock').children;

for (let i = 0; i < rocks.length; i++) {
    const rock = rocks[i]
    rock.addEventListener("click", () => {
        rock.style.opacity = "0";
        rock.style.pointerEvents = "none";
    });

    rock.addEventListener("transitionend", () => {
        const style = getComputedStyle(rock);
        if (style.zIndex > 0) {
            message.textContent ="YOU WIN! The door is Unlocked!";
            message.style.color = "gold";
            enableKeyDragging();
        }
    });
    
}
// ----------------------
// Key dragging behavior
// ----------------------
    let offsetX = 0;
    let offsetY = 0;

    function enableKeyDragging() {
        key.addEventListener("mousedown", startDrag);
}

    function startDrag(e) {
        document.addEventListener("mousemove", drag);
        document.addEventListener("mouseup", stopDrag);

   
    offsetX = e.offsetX;
    offsetY = e.offsetY;
}

    function drag(e) {
        key.style.left = (e.pageX - offsetX) + "px";
        key.style.top = (e.pageY - offsetY) + "px";

    checkUnlock();
}

    function stopDrag() {
        document.removeEventListener("mousemove", drag);
        document.removeEventListener("mouseup", stopDrag);
}


// ----------------------
// Door unlock logic
// ----------------------
    function checkUnlock() {
        const keyRect = key.getBoundingClientRect();
        const doorRect = door.getBoundingClientRect();

        const overlap =
            keyRect.left < doorRect.right &&
            keyRect.right > doorRect.left &&
            keyRect.top < doorRect.bottom &&
            keyRect.bottom > doorRect.top;

    if (overlap) {
        unlockDoor();
    }
}


    function unlockDoor() {
        
       
        
        
        gameEnded = true;


}

$(function () {
  let isDragging = false;
  let offsetX, offsetY;

  $("#lampWrapper").on("mousedown", function (e) {
    isDragging = true;
    offsetX = e.clientX - $(this).position().left;
    offsetY = e.clientY - $(this).position().top;
    $(this).css("cursor", "grabbing");
  });

  $(document).on("mousemove", function (e) {
    if (isDragging) {
      $("#lampWrapper").css({
        left: e.clientX - offsetX,
        top: e.clientY - offsetY
      });
    }
  });

  $(document).on("mouseup", function () {
    isDragging = false;
    $("#lampWrapper").css("cursor", "grab");
  });
});
