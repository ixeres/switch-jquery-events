$(function() {
// This is the most up to date syntax for putting code in your js file to ensure the document is loaded before running your js functions.
// Essentially calls an anonymous function for the whole document.
// $('#switch on').on('click', function()) {
// //This will happen when the class 'switch on' is clicked.
// window.alert('THEY FLIPPED THE SWITCH!');
// }
var words = $('.status');

var butts = $('button');

var lights = $('body');

var count = 0;

// I LIKE TO DEFINE VARIABLES, OKAY. SYNTAX IS TOUGH.

$('button').click(function() {
  count++;
  if (count % 2 === 0) {
    words.text('Sure is bright in here!');
    butts.attr('class', 'switch on');
    lights.attr('class', 'light');
  } else {
    words.text('Hey, who turned off the lights?!');
    butts.attr('class', 'switch off');
    lights.attr('class', 'dark');
  }
});
// Used singular if statement to capture on/off state, instead of toggleClass, and numerical even/odd count to determine on/off status. Still works though?
})
