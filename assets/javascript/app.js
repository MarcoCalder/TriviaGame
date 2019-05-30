
var count = 3
// display the count
$("#time-remaining").html(count)
// after 1 sec
setInterval(decrementCount, 1000);
// decrease by 1
// display count
function decrementCount() {
    // decrease by 1
    // display count
    count = count - 1
    $("#time-remaining").html(count)
}


 //  Variable that will hold our ?interval ID? when we execute
    //  the "run" function

