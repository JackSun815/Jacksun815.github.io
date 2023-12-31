//sets up the global variables
var bool_hover = false;
function hover(){
    //flips the boolean value
    if (bool_hover == true) 
    {
        bool_hover = false;
    }
    else
    {
        bool_hover = true;
    }

    //checks the boolean value and execute different comments 
    if (!bool_hover) {
        document.getElementById("question").innerHTML = "What are the Three Rivers in Pittsburgh?";
    }
    else {
        document.getElementById("question").innerHTML = "Allegheny, Monongahela,Ohio";
        effect(this);
    }
}
//add the event listeners 
document.getElementById("question").addEventListener(
    "mouseover", hover, false
)
document.getElementById("question").addEventListener(
    "mouseout", hover, false
)

function effect(x) {
    x.style.color = 'red';
  }

