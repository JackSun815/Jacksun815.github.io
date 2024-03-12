//Set up the global variables and set the time to change every 3 seconds
var text = ["Happy birthday", 
"joyeux anniversaire", 
"Alles Gute zum Geburtstag",
"It's your birthday",
"Cool Dude"];

var color =[    
"red",
"green",
"blue",
"yellow",
"pink"]

var counter = 0;
var counterR = 0;
var col = document.getElementById("birthday-cont");
var elem = document.getElementById("birthday-box");
var inst = setInterval(change, 3000);
var instance = setInverval(changeCol, 3000);

//function changes the text asscociated 
function change() {
elem.innerHTML = text[counter];
counter++;
if (counter >= text.length) {
    counter = 0;
}
}
//function changes the color associated 
function changeCol() {
col.style.background = color[counterR];
counterR++;
if (counterR >= color.length) {
    counterR = 0;
}
}