/**
 * Kick the can!
 * Alice Fogg 
 * 
 * did anyone actually play kick the can? well now you (kinda) can online 
 * MAKE SURE YOU KEEP THE CAN IN YOUR DRIVEWAY!! (the canvas) OTHRWISE YOU'RE GROUNDED!!
*/



"use strict";

let canX = 350
let canY = 300

let kicked = false;

let speedX = 0
let speedY = 0
let gravity = 0.7
let ground = 300

function setup() {
    createCanvas(600, 400);
}


function draw() {
    background(225)

    if (kicked) {
        canX = canX + speedX;
        canY = canY + speedY;
        speedY = speedY + gravity;


        if (canY > ground) {
            canY = ground;
            speedY = speedY * -0.5

            speedX = speedX * 0.8

            if (abs(speedY) < 1 && abs(speedX) < 0.5)
                kicked = false
            speedX = 0
            speedY = 0

        }
    }

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