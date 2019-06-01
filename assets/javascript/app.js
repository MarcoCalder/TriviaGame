// create variables for user actions
var userPick;
var correctAnswer = 0;
var incorrectAnswer = 0;
var question = 0;
var count = 60
// display "Start Game" button

// display the count
$("#time-remaining").html(count)
// counter starts when button is clicked
$("#start").on("click", run);
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
    // The stop function
    function stop(){
        // Clears our "counter" interval. The interval name is passed to the clearInterval function.
            clearInterval(counter);
        }
    
        // Execute the run function.
        run()

var triviaQuestions = [{
    question: "Which artist originally wrote 'All Along the Watchtower'?",
    choices: ["Paul McCartney", "Jimi Hendrix", "Bob Dylan", "Mick Jagger"],
    validAnswer: [2]
    var question = document.createElement("button");
button.innerHTML = "Do Something";

// Trying to attach user buttons for answers here
var userPick = document.getElementsByTagName("body")[0];
body.appendChild(button);

//  Add event handler
button.addEventListener ("click", function() {
  alert("did something");
}, {
    question: "What year was the original Woodstock Festival held?",
    choices: ["1966", "1969", "1968", "1970"],
    validAnswer: [1]
    var button = document.createElement("button");
button.innerHTML = "Do Something";

//Trying to attach user buttons for answers here
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

// Add event handler
button.addEventListener ("click", function() {
  alert("did something");
}, {
    question: "Of Pink Floyd's four most popular albums, which one came out first?",
    choices: ["Animals", "Dark Side of the Moon", "The Wall", "Wish You Were Here"],
    validAnswer: [1]
    var button = document.createElement("button");
button.innerHTML = "Do Something";

// Trying to attach user buttons for answers here
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

// Add event handler
button.addEventListener ("click", function() {
  alert("did something");
}, {
    question: "Which band's guitarist was known for the windmill style stroking of the guitar?",
    choices: ["Creedence Clearwater Revival", "The Doors", "Led Zeppelin", "The Who"],
    validAnswer: [3]
    var button = document.createElement("button");
button.innerHTML = "Do Something";

// Trying to attach user buttons for answers here
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

// Add event handler
button.addEventListener ("click", function() {
  alert("did something");
}] 

// This initializes the button that starts the game 
$(".startGame").on("click", function (){
    // when the start button clicked, the div with the questions that was hidden is shown
            $('.wrapper').show();
            console.log('hello');
    
            $(this).hide();
        });
