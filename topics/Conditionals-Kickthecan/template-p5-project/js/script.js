/**
 * Kick the can!
 * Alice Fogg 
 * 
 * did anyone actually play kick the can? well now you (kinda) can online 
 * MAKE SURE YOU KEEP THE CAN IN YOUR DRIVEWAY!! (the canvas) OTHRWISE YOU'RE GROUNDED!!
*/



"use strict";


//starting variables for my can
let canX = 350
let canY = 300

//kicked condition setup
let kicked = false;

//speed starts out at 0
let speedX = 0
let speedY = 0

//setup for gravity and ground 
let gravity = 0.7
let ground = 300 //where the bounce is triggered 

//create canvas
function setup() {
    createCanvas(600, 400);
}

//draw the background
function draw() {
    background(225)


    //setup for the kicked
    if (kicked) {
        canX = canX + speedX;
        canY = canY + speedY;
        speedY = speedY + gravity;


        //kick the can based on which side of it was pressed, bounce if it hits the ground 
        if (canY > ground) {
            canY = ground;
            speedY = speedY * -0.5

            speedX = speedX * 0.8
            if (abs(speedY) < 1 && abs(speedX) < 0.5) {

                kicked = false
                speedX = 0
                speedY = 0

            }
        }

    }

    //if the can leaves either side of the canvas, display a "you're grounded"
    if (canX < 0 || canX > width) {
        text("YOU'RE GROUNDED", 260, 100);

    }




    //Can rectangle base

    //fill(50,50,50)
    rect(canX - 38, canY - 200, 80, 150);

    // 3. Draw the top lid 
    ellipse(canX + 2, canY - 200, 80, 40,);
    strokeWeight(2)


    // 2. Draw the bottom lid
    ellipse(canX + 2, canY - 47, 80, 40);
}

//if the mouse is inside the can and the mouse is pressed, kick the can 
function mousePressed() {
    if (mouseX > canX - 38 && mouseX < canX + 42 &&
        mouseY > canY - 220 && mouseY < canY - 30) {
        kicked = true

        if (mouseX < canX + 2) {
            speedX = 8;
        } else {
            speedX = -8;
        }
        speedY = -10;
    }



}
