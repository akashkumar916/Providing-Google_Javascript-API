
// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Declare a "loop" variable
var i;

// Full-width images
function s() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.flex = "0%"; 
    }
}





