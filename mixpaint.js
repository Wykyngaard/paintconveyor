c = machine.order();
machine conveyor();

// put if action on seperate line for readability 
// for large if/else if structures like this a  `switch` statement usually reads a little better - 
// depending on how the language has implemented it. https://www.w3schools.com/js/js_switch.asp 
// use else if where possible 

if (c == "blue") {
    blue.spray();
} else if (c == "yellow") {
    yellow.spray();
} else if (c == "red") {
    red.spray();
} else if (c == "green") {
    blue.spray() + yellow.spray();
} else if (c == "orange") {
    yellow.spray() + red.spray();
} else if (c == "purple") {
    blue.spray() + red.spray();
} else if (c == "brown") {
    blue.spray() + yellow.spray() + red.spray();
} else if (c == "white"); 

// this line doesn't work

machine.conveyor();


