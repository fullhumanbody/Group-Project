window.onload = function () {
  const bug = document.getElementById('bug');
  const bodyWidth = window.innerWidth;
  const bodyHeight = window.innerHeight;

  let posX = Math.random() * (bodyWidth - 80);
  let posY = Math.random() * (bodyHeight - 80);

  let speed = 4;
  let angle = Math.random() * Math.PI * 2;
  let velX = Math.cos(angle) * speed;
  let velY = Math.sin(angle) * speed;

  function moveBug() {
    posX += velX;
    posY += velY;

    if (posX <= 0 || posX >= bodyWidth - 80) velX *= -1;
    if (posY <= 0 || posY >= bodyHeight - 80) velY *= -1;

    velX += (Math.random() - 0.5) * 0.4;
    velY += (Math.random() - 0.5) * 0.4;

    velX = Math.max(Math.min(velX, 5), -5);
    velY = Math.max(Math.min(velY, 5), -5);

    bug.style.left = posX + 'px';
    bug.style.top = posY + 'px';
    const lamp = document.getElementById('lampWrapper');

if (isColliding(bug, lamp)) {
    bug.style.display = "none";   // make bug disappear
    return;                       // stop animation
}

    requestAnimationFrame(moveBug);
  }

  
  
  moveBug();
 
  function isColliding(a, b) {
  const rect1 = a.getBoundingClientRect();
  const rect2 = b.getBoundingClientRect();

  return !(
    rect1.right < rect2.left ||
    rect1.left > rect2.right ||
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom
  );
}

};

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


