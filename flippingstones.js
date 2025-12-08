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
