// light up plants and make them grow AND hovering over certain plants makes them grow 


//series of assets for plants : SMOOTH or ROUGH , sm-m-lrg , or what else 
//hover to make grow + glow .hover() 

$(document).ready(function () {
    var plant1Images = [
        "plant1.2.png",
        "plant1.3.png",
        "plant1.4.png",
        "plant1.5.png"
    ];

    var hoverInt, stop;
    var index = 0; 
    $("#plant1").hover(
        function () {
            var img = $(this);
            index = 0
            
            // changing image every 3 seconds 
            hoverInt = setInterval(function () {
                index = (index + 1) % plant1Images.length; 
                img.attr("src", plant1Images[index]);
            }, 2000);
            // stop at 15 seconds 
            stop = setTimeout(function() {
                clearInterval(hoverInt);
            }, 10000);

        },

        function () {
            clearInterval(hoverInt);
            clearTimeout(stop)
        }
    );

});



