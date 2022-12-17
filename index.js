// src = "index.js" // src is short for source, index.js is the javascript file to pull code from
// console available in all browsers
// javascript runs from the top
// repition not good in code
// scoped variables cannot be called outside the function
// Document Object Model - how you use JavaScript to modify a website
// document keyword is of the data type object
// console highlights strings with white and numbers with blue
// Use Google to find better code and debug if needed - mozilla developers network, stack overflow
// MAKE IT WORK FIRST THEN MAKE IT BETTER

var countEl = document.getElementById("count-el")
var saveEl = document.getElementById("save-el")
var count = 0

function increment() {
    count ++
    countEl.textContent = count
}

function save() {
    var counter = count + " - "
    saveEl.textContent += counter // To not remove previous entries
    countEl.textContent = 0
    count = 0
}
