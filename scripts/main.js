/*
var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World!';

var myVariable = 'Bob';
myVariable = 'Steve';
*/

/*
Everything in between is a comment.
*/
// This is a comment.

/*
var iceCream = 'chocolate';
if(iceCream === 'chocolate') {
    alert('Yay, I love chocolate!');
} else {
    alert('Shit!');
}
*/

function multiply(num1, num2) {
    var result = num1 * num2;
    return result;
}

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/ui-concept-sketch.jpg') {
        myImage.setAttribute('src', 'images/crimsontext-embed.png');
    } else {
        myImage.setAttribute('src', 'images/ui-concept-sketch.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Graphs are the future of ML, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Graphs are the future of ML, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}
