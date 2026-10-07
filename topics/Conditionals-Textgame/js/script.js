/**
 * Button Game
 * Alice Fogg
 * 
 * A game with a very simple objective: Don't click the button!
 */

"use strict";

//*Important credit to Mara, who helped me write a large amount of the code for this particular project* 


// Button 
let btnX = 200;
let btnY = 200;
let btnSize = 120; // diameter
let btnLabel = "Don't click me"; //want to figure out how to underline the "don't"

// Font
let fontName = "Arial";
let clicked = false;

//text in the center setup 


function setup() {
    createCanvas(400, 400);
    textFont(fontName);
    textAlign(CENTER, CENTER);
    textSize(14);
}

//draw a message when clicked 
function draw() {
    background(240);
    if (clicked == false) {
        drawButton();
    } else {
        drawMessage();
    }


}
//Draw the Button
function drawButton() {
    noStroke();
    if (mouseOverButton()) {
        fill(255); // White colour on hover
    } else {
        fill(220, 30, 30); //big red button 
    }
    circle(btnX, btnY, btnSize);

    fill(0); // Black text
    text(btnLabel, btnX, btnY);
}

//you lose message
function drawMessage() {
    fill(255, 0, 0);
    text("You lose", btnX, btnY);
}


//*This last section of code was written by Mara, full credit to her, (she explained her process to me, but this is her work)

//make the button disappear when clicked
function mouseClicked() {
    if (clicked == false && mouseOverButton()) {
        clicked = true;
    }
}

function mouseOverButton() {
    return dist(mouseX, mouseY, btnX, btnY) < btnSize / 2;
}

