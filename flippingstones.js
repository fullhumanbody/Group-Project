const rocks = document.getElementById('rock').childNodes;

rocks.forEach(rock => {
    rock.addEventListener("click", () => {

        rock.style.opacity = "0";     // fades the rock out
        rock.style.pointerEvents = "none"; 

        
    });

});
