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
let maxSize = 150;
let blowingFrames = 0;


function setup() {
    createCanvas(500, 400);
    noStroke();
}

function draw() {
    background(255, 105, 180);


    // Check if the mouse is pressed
    if (mouseIsPressed) {
        blowingFrames = blowingFrames + 1
        // Draw the circle at the mouse position (make it pink)
        fill(255, 182, 193);
        circle(mouseX, mouseY, circleSize)
        circleSize += 25 /
            (blowingFrames);
        if (circleSize >= maxSize) {
            circleSize = 5;
            maxSize = maxSize - 50;
            blowingFrames = 0;

        }
    } else {
        circleSize = 5; // Reset size when mouse is released
        blowingFrames = 0;
    }



}








