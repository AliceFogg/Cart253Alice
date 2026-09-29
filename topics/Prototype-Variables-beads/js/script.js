
//* Bead Monger
//* Alice Fogg
//* LARP as a bead salesman. The faster you swipe, the bigger the beads!

"use strict";

//set up a 600 by 400 canvas
function setup() {
    createCanvas(600, 400);
}


//draw circles based on how fast the mouse is moving
function draw() {
    stroke(0)
    strokeWeight(1)
    let speed = dist(pmouseX, pmouseY, mouseX, mouseY)

    let dia = map(speed, 0, 100, 5, 100)
    ellipse(mouseX, mouseY, dia)


    //change the colour based on the speed (constrained to pink,blue,purple)
    let colorValue = map(speed, 0, 100, 50, 255)
    colorValue = constrain(colorValue, 50, 255)
    fill(colorValue, 100, 200)
}