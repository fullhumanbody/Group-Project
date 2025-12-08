// 
// Here's the JS for the animal-highlight game
//Dev's Note: Hi it's me Vic. I have no idea half this stuff works. I need to lay off those all nighters man I think I have a hole in my brain somewhere.
// If you ask me how it works, I will probably just stare at you blankly for like a whole minute trying to remember whether Jquery or Js were the same thing or not.
//In Memory of: Code Nation ('12 - '24)
//

function blahblu(blahblah) {
//test function to build basis of lamp over bug code
    let lampHoverBug = false;
    if (userNumber == whatNumber) {
      $("#output").html("You got it!");
    }   else {
      $("#output").html("Noooooope");
    }
};



//Schizophrenic Randmling idk might be important I genuinely forgot
//Make if hovered over any image. Set value to 1 2 or 3.
// If hover over value 1, play sound 1. If hover over value 2, play sound 2. If hover over value 3, play sound 3.
// Then set a new value that hides the bush image.
// Continue until all 3 images are hidden.
// Then display "You found all the animals!" and a button for win screen.

//Make SEPERATE if else statements for each bush. THEN a central one that checks if all are hidden.
// IF all are hidden then display win message.

//Established bushes as not found at start
var bush1Found = false;
var bush2Found = false;
var bush3Found = false;

// This Function checks if each bushes are found, if yes it prints text. 
// If ALL bushes have been found(thus the 4th if statement) it calls the win condition function.
function foundBush1() {
    //bush1Found = true;

if (bush1Found === true) {
    console.log("Bush 1 is found");
    bush1Found = true;
}
if (bush2Found === true) {
    console.log("Bush 2 is found");
    bush2Found = true;
}
if (bush3Found === true) {
    console.log("Bush 3 is found");
    bush3Found = true;
}

if (bush1Found === true && bush2Found === true && bush3Found === true) {
    console.log("You found all the animals!");
    checkWinCondition();
}

}



//Code that makes the sound effects work and the stuff will hide.
// Quick note: w3-animate-fadingAway is a class from W3Schools that makes stuff fade out. I set a timer to hide the bush after the animation plays.
var sound = document.getElementById('coyoteSound');
var coyoteBush = document.getElementById("bush2");
function playSoundCoyote() {

  if (bush2Found === false) {
    bush2Found = true;
    // Check if the sound is already playing
    if (sound.paused) {
        // Start the sound from the beginning
        sound.currentTime = 0;
        sound.play();
        coyoteBush.classList.add("w3-animate-fadingAway");
        setTimeout(() => {
          coyoteBush.style.visibility = "hidden";
          coyoteBush.classList.remove("w3-animate-fadingAway");
        }, 4800); // 10000 milliseconds = 10 seconds
    }
  }
}

var bugsound = document.getElementById('ladybugSound');
var ladybugBush = document.getElementById("bush1");
function playSoundLadybug() {

  if (bush1Found === false) {
    bush1Found = true;
    // Check if the sound is already playing
    if (bugsound.paused) {
        // Start the sound from the beginning
        bugsound.currentTime = 0;
        bugsound.play();
        ladybugBush.classList.add("w3-animate-fadingAway");
        setTimeout(() => {
          ladybugBush.style.visibility = "hidden";
          ladybugBush.classList.remove("w3-animate-fadingAway");
        }, 4800); // 10000 milliseconds = 10 seconds
    }
  }
}

var Bushsound = document.getElementById('bushSound');
var bushBush = document.getElementById("bush3");
function playSoundBush() {

  if (bush3Found === false) {
    bush3Found = true;
    // Check if the sound is already playing
    if (Bushsound.paused) {
        // Start the sound from the beginning
        Bushsound.currentTime = 0;
        Bushsound.play();
        bushBush.classList.add("w3-animate-fadingAway");
        setTimeout(() => {
          bushBush.style.visibility = "hidden";
          bushBush.classList.remove("w3-animate-fadingAway");
        }, 4800); // 10000 milliseconds = 10 seconds
    }
  }
}



function stopSound() {
    // Pause the sound
    sound.pause();
    
    // Reset the sound to the start so it's ready for the next hover
    sound.currentTime = 0;
}
// Sound effect on hover over bushes ########################################################################################


var winText = document.getElementById('winText');
function checkWinCondition() {
  if (bush1Found === true && bush2Found === true && bush3Found === true) {
      console.log("You found all the animals HURAYYY!!!!");
      // Display win message or trigger win event here
      winText.style.display = "block";
  }
}


// dont touch this code but i think its important
function update(e){
    var x = e.clientX || e.touches[0].clientX
    var y = e.clientY || e.touches[0].clientY
  
    document.documentElement.style.setProperty('--cursorX', x + 'px')
    document.documentElement.style.setProperty('--cursorY', y + 'px')
  }
  
  document.addEventListener('mousemove',update)
  document.addEventListener('touchmove',update)
