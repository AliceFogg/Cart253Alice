/**
 * Bubble Blower 2
 * Alice Fogg
 * 
 * 
 * AN expansion on last weeks bubble blower,, now it pops!!
 */

"use strict";

//Starting size of my bubble
let circleSize = 5;


function setup() {
    createCanvas(500, 400);
    noStroke();
}

function draw() {
    background(220);

    // Check if the mouse is pressed
    if (mouseIsPressed) {
        circle(mouseX, mouseY, circleSize)
        circleSize += 10 /
            (frameCount * frameCount / 2000)

    } else {
        circleSize = 5; // Reset size when mouse is released
    }

    // Draw the circle at the mouse position
    fill(0, 102, 204);


}






