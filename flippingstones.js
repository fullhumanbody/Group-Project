const rocks = document.querySelectorAll(".rock");

rocks.forEach(rock => {
    rock.addEventListener("click", () => {

        rock.style.opacity = "0";     // fades the rock out
        rock.style.pointerEvents = "none"; 

        
    });

});

