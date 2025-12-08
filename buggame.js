let bugsZapped = 0;
let maxZaps = 30;
let spawnInterval;  // store interval so we can stop spawning bugs

window.onload = function () {

  function createBug() {
    const bug = document.createElement("div");
    bug.className = "bug";         
    document.body.appendChild(bug);

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

      bug.style.left = posX + "px";
      bug.style.top = posY + "px";

      const lamp = document.getElementById("lampWrapper");

      
      // zap counter
   
   if (isColliding(bug, lamp)) {
  bug.remove();

  bugsZapped++;
  document.getElementById("counter").textContent = "Bugs caught: " + bugsZapped;

  if (bugsZapped >= maxZaps) {
    endGame();
  }

        return;
      }

      requestAnimationFrame(moveBug);
    }

    moveBug();
  }

  function isColliding(a, b) {
    const r1 = a.getBoundingClientRect();
    const r2 = b.getBoundingClientRect();

    return !(r1.right < r2.left ||
             r1.left > r2.right ||
             r1.bottom < r2.top ||
             r1.top > r2.bottom);
  }

  // spawn 5 bugs at the start
  for (let i = 0; i < 5; i++) {
    createBug();
  }

  // spawn bugs continuously
  spawnInterval = setInterval(createBug, 1000);

};



// the lamp code
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



