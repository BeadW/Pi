const pi = ['3','1','4']
const current_state = document.getElementById("Current")
const command_pane = document.getElementById("Commands")
let counter = 0;
let errors = 0;

function startGame() {
    counter = 0
    current_state.innerHTML = ""
    command_pane.innerHTML = "Enter the first value of pi"
}

function makeMove() {
    let guess = getInput()
    if (guess == pi[counter]) {
        goodMove()
        current_state.innerHTML += guess
        counter++
    }
    else {
        badMove(guess)
    }
    document.getElementById("inputId").value = ''
    if (counter === pi.length) {
        win(pi)
    }
}

// Get input from player
function getInput() {
    // Selecting the input element and get its value
    return document.getElementById("inputId").value;
}

// Correct Move
function goodMove() {
    command_pane.innerHTML = "Good work! Try the next number."
}

// Incorrect Move
function badMove(guess) {
    if (guess === '' ) {
        command_pane.innerHTML = guess + "You didn't enter a number. Have another attempt."
    }
    else {
        command_pane.innerHTML = guess + " is not it. Have another attempt."
        errors++
    }
}

// Winning
function win(pi) {
    command_pane.innerHTML = "Well done you got all " + pi.length + " with " + errors + " mistake/s."
}