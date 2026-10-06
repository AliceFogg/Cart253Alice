/**
 * Button Game
 * Alice Fogg
 * 
 * A game with a very simple objective: Don't click the button!
 */

"use strict";

//*Important credit to Mara, who helped me write a large amount of the code for this particular project* 
//UPDATED FROM LAST WEEK

// Button 
let btnX = 200;
let btnY = 200;
let btnSize = 120; // diameter
let btnLabel = "Don't click me"; //want to figure out how to underline the "don't"

// Font
let fontName = "Arial";
let clicked = false;


function setup() {
    createCanvas(400, 400);

}

function draw() {
    background(240);


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

