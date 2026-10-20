/**
 * Check your bank account 
 * Alice Fogg
 * 
 * Check your account balance! what'll it be this time? 
 */

"use strict";

/**
 * Define the parameters of the button 
*/
let btnX = 150;
let btnY = 250;
let btnW = 100;
let btnH = 40;
let btnColor;

//set up drop 
let drop = "Check account balance";


function setup() {
    createCanvas(400, 400);
    btnColor = color(52, 182, 219);

}

function draw() {
    background(220);

    // Draw the button rectangle
    fill(btnColor);
    rect(btnX, btnY, btnW, btnH, 5);

    // Draw text
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(14);
    //text('Check account balance', 200, 190)

    //account results on the screen 
    fill(0);
    textSize(14);
    text(drop, 200, 150);
}



function mousePressed() {
    // Check if click is inside the button 
    if (
        mouseX >= btnX &&
        mouseX <= btnX + btnW &&
        mouseY >= btnY &&
        mouseY <= btnY + btnH
    ) {
        //probability of different account numbers
        let p = random();

        if (p < 0.01) {
            drop = "You won the lottery?? +90 MIL"

        }
        if (p < 0.11) {
            drop = "Pay day!! +650$ "

        }
        if (p < 0.31) {
            drop = " your sandwich and chips were 22$ :( -22$"
        }

        if (p < 0.61) {
            drop = "You spent 45$ today, you don't remember? -45$"
        }

        if (p < 0.81) {
            drop = "random apple charge -7$"
        } else {
            drop = "your friend payed you back! + 24$"
        }
    }
}